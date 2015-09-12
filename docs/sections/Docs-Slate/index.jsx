import React from 'react';

export default class Slate extends React.Component {
  render() {
    return (
      <div>
        <div className="slate">
        	<h2>Simple Slate</h2>
        	<small>simple slate with padding 30px on all sides and 10px margin on all sides.</small>
        </div>
        <div className="slate -spacious">
          <h2>Slate spacious</h2>
          <small>Adds padding to your contents</small>
        </div>
        <div className="slate -tidy-background">
          <h2>Slate with No Background</h2>
          <small>No border-radius and white background</small>
        </div>
        <div className="slate -half-slate">
          <h2>Half Slate</h2>
          <small>Slate with 50% width</small>
        </div>
      </div>
    );
  }
}
