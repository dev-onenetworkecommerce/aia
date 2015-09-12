'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsDomUtils = require('../../utils/DomUtils');

var _utilsDomUtils2 = _interopRequireDefault(_utilsDomUtils);

var _utilsOn = require('../../utils/on');

var _utilsOn2 = _interopRequireDefault(_utilsOn);

var ESC_KEY = 27;
var TRIGGER_REF = '@_trigger';
// Flag if a node inside the root element should close.
// export const CLOSE_EXCEPTION_CLASS = 'js-dropdown-ex-flag';

var Dropdown = (function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  _createClass(Dropdown, null, [{
    key: 'propTypes',
    value: {
      /**
       * The component which toggles the dropdown
       * It should be a function that returns a VDOM node.
       */
      trigger: _react.PropTypes.func,

      element: _react.PropTypes.oneOfType([_react.PropTypes.oneOf([
      // no reason for the dropdown element
      // to be another
      'span', 'div', 'a', 'li']),

      // in case yo want to pass a itself
      // <Dropdown element={DOM.a}></Dropdown>
      // <Dropdown element={MyElement}></Dropdown>
      _react.PropTypes.element]).isRequired,

      /**
       * Props which disabled the whole component to function
       */
      disabled: _react.PropTypes.bool
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      element: _react.DOM.span,
      disabled: false
    },
    enumerable: true
  }]);

  function Dropdown(props) {
    _classCallCheck(this, Dropdown);

    _get(Object.getPrototypeOf(Dropdown.prototype), 'constructor', this).call(this, props);

    // active = used to show / hide the dropdown menu
    this.state = { active: false };
  }

  _createClass(Dropdown, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.$clickUnlistener = (0, _utilsOn2['default'])(document, 'click', this.handleClick.bind(this));
      this.$keyUpUnlistener = (0, _utilsOn2['default'])(document, 'keyup', this.handleKeyUp.bind(this));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.$clickUnlistener();
      this.$keyUpUnlistener();
    }
  }, {
    key: 'render',
    value: function render() {
      var active = this.state.active;
      var _props = this.props;
      var trigger = _props.trigger;
      var element = _props.element;
      var children = _props.children;

      var props = _objectWithoutProperties(_props, ['trigger', 'element', 'children']);

      return (typeof element === 'string' ? _react.DOM[element] : element)(props, trigger(TRIGGER_REF) === active ? children : null);
    }
  }, {
    key: 'handleClick',
    value: function handleClick(evt) {
      var active = this.state.active;
      var disabled = this.props.disabled;

      var target = evt.target;
      var root = _react2['default'].findDOMNode(this);
      // "Hey, dropdown, fuck it, it's disabled, okay?"
      // "It's not me, it's them, dropdown!"
      // let hasClass = DomUtils.hasClass(target, CLOSE_EXCEPTION_CLASS);
      if (disabled) {
        return false;
      }

      var triggerNode = _react2['default'].findDOMNode(this.refs[TRIGGER_REF]);
      // We'll create this condition here, so we don't use
      // `preventDefault` and `stopPropagation` on child nodes
      // or elements not inside the root node.
      if (target === triggerNode) {
        evt.preventDefault();
        evt.stopPropagation && evt.stopPropagation();
      }

      this.setState({ active: _utilsDomUtils2['default'].isNodeInRoot(target, root) ? !active : false });
    }
  }, {
    key: 'handleKeyUp',
    value: function handleKeyUp(evt) {
      // Close the dropdown menu when the `escape` key is pressed
      // while the state is active (menu is shown).
      if (this.state.active && evt.keyCode === ESC_KEY) {
        this.setState({ active: false });
      }
    }
  }]);

  return Dropdown;
})(_react2['default'].Component);

exports['default'] = Dropdown;
module.exports = exports['default'];