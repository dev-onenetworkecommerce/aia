import React from 'react';

export default class ImagePreLoader extends React.Component {
  state = {
    loaded: false,
    error: false
  };

  render() {
    const { image } = this.props;

    return (
      <div className="wrapper">
        { !this.state.loaded ? (<div className="loader" />) : '' } 

        <img 
          src={image} 
          onLoad={::this.imageLoad}
          onError={::this.imageError} 
          className="avatar" />
      </div>
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