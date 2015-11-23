import React, { cloneElement, PropTypes } from 'react';
import { render, unmountComponentAtNode, findDOMNode } from 'react-dom';
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
    show: false ,
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
    text: 'Input Tooltip Text here',
  }

  componentDidMount() {
    this.mountContainer();
    if ( this.state.show ) {
      this.mountTooltip();
    }
    findDOMNode(this).addEventListener('mouseenter', this.handleMouseEnter);
    findDOMNode(this).addEventListener('mouseout', this.handleMouseOut);
  };

  componentWillUnmount() {
    this.unmountTooltip();
    this.unmountContainer();
    findDOMNode(this).removeEventListener('mouseenter', this.handleMouseEnter);
    findDOMNode(this).removeEventListener('mouseout', this.handleMouseOut);
  };

  componentDidUpdate() {
     this.state.show
     ? this.mountTooltip()
     : this.unmountTooltip();
  }

  render() {
    return <span>{this.props.children}</span>;
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

    this.$tooltip = render(
      cloneElement(
        <div className={this.selectArrow()}>
          {this.props.text}
        </div>, {
        style: {
          top: this.state.top,
          left: this.state.left,
          position: "absolute"
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

  selectArrow() {
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
