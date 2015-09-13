import React from 'react';

export default class Buttons extends React.Component {
  render() {
    return (
      <div>
        <section className="doc-bottom-space-large">
          <h2>Light Background</h2>
            <div className="doc-bottom-space">
              <h4>Normal</h4>          
              <button className="btn">Button</button>
            </div>

            <div className="doc-bottom-space">            
              <h4>Disabled</h4>
              <button className="btn -disabled">Disabled</button>
            </div>
        </section>

        <section className="doc-bottom-space-large">
          <h2>Button Group</h2>
          <div>
          </div>
        </section>
      </div>
    );
  }
}
