import React from 'react';

export default class Slate extends React.Component {
  render() {
    return (
      <div>
        <section className="doc-bottom-space-large">
          <h1 className="doc-heading">Slate</h1>
          <p className="lead">Use this as a placeholder for loading collections with lack of resources or empty results. Together with an icon, it gives an instant definition on what the state is for.</p>
          <div className="alert -sky doc-bottom-space">Heads up! Paragraphs are optional inside the slate.</div>
          <div className="slate">
            <i className="icon icon-cog -x8" />
          	<h2>This is a blank slate</h2>
          	<p>Use it to provide information when no dynamic content exists.</p>
          </div>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Example: Spacious</h3>
          <p>Add the <code>.-spacious</code> class to your slate.</p>
          <div className="slate -spacious">
            <i className="icon icon-cog -x8" />
            <h2>Slate spacious</h2>
            <p>Adds padding to your contents</p>
          </div>
        </section>

        <section className="doc-bottom-space">
          <h3 className="doc-heading">Example: Plain</h3>
          <p>You can make a plain slate by adding the <code>.-plain</code> modifier class</p>
          <div className="row">
            <div className="slate -plain">
              <i className="icon icon-cog -x8" />
              <h2>Slate with No Background</h2>
              <p>No border-radius and white background</p>
            </div>
          </div>
        </section>

        <div className="row doc-bottom-space">
          <h3 className="doc-heading">Example: Center Half-sized Slate</h3>
          <p>With the centered grid column, you can center a slate.</p>
          <div className="slate col-md-6 _centered">
            <i className="icon icon-cog -x8" />
            <h2>Centered Half Slate</h2>
            <p>Centered slate with 50% width</p>
          </div>
        </div>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Example: Loading State </h3>
          <p>Slate can be use as loading state.</p>
          <div className="slate">
            <div className="tri-circle-loader">
              <div />
              <div />
              <div />
            </div>
            <h3> The products are being loaded. </h3>
          </div>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Example: With Button</h3>
          <p>This is how a slate fully looks like with button.</p>
          <div className="slate">
            <i className="icon icon-cog -x8" />
            <h2>This is a blank slate</h2>
            <p>Use it to provide information when no dynamic content exists.</p>
            <button className="btn -emerald">Load More</button>
          </div>
        </section>
      </div>
    );
  }
}
