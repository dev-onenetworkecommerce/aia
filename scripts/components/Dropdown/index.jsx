import React, { DOM, PropTypes } from 'react';
import DomUtils from '../../utils/DomUtils';
import on from '../../utils/on';

const ESC_KEY = 27;
const TRIGGER_REF = '@_trigger';
// Flag if a node inside the root element should close.
// export const CLOSE_EXCEPTION_CLASS = 'js-dropdown-ex-flag';

class Dropdown extends React.Component {
  static propTypes = {
    /**
     * The component which toggles the dropdown
     * It should be a function that returns a VDOM node.
     */
    trigger: PropTypes.func,

    element: PropTypes.oneOfType([
      PropTypes.oneOf([
        // no reason for the dropdown element
        // to be another
        'span',
        'div',
        'a',
        'li'
      ]),

      // in case yo want to pass a itself
      // <Dropdown element={DOM.a}></Dropdown>
      // <Dropdown element={MyElement}></Dropdown>
      PropTypes.element
    ]).isRequired,

    /**
     * Props which disabled the whole component to function
     */
    disabled: PropTypes.bool
  }

  static defaultProps = {
    element: DOM.span,
    disabled: false
  }

  constructor(props) {
    super(props);

    // active = used to show / hide the dropdown menu
    this.state = { active: false };
  }

  componentDidMount() {
    this.$clickUnlistener = on(document, 'click', this.handleClick.bind(this));
    this.$keyUpUnlistener = on(document, 'keyup', this.handleKeyUp.bind(this));
  }

  componentWillUnmount() {
    this.$clickUnlistener();
    this.$keyUpUnlistener();
  }

  render() {
    let { active } = this.state;
    let { trigger, element, children, ...props } = this.props;

    return (typeof element === 'string'
      ? DOM[element]
      : element)(
        props,
        trigger(TRIGGER_REF) active ? children : null
      );
  }

  handleClick(evt) {
    const { active } = this.state;
    const { disabled } = this.props;
    const target = evt.target;
    const root = React.findDOMNode(this);
    // "Hey, dropdown, fuck it, it's disabled, okay?"
    // "It's not me, it's them, dropdown!"
    // let hasClass = DomUtils.hasClass(target, CLOSE_EXCEPTION_CLASS);
    if ( disabled ) {
      return false;
    }

    const triggerNode = React.findDOMNode(this.refs[TRIGGER_REF]);
    // We'll create this condition here, so we don't use
    // `preventDefault` and `stopPropagation` on child nodes
    // or elements not inside the root node.
    if ( target === triggerNode ) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
    }

    this.setState({ active: DomUtils.isNodeInRoot(target, root) ? !active : false });
  }

  handleKeyUp(evt) {
    // Close the dropdown menu when the `escape` key is pressed
    // while the state is active (menu is shown).
    if ( this.state.active && evt.keyCode === ESC_KEY ) {
      this.setState({ active: false });
    }
  }
}

export default Dropdown;
