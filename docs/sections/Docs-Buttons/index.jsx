import React from 'react';

export default class Buttons extends React.Component {
  render() {
    return (
      <div>
        <section className="doc-bottom-space-large">
          <h1 className="doc-heading">Buttons</h1>
          <button className="btn -default">Button</button>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Variants</h3>
          <button className="btn -sky">Sky</button>
          <button className="btn -emerald">Emerald</button>
          <button className="btn -sun">Sun</button>
          <button className="btn -crimson">Crimson</button>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Sizes</h3>
          <p>Apply one of .-xs, .-small, .-large</p>
          <button className="btn -xs">Extra Small</button>
          <button className="btn -small">Small</button>
          <button className="btn">Default</button>
          <button className="btn -large">Large</button>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Inverted</h3>
          <button className="btn -inverted -default">Button</button>
          <button className="btn -inverted -sky">Button</button>
          <button className="btn -inverted -sun">Button</button>
          <button className="btn -inverted -crimson">Button</button>
          <button className="btn -inverted -emerald">Button</button>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Block Button</h3>
          <button className="btn -default -block">Button</button>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Rounded Button</h3>
          <button className="btn -default -rounded">Button</button>
          <button className="btn -sky -rounded">Button</button>
          <button className="btn -emerald -rounded">Button</button>
          <button className="btn -sun -rounded">Button</button>
          <button className="btn -crimson -rounded">Button</button>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Disabled</h3>
          <button className="btn -default -disabled">Button</button>
        </section>

        <section>
          <h3 className="doc-heading">Button Group</h3>
          <section className="doc-bottom-space">
            <div className="btn-group">
              <button className="btn -default">Button</button>
              <button className="btn -default">Button</button>
              <button className="btn -default">Button</button>
            </div>
          </section>

          <section>
            <h3 className="doc-heading">Rounded Button Group</h3>
            <div className="alert -sun doc-bottom-space">
              This has bad API, and will most likely change in the future.
            </div>
            <p>Simply add the .-rounded modifier class to .btn-group.</p>
            <div className="btn-group">
              <button className="btn -rounded -default">Button</button>
              <button className="btn -rounded -default">Button</button>
              <button className="btn -rounded -default">Button</button>
            </div>
          </section>
        </section>
      </div>
    );
  }
}
