import React, { cloneElement, PropTypes } from 'react';
import { unstable_renderSubtreeIntoContainer, unmountComponentAtNode, findDOMNode } from 'react-dom';
import { addClass, removeClass } from '../../utils/DomUtils';
import utils from './utils';

const ARROW_LEFT = 'tooltip -arrowright';
const ARROW_RIGHT = 'tooltip -arrowleft';
const ARROW_UP = 'tooltip -arrowdown';
const ARROW_DOWN = 'tooltip -arrowup';


export default class ToolTip extends React.Component {

  constructor(props) {
    super(props);

    this.handleMouseEnter = ::this.handleMouseEnter;
    this.handleMouseOut = ::this.handleMouseOut;
  }

  state = {
    show: false,
    top: 0,
    left: 0
  }

  static PropTypes = {
    position: PropTypes.oneOf([
    'top',
    'left',
    'right',
    'bottom'
    ]).isRequired,
    text: PropTypes.string.isRequired
  };

  static defaultProps = {
    position: 'left',
    text: ''
  }

  componentDidMount() {
    this.mountContainer();
    if ( this.state.show ) {
      this.mountTooltip();
    }
  };

  componentWillUnmount() {
    this.unmountTooltip();
    this.unmountContainer();
  };

  componentDidUpdate() {
     this.state.show
     ? this.mountTooltip()
     : this.unmountTooltip();
  }

  render() {
    return cloneElement(<span>{this.props.children}</span>, {
      onMouseEnter: ::this.handleMouseEnter,
      onMouseOut: ::this.handleMouseOut
    });
  };


  mountContainer() {
    this.$container = document.createElement('div');
    document.body.appendChild(this.$container);
  };

  unmountContainer() {
    if ( this.$container == null ) {
      return ;
    }

    document.body.removeChild(this.$container);
    this.$container = null;
  };

  mountTooltip() {
    if ( !this.$container ) {
      throw new Error(
        'The container does not exist. ' +
        'It may have been removed, or whatever'
      );
    }

    this.$tooltip = unstable_renderSubtreeIntoContainer(
      this,
      cloneElement(
        <div className={this.getArrowClassName()}>
          {this.props.text}
        </div>, {
        style: {
          top: this.state.top,
          left: this.state.left,
          position: 'absolute'
        }
      }),
      this.$container
    );
  }

  unmountTooltip() {
    if ( this.$tooltip == null ) {
      return;
    }

    unmountComponentAtNode(this.$container);
    this.$tooltip = null;
  }

  handleMouseEnter() {
    this.setState({
      show: true
    }, () => {
      let trigger = findDOMNode(this);
      let overlay = findDOMNode(this.$tooltip);
      let { position } = this.props;
      let { top, left } = utils.calculatePosition(trigger, overlay, position);
      this.setState({ top, left });
    });
  };

  handleMouseOut() {
    this.setState({ show: false });
  }

  getArrowClassName() {
    switch(this.props.position) {
      case 'top':
        return ARROW_UP;
      case 'bottom':
        return ARROW_DOWN;
      case 'left':
        return ARROW_LEFT;
      case 'right':
        return ARROW_RIGHT;
      default:
        return null;
    }
  }


}
