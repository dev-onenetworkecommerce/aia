import React from 'react';

export default class Slate extends React.Component {
  render() {
    return (
      <div>
        <h1>Slate</h1>
        <p>Use this for empty collections or loading resources.</p>
        <div className="slate doc-bottom-space">
        	<h2>Simple Slate</h2>
        	<small>simple slate with padding 30px on all sides and 10px margin on all sides.</small>
        </div>

        <div className="slate -spacious doc-bottom-space">
          <h2>Slate spacious</h2>
          <small>Adds padding to your contents</small>
        </div>

        <div className="slate -plain doc-bottom-space">
          <h2>Slate with No Background</h2>
          <small>No border-radius and white background</small>
        </div>

        <div className="slate -narrow doc-bottom-space">
          <h2>Half Slate</h2>
          <small>Slate with 50% width</small>
        </div>

        <div className="slate -narrow -centered">
          <h2>Half Slate</h2>
          <small>Centered slate with 50% width</small>
        </div>
      </div>
    );
  }
}
