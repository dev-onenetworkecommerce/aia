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
          <div className="doc-bottom-space">
            <h3 className="doc-heading">Emphasis</h3>
            <button className="btn -sky">Button</button>
            <button className="btn -sun">Button</button>
            <button className="btn -crimson">Button</button>
            <button className="btn -emerald">Button</button>
          </div>

          <div className="doc-bottom-space">
            <h3 className="doc-heading">Sizes</h3>
            <button className="btn -large">Button Large</button>
            <button className="btn -default">Button</button>
            <button className="btn -small">Button Small</button>
            <button className="btn -xs">Button Extra Small</button>
          </div>

          <div className="doc-bottom-space">
            <h3 className="doc-heading">Inverted</h3>
            <button className="btn -inverted -default">Button</button>
            <button className="btn -inverted -sky">Button</button>
            <button className="btn -inverted -sun">Button</button>
            <button className="btn -inverted -crimson">Button</button>
            <button className="btn -inverted -emerald">Button</button>
          </div>

          <div className="doc-bottom-space">
            <h3 className="doc-heading">Block Button</h3>
            <button className="btn -default -block">Button</button>
          </div>

          <div className="doc-bottom-space">
            <h3 className="doc-heading">Rounded Button</h3>
            <button className="btn -default -rounded">Button</button>
            <button className="btn -sky -rounded">Button</button>
            <button className="btn -emerald -rounded">Button</button>
            <button className="btn -sun -rounded">Button</button>
            <button className="btn -crimson -rounded">Button</button>
          </div>

          <div className="doc-bottom-space">
            <h3 className="doc-heading">Disabled</h3>
            <button className="btn -default -disabled">Button</button>
          </div>
        </section>

        <section className="doc-bottom-space-large">
          <div className="doc-bottom-space">
            <h2>Button Group</h2>
            <div className="btn-group">
              <button className="btn -default">Button</button>
              <button className="btn -default">Button</button>
              <button className="btn -default">Button</button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
