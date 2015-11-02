import React from 'react'
import ImagePreLoader from '../../../scripts/components/ImagePreLoader';

export default class ImagePreLoaderView extends React.Component {
  state = {
    loaded: false
  };

  render() {
    return (
      <div> 
        <ImagePreLoader
          src="http://placehold.it/200x200"
          wrapper={<div className="wrapper" />} />
      </div>
    );
  }
}