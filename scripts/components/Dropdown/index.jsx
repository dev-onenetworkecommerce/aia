import React, { cloneElement, PropTypes } from 'react';
import { findDOMNode, render, unmountComponentAtNode } from 'react-dom';
import utils from './utils';

const ESC_KEY = 27;
const DEFAULT_POSITION = {
  x: 'left',
  y: 'bottom'
};

export default class Dropdown extends React.Component {
  static propTypes = {
    /**
     * The element used to trigger the open state
     */
    trigger: PropTypes.element.isRequired,

    position: PropTypes.shape({
      x: PropTypes.oneOf(['left', 'right']),
      y: PropTypes.oneOf(['top', 'bottom'])
    }).isRequired
  };

  static defaultProps = {
    position: DEFAULT_POSITION
  };

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      top: 0,
      left: 0
    };

    this._handleClick = ::this._handleClick;
    this._handleEsc = ::this._handleEsc;
  }

  // Register click and keydown event listeners
  componentDidMount() {
    this.mountDropdownContainer();
    window.addEventListener('click', this._handleClick);
    window.addEventListener('keydown', this._handleEsc);
  }

  // Unregister all event listeners
  componentWillUnmount() {
    this.unmountDropdownContainer();
    this.unmountDropdown();
    window.removeEventListener('click', this._handleClick);
    window.removeEventListener('keydown', this._handleEsc);
  }

  componentDidUpdate() {
    if ( !this.state.open ) {
      this.unmountDropdown()
    } else {
      this.mountDropdown();
    }
  }

  render() {
    return this.props.trigger;
  }

  mountDropdown() {
    if ( !this.$container ) {
      throw new Error('Container does not exist. It may have been removed, or whatever');
    }

    this.$dropdown = render(
      cloneElement(this.props.children, {
        style: {
          top: this.state.top,
          left: this.state.left
        }
      }),
      this.$container
    );
  }

  unmountDropdown() {
    unmountComponentAtNode(this.$container);
    this.$dropdown = null;
  }

  mountDropdownContainer() {
    this.$container = document.createElement('div');
    document.body.appendChild(this.$container);
  }

  unmountDropdownContainer() {
    if ( this.$container ) {
      document.body.removeChild(this.$container);
      this.$container = null;
    }
  }

  setPosition() {
    const offset = utils.calculatePosition(
      findDOMNode(this),
      this.$dropdown,
      this.getPositionProps()
    );

    this.setState(offset);
  }

  getPositionProps() {
    const { position } = this.props;

    return {
      x: position.x || DEFAULT_POSITION.x,
      y: position.y || DEFAULT_POSITION.y
    };
  }

  _handleEsc(evt) {
    if ( this.state.open && evt.keyCode === ESC_KEY ) {
      this.setState({ open: false });
    }
  }

  _handleClick(evt) {
    const { open } = this.state;
    const triggerNode = findDOMNode(this);

    // If the target is not itself
    if ( open && evt.target !== triggerNode ) {
      this.setState({ open: false });
    // If the target is itself
    } else if ( evt.target === triggerNode ) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      this.setState({ open: !open }, () => {
        // Given that we have a new state here,
        // we'll directly use `this.state.open`
        // instead of the declare constant above.
        if ( this.state.open ) {
          this.setPosition();
        }
      });
    }
  }
}
