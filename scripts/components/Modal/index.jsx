import React, { PropTypes } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { addClass, removeClass } from '../../utils/DomUtils';

const MODAL_BODY_CLASS = 'modal-body';
const MODAL_BACKDROP_CLASS = 'modal-backdrop';
const ESC_KEY = 27;

export default class Modal extends React.Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);

    this.handleKeyUp = ::this.handleKeyUp;
  };

  static defaultProps = {
    open: false
  };

  componentDidMount() {
    this.mountContainer();

    if ( this.props.open ) {
      this.mountModal();
    }
    window.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    this.unmountModal();
    this.unmountContainer();
    window.addEventListener('keyup', this.handleKeyUp);
  }

  componentDidUpdate(prevProps) {
    if ( this.props.open ) {
      this.mountModal();
    } else {
      this.unmountModal();
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

    // @REFACTOR
    // Move to another function
    removeClass(document.body, MODAL_BODY_CLASS);

    unmountComponentAtNode(this.$container);
    this.$modal = null;
  }

  handleKeyUp(evt) {
    if ( this.props.open && evt.keyCode === ESC_KEY ) {
      this.props.onRequestClose();
    }
  }
}
