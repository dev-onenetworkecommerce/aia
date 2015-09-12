'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var $container = document.body;
// Export for testing
var $OVERLAY_CONTAINER_PROP = '@@_OVERLAY_CONTAINER';
exports.$OVERLAY_CONTAINER_PROP = $OVERLAY_CONTAINER_PROP;
var $OVERLAY_CONTAINER_INSTANCE_PROP = '@@_OVERLAY_CONTAINER_INSTANCE';

exports.$OVERLAY_CONTAINER_INSTANCE_PROP = $OVERLAY_CONTAINER_INSTANCE_PROP;
/**
 * Tooltip
 *
 * @usage
 * <Overlay trigger={() => { return <div className="tooltip"; }}>
 *   <a href="#"> .. </a>
 * </Overlay>
 *
 * Limitations:
 * - No transitional delays
 * - No display / hide delays
 * - No other event trigger besides mousein -> mouseout
 * - Changes are not tracked (placement or whatever) :)
 */

var OverlayTrigger = (function (_React$Component) {
  _inherits(OverlayTrigger, _React$Component);

  _createClass(OverlayTrigger, null, [{
    key: 'propTypes',
    value: {
      /**
       * The overlay component
       */
      overlay: _react2['default'].PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.Element]).isRequired,

      /**
       * Position to display the overlay
       */
      position: _react.PropTypes.oneOf(['top', 'left', 'right', 'bottom'])
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      position: 'left'
    },
    enumerable: true
  }]);

  function OverlayTrigger(props) {
    _classCallCheck(this, OverlayTrigger);

    _get(Object.getPrototypeOf(OverlayTrigger.prototype), 'constructor', this).call(this, props);
    this.state = {
      show: false,
      top: 0,
      left: 0
    };
  }

  _createClass(OverlayTrigger, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._mountOverlayContainer();
      this._mountOverlay();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._unmountOverlay();
      this._unmountOverlayContainer();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      // Remount the overlay
      if (this[$OVERLAY_CONTAINER_INSTANCE_PROP]) {
        this._unmountOverlay();
      }

      this._mountOverlay();
    }
  }, {
    key: 'render',
    value: function render() {
      return (0, _react.cloneElement)(this.props.children, {
        onMouseEnter: this._handleMouseEnter.bind(this),
        onMouseOut: this._handleMouseOut.bind(this)
      });
    }

    /**
     * Displays the overlay
     */
  }, {
    key: '_handleMouseEnter',
    value: function _handleMouseEnter() {
      var _this = this;

      this.setState({ show: true }, function () {
        var trigger = _react2['default'].findDOMNode(_this);
        var overlay = _react2['default'].findDOMNode(_this[$OVERLAY_CONTAINER_INSTANCE_PROP]);
        var position = _this.props.position;

        var _utils$calculatePosition = _utils2['default'].calculatePosition(trigger, overlay, position);

        var top = _utils$calculatePosition.top;
        var left = _utils$calculatePosition.left;

        _this.setState({ top: top, left: left });
      });
    }

    /**
     * Hides the overlay
     */
  }, {
    key: '_handleMouseOut',
    value: function _handleMouseOut() {
      this.setState({ show: false });
    }

    /**
     * Mounts the overlay and its container
     */
  }, {
    key: '_mountOverlay',
    value: function _mountOverlay() {
      // Mount the overlay itself
      var offset = { top: this.state.top, left: this.state.left };
      var overlay = typeof this.props.overlay == 'function' ? this.props.overlay() : this.props.overlay;

      this[$OVERLAY_CONTAINER_INSTANCE_PROP] = _react2['default'].render(this.state.show ? cloneWithProps(overlay, offset) : _react2['default'].createElement('span', null), this[$OVERLAY_CONTAINER_PROP]);
    }
  }, {
    key: '_mountOverlayContainer',
    value: function _mountOverlayContainer() {
      // Mount the container
      this[$OVERLAY_CONTAINER_PROP] = document.createElement('div');
      $container.appendChild(this[$OVERLAY_CONTAINER_PROP]);
    }

    /**
     * Unmounts the overlay and its container
     */
  }, {
    key: '_unmountOverlay',
    value: function _unmountOverlay() {
      _react2['default'].unmountComponentAtNode(this[$OVERLAY_CONTAINER_PROP]);
      this[$OVERLAY_CONTAINER_INSTANCE_PROP] = null;
    }
  }, {
    key: '_unmountOverlayContainer',
    value: function _unmountOverlayContainer() {
      $container.removeChild(this[$OVERLAY_CONTAINER_PROP]);
      this[$OVERLAY_CONTAINER_PROP] = null;
    }
  }]);

  return OverlayTrigger;
})(_react2['default'].Component);

exports['default'] = OverlayTrigger;