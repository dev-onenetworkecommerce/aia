'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = {
  /**
   * Checks whether a node is within
   * a root nodes tree
   *
   * Copyright 2014+ React Bootstrap.
   * This content of this was copied from
   * https://github.com/react-bootstrap/react-bootstrap/blob/master/src/DropdownStateMixin.js
   *
   * @param {DOMElement} node
   * @param {DOMElement} root
   * @returns {boolean}
   */
  isNodeInRoot: function isNodeInRoot(node, root) {
    while (node) {
      if (node === root) {
        return true;
      }
      node = node.parentNode;
    }

    return false;
  },

  /**
   * Checks if the given node has the given class
   *
   * @param {DOMElement} node
   * @param {string} className
   * @returns {boolean}
   */
  hasClass: function hasClass(node, className) {
    return node.className.split(' ').indexOf(className) !== -1;
  }
};
module.exports = exports['default'];