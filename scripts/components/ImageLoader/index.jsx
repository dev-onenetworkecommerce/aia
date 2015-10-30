import React, { PropTypes } from 'react';
import { render, unmountComponentAtNode} from 'react-dom';
impport { addClass, removeClass } from '../../utils/DomUtils';

const WRAPPER_CLASS = 'wrapper';

export default class ImagePreLoader extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return <noscript />;
  }

  mountContainer() {
    this.$container = document.createElement('div');
    document.body.appendChild(this.$container);
  }

  unMountContainer() {
    if ( this.$container == null ) {
      return;
    }

    document.body.removeChild(this.$container)
    this.$container = null;
  }

  mountImagePreLoader() {
    if ( this.$container == null ) {
      throw new Error(
        'The container does not exist. ' +
        'It may have been removed, or whatever'
      );
    }

    addClass(document.body, WRAPPER_CLASS);

    this.$imagePreLoader = render(
      <div>
        <div />
        {this.props.children}
      </div>
    );
  }

  unmountImagePreLoader() {
      if ( this.$imagePreLoader == null ) {
        return;
      }

      removeClass(document.body, WRAPPER_CLASS);

      unmountComponentAtNode(this.$container);
      this.$imagePreLoader = null;
  }
}