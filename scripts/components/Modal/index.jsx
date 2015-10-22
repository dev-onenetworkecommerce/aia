import React, { PropTypes } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { addClass, removeClass } from '../../utils/DomUtils';

const MODAL_BODY_CLASS = 'modal-body';
const MODAL_BACKDROP_CLASS = 'modal-backdrop';

export default class Modal extends React.Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    open: false
  };

  componentDidMount() {
    if ( this.props.open ) {
      this.mountContainer();
      this.mountModal();
    }
  }

  componentWillUnmount() {
    this.unmountModal();
    this.unmountContainer();
  }

  componentDidUpdate(prevProps) {
    // Avoid remount / reunmount
    if ( prevProps.open === this.props.open ) {
      return;
    }

    if ( this.props.open ) {
      this.mountContainer();
      this.mountModal();
    } else {
      this.unmountModal();
      this.unmountContainer();
    }
  }

  render() {
    return <noscript />;
  }

  mountContainer() {
    this.$container = document.createElement('div');
    document.body.appendChild(this.$container);
  }

  unmountContainer() {
    if ( this.$container == null ) {
      return;
    }

    // @REFACTOR
    // Move to another function
    removeClass(document.body, MODAL_BODY_CLASS);

    document.body.removeChild(this.$container);
    this.$container = null;
  }

  mountModal() {
    if ( this.$container == null ) {
      throw new Error(
        'The container does not exist. ' +
        'It may have been removed, or whatever'
      );
    }

    // @REFACTOR
    // Move to another function
    addClass(document.body, MODAL_BODY_CLASS);

    this.$modal = render(
      <div>
        <div className={MODAL_BACKDROP_CLASS} />
        {this.props.children}
      </div>,
      this.$container
    );
  }

  unmountModal() {
    if ( this.$modal == null ) {
      return;
    }

    unmountComponentAtNode(this.$container);
    this.$modal = null;
  }
}
