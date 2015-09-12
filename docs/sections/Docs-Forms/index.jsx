import React from 'react';

export default class Forms extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3">
        </div>

        <div className="col-md-9">
          {this.props.children}
        </div>
      </div>
    );
  }
}
