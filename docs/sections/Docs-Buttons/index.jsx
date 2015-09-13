import React from 'react';

export default class Buttons extends React.Component {
  render() {
    return (
      <div>
        <section className="doc-bottom-space-large">
          <div className="doc-bottom-space">
            <h2>Standard Button</h2>
            <button className="btn -default">Button</button>
          </div>

          <div className="doc-bottom-space">
            <h2>Vertical-Align Button</h2>
            <button className="btn -default -block doc-bottom-space-small">Button</button>
            <button className="btn -default -block doc-bottom-space-small">Button</button>
            <button className="btn -default -block doc-bottom-space-small">Button</button>
            <button className="btn -default -block doc-bottom-space-small">Button</button>
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
            <button className="btn -large">Button Large</button>
            <button className="btn -default">Button</button>
            <button className="btn -small">Button Small</button>
            <button className="btn -xs">Button Extra Small</button>
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

        <section className="doc-bottom-space-large">
          <div className="doc-bottom-space">
            <h2>Button Group</h2>
            <div className="btn-group">
            </div>
          </div>
        </section>
      </div>
    );
  }
}
