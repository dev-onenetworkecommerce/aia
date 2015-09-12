/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * This file contains a modified version of:
 * https://github.com/facebook/react/blob/v0.12.0/src/vendor/stubs/EventListener.js
 *
 * This file's contents were copied from:
 * https://github.com/react-bootstrap/react-bootstrap/blob/master/src/utils/EventListener.js
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * TODO: remove in favour of solution provided by:
 *  https://github.com/facebook/react/issues/285
 */

/**
 * Does not take into account specific nature of platform.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function (target, evt, callback) {
  if (target.addEventListener) {
    target.addEventListener(evt, callback, false);
    return function () {
      target.removeEventListener(evt, callback, false);
    };
  } else if (target.attachEvent) {
    target.attachEvent('on' + evt, callback);
    return function () {
      target.detachEvent('on' + evt, callback);
    };
  }
};

;
module.exports = exports['default'];
/**
 * Listen to DOM events during the bubble phase.
 *
 * @param {DOMEventTarget} target DOM element to register listener on.
 * @param {string} evt Event type, e.g. 'click' or 'mouseover'.
 * @param {function} callback Callback function.
 * @return {function} Function which invokes the unlistener
 */