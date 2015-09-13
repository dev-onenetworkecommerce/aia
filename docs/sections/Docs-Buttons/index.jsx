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

      </section>
    );
  }
}
