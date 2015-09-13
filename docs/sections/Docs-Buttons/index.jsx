import React from 'react';

export default class Buttons extends React.Component {
  render() {
    return (
      <section className="doc-bottom-space-large">
        <div className="doc-bottom-space">
          <h2>Standard Button</h2>
          <button className="btn -default">Button</button>
        </div>

        <div className="doc-bottom-space">
          <h2>Emphasis</h2>
          <button className="btn -sky">Button</button>
          <button className="btn -sun">Button</button>
          <button className="btn -crimson">Button</button>
          <button className="btn -emerald">Button</button>
        </div>

        <div className="doc-bottom-space">
          <h2>Sizes</h2>
          <p><button className="btn -large">Button</button></p>
          <p><button className="btn -default">Button</button></p>
          <p><button className="btn -small">Button</button></p>
          <p><button className="btn -xs">Button</button></p>
        </div>

        <div className="doc-bottom-space">
          <h2>Inverted</h2>
          <button className="btn -inverted -default">Button</button>
          <button className="btn -inverted -sky">Button</button>
          <button className="btn -inverted -sun">Button</button>
          <button className="btn -inverted -crimson">Button</button>
          <button className="btn -inverted -emerald">Button</button>
        </div>

        <div className="doc-bottom-space">
          <h2>Disabled</h2>
          <button className="btn -default -disabled">Button</button>
        </div>

      </section>
    );
  }
}
