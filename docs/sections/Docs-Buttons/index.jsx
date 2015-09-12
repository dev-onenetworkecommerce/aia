import React from 'react';

export default class Buttons extends React.Component {
  render() {
    return (
      <div>
        <h1>Normal Buttons</h1>
        <div className="doc-bottom-space">
          <button className="btn" disabled>Button</button>
          <button className="btn -info">Button</button>
          <button className="btn -success">Button</button>
          <button className="btn -warning">Button</button>
          <button className="btn -danger">Button</button>
        </div>
        <h1>Hovered / Darker Buttons</h1>
        <div className="doc-bottom-space">
          <button className="btn" disabled>Button</button>
          <button className="btn -info-dk">Button</button>
          <button className="btn -success-dk">Button</button>
          <button className="btn -warning-dk">Button</button>
          <button className="btn -danger-dk">Button</button>
        </div>

        <h1>Sizes</h1>
        <div className="doc-bottom-space">
          <button className="btn -extra-small" >Extra small Button</button>
          <button className="btn -small" >Small Button</button>
          <button className="btn -large">Large Button</button>
        </div>
         <h1>Button Group</h1>
        <div className="doc-bottom-space">
          <span className="btn-group">
            <button className="btn">Extra small Button</button>
            <button className="btn">Small Button</button>
            <button className="btn">Large Button</button>
          </span>
        </div>

      </div>
    );
  }
}
