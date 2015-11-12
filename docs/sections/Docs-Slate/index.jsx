import React from 'react';

export default class Slate extends React.Component {
  render() {
    return (
      <div>
        <section className="doc-bottom-space-large">
          <h1 className="doc-heading">Slate</h1>
          <p className="lead">Use this for empty collections or loading resources.</p>
          <div className="slate">
          	<h2>Simple Slate</h2>
          	<small>simple slate with padding 30px on all sides and 10px margin on all sides.</small>
          </div>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Example: Spacious</h3>
          <p>Add the .-spacious class to your slate.</p>
          <div className="slate -spacious">
            <h3>Slate spacious</h3>
            <small>Adds padding to your contents</small>
          </div>
        </section>

        <section className="doc-bottom-space">
          <h3 className="doc-heading">Example: Plain</h3>
          <p>You can make a plain slate by adding the .-plain modifier class</p>
          <div className="row">
            <div className="slate -plain">
              <h2>Slate with No Background</h2>
              <small>No border-radius and white background</small>
            </div>
          </div>
        </section>

        <div className="row doc-bottom-space">
          <h3 className="doc-heading">Example: Center Half-sized Slate</h3>
          <p>With the centered grid column, you can center a slate.</p>
          <div className="slate col-md-6 _centered">
            <h2>Centered Half Slate</h2>
            <small>Centered slate with 50% width</small>
          </div>
        </div>

        <section className="doc-bottom-space">
          <h3 className="doc-heading">Slate with Icons</h3>
          <p>Icons are automatically given a margin of <code>$spacer-large</code>.</p>
          <div className="slate">
            <i className="icon icon-cog -x8" />
            <h2>Half Slate with Icons</h2>
            <small>Centered slate with 50% width</small>
          </div>
        </section>
      </div>
    );
  }
}
