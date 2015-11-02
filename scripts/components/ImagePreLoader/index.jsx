import React, { PropTypes, cloneElement } from 'react';
import { render, unmountComponentAtNode, findDOMNode } from 'react-dom';
import { addClass, removeClass } from '../../utils/DomUtils';

const IMAGEPRELOADER_BACKDROP_CLASS = 'wrapper';
const IMAGE_PRELOADER_BODY_CLASS = 'loader';

export default class ImagePreLoader extends React.Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    wrapper: PropTypes.object.isRequired
  };

  state = {
    loaded: false,
    top: 0,
    left: 0,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.mountContainer();

    if ( !this.state.loaded ) {
      this.mountImagePreLoader();
    }

    const trigger = findDOMNode(this);

    const { top, left } = trigger.getBoundingClientRect();
    this.setState({ top, left });
  }

  componentWillUnmount() {
    this.unmountContainer();
    this.unmountImagePreLoader();
  }

  componentDidUpdate(prevProps) {
    if ( !this.state.loaded ) {
      this.mountImagePreLoader();
    } else {
      this.unmountImagePreLoader();
    }
  }

  render() {
    return (<img
      src={this.props.src} 
      onLoad={::this.imageOnLoad} 
      onError={::this.imageOnError} 
      />);
  }

  imageOnLoad() {
    this.setState({ loaded: true });
  }

  imageOnError() {
    this.setState({ loaded: false });
    window.alert('error on loading image');
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

  mountImagePreLoader() {
    if ( this.$container == null ) {
      throw new Error(
        'The container does not exist.' + 
        'It may have been removed'
      );
    }

    this.$imagePreLoader = render(
      cloneElement(this.props.wrapper, {
        style: {
          top: this.state.top,
          left: this.state.left
        }
      }),
      this.$container
    );
  }

  unmountImagePreLoader() {
    if ( this.$imagePreLoader == null ) {
      return;
    }

    unmountComponentAtNode(this.$container);
    this.$imagePreLoader = null;
  }
}
