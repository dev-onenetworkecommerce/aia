import React, { PropTypes } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { addClass, removeClass } from '../../utils/DomUtils';

const WRAPPER_CLASS = 'wrapper';
const LOADER_CLASS = 'loader';

export default class ImagePreLoader extends React.Component {
  
  constructor(props) {
    super(props);
  }

  static propTypes = {
    loading: PropTypes.bool.isRequired
  };

  componentWillMount() {
    this.mountContainer();

    if ( this.props.loading ) {
      this.mountImagePreLoader();
    }
  }

  componentWillUnMount() {
    this.unmountImagePreLoader();
    this.unMountContainer();
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
        <div className={LOADER_CLASS}/>
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