import React from 'react';
import ImagePreLoader from '../../../scripts/components/ImagePreLoader';


export default class ImagePreLoaderView extends React.Component {
  state = {
    loaded: false,
    error: false
  };

  render() {

    return (
        <img 
          src="http://placehold.it/200x200" 
          onLoad={::this.imageLoad}
          onError={::this.imageError} 
          className="avatar" />
    );
  }

  imageLoad() {
    this.setState({ loaded: true });
  }

  imageError() {
    this.setState({ error: true });
    window.alert('Error on loading Image');
  }
}