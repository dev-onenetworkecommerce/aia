import React, { cloneElement, PropTypes } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { addClass, removeClass } from '../../utils/DomUtils';
import classnames from 'classnames';

const MODAL_BODY_CLASS = 'modal-body';
const MODAL_CLASS = 'modal';
const MODAL_TRANSITION_CLASS = '-fade';
const MODAL_TRANSITION_CLOSE_TIMEOUT_MS = 750;
const MODAL_BACKDROP_CLASS = 'modal-backdrop';
const ESC_KEY = 27;

export default class Modal extends React.Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    closeTimeoutMS: PropTypes.number
  };

  static defaultProps = {
    open: false,
    closeTimeoutMS: MODAL_TRANSITION_CLOSE_TIMEOUT_MS
  };

  state = {
    // @TODO
    // Rename this to `beforeClose`
    // to add focus management
    // https://github.com/rackt/react-modal/blob/master/lib/components/ModalPortal.js#L67
    closing: false
  };

  constructor(props) {
    super(props);

    this.handleKeyUp = ::this.handleKeyUp;
  };

  componentDidMount() {
    this.mountContainer();

    if ( this.props.open ) {
      this.open();
    }

    window.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillReceiveProps(nextProps) {
    if ( nextProps.open ) {
      this.open();
    } else {
      this.close();
    }
  }

  componentWillUnmount() {
    this.close();
    this.unmountContainer();
    clearTimeout(this.timer);
    window.addEventListener('keyup', this.handleKeyUp);
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

    this.$modal = render(
      <div>
        <div className={MODAL_BACKDROP_CLASS} />
        <div className={this.getModalClassName()}>
          {this.props.children}
        </div>
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

  open() {
    addClass(document.body, MODAL_BODY_CLASS);
    this.mountModal();
  }

  close() {
    if ( this.props.closeTimeoutMS > 0 ) {
      this.setState({ closing: true }, () => {
        this.timer = setTimeout(
          this.closeWithTimeout,
          this.props.closeTimeoutMS
        );
      });
    } else {
      this.closeWithoutTimeout();
    }
  }

  closeWithoutTimeout() {
    removeClass(document.body, MODAL_BODY_CLASS);
    this.setState({ closing: false });
    this.unmountModal();
  }

  getModalClassName() {
    return classnames(MODAL_CLASS, {
      [MODAL_TRANSITION_CLASS]: this.state.closing
    });
  }

  handleKeyUp(evt) {
    if ( evt.keyCode === ESC_KEY ) {
      this.props.onRequestClose();
    }
  }
}
