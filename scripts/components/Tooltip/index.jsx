import React, { PropTypes, findDOMNode } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import utils from './utils';



export default class ToolTip extends React.Component {

  state = {
    show: true
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
    text: 'Input Tooltip here',
  }

  componentDidMount() {
    const { show } = this.state;
    this.mountContainer();
    if ( show ) {
      this.mountTooltip();
    }

    findDOMNode(this).addEventListener('mouseenter',function(){
      console.log('123');
    });
  };

  componentWillUnmount() {
    this.unmountTooltip();
    this.unmountContainer();
  };

  render() {
    return <div>{this.props.children}</div>;
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
    if ( this.$container == null ) {
      throw new Error(
        'The container does not exist. ' +
        'It may have been removed, or whatever'
      );
    }

    this.$tooltip = render(
      <div>
        {this.props.text}
      </div>,
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


}
