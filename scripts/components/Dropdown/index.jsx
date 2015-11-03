import React, { cloneElement, PropTypes } from 'react';
import { findDOMNode, unstable_renderSubtreeIntoContainer, unmountComponentAtNode } from 'react-dom';
import utils from './utils';
import { isNodeInRoot } from '../../utils/DomUtils';

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

  state = {
    open: false,
    top: 0,
    left: 0
  };

  constructor(props) {
    super(props);

    this.handleClick = ::this.handleClick;
    this.handleEsc = ::this.handleEsc;
  }

  // Register click and keydown event listeners
  componentDidMount() {
    this.mountDropdownContainer();
    window.addEventListener('click', this.handleClick);
    window.addEventListener('keydown', this.handleEsc);
  }

  // Unregister all event listeners
  componentWillUnmount() {
    this.unmountDropdown();
    this.unmountDropdownContainer();
    window.removeEventListener('click', this.handleClick);
    window.removeEventListener('keydown', this.handleEsc);
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

    this.$dropdown = unstable_renderSubtreeIntoContainer(
      this,
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
    if ( this.$dropdown ) {
      unmountComponentAtNode(this.$container);
      this.$dropdown = null;
    }
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

  handleEsc(evt) {
    if ( this.state.open && evt.keyCode === ESC_KEY ) {
      this.setState({ open: false });
    }
  }

  handleClick(evt) {
    const { open } = this.state;
    const triggerNode = findDOMNode(this);

    // If the target is not itself
    if ( open && evt.target !== triggerNode ) {
      this.setState({ open: false });
    // If the target is itself
    } else if ( isNodeInRoot(evt.target, triggerNode) ) {
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
