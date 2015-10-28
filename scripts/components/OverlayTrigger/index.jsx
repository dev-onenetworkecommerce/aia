import React, { PropTypes, cloneElement, cloneWithProps } from 'react';
import utils from './utils';

let $container = document.body;
// Export for testing
export const $OVERLAY_CONTAINER_PROP = '@@_OVERLAY_CONTAINER';
export const $OVERLAY_CONTAINER_INSTANCE_PROP = '@@_OVERLAY_CONTAINER_INSTANCE';

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
export default class OverlayTrigger extends React.Component {
  static propTypes = {
    /**
     * The overlay component
     */
    overlay: React.PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.Element
    ]).isRequired,

    /**
     * Position to display the overlay
     */
    position: PropTypes.oneOf([
      'top',
      'left',
      'right',
      'bottom'
    ])
  };

  static defaultProps = {
    position: 'left'
  };

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      top: 0,
      left: 0
    };
  }

  componentDidMount() {
    this._mountOverlayContainer();
    this._mountOverlay();
  }

  componentWillUnmount() {
    this._unmountOverlay();
    this._unmountOverlayContainer();
  }

  componentDidUpdate() {
    // Remount the overlay
    if ( this[$OVERLAY_CONTAINER_INSTANCE_PROP] ) {
      this._unmountOverlay();
    }

    this._mountOverlay();
  }

  render() {
    return cloneElement(this.props.children, {
      onMouseEnter: this._handleMouseEnter.bind(this),
      onMouseOut: this._handleMouseOut.bind(this)
    });
  }

  /**
   * Displays the overlay
   */
  _handleMouseEnter() {
    this.setState({ show: true }, () => {
      let trigger = React.findDOMNode(this);
      let overlay = React.findDOMNode(this[$OVERLAY_CONTAINER_INSTANCE_PROP]);
      let { position } = this.props;
      let { top, left } = utils.calculatePosition(trigger, overlay, position);
      this.setState({ top, left });
    });
  }

  /**
   * Hides the overlay
   */
  _handleMouseOut() {
    this.setState({ show: false });
  }

  /**
   * Mounts the overlay and its container
   */
  _mountOverlay() {
    // Mount the overlay itself
    const offset = { top: this.state.top, left: this.state.left };
    const overlay = typeof this.props.overlay == 'function'
      ? this.props.overlay()
      : this.props.overlay;

    this[$OVERLAY_CONTAINER_INSTANCE_PROP] = React.render(
      this.state.show ? cloneWithProps(overlay, offset) : <span />,
      this[$OVERLAY_CONTAINER_PROP]
    );
  }

  _mountOverlayContainer() {
    // Mount the container
    this[$OVERLAY_CONTAINER_PROP] = document.createElement('div');
    $container.appendChild(this[$OVERLAY_CONTAINER_PROP]);
  }

  /**
   * Unmounts the overlay and its container
   */
  _unmountOverlay() {
    React.unmountComponentAtNode(this[$OVERLAY_CONTAINER_PROP]);
    this[$OVERLAY_CONTAINER_INSTANCE_PROP] = null;
  }

  _unmountOverlayContainer() {
    $container.removeChild(this[$OVERLAY_CONTAINER_PROP]);
    this[$OVERLAY_CONTAINER_PROP] = null;
  }
}
