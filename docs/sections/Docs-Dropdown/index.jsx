import React from 'react';
import Dropdown from '../../../scripts/components/Dropdown';

export default class DropdownView extends React.Component {
  render() {
    return (
      <div>
        <h1 className="doc-heading">Dropdown</h1>
        <p className="lead">Yea, yolo swag.</p>

        <section className="doc-bottom-space-large">
          <Dropdown trigger={<button className="btn">Open Dropdown</button>}>
            <div className="dropdown">
              <div className="menu">
                <a href="#">My Profile</a>
                <a href="#">Settings</a>
                <a href="#">Logout</a>
              </div>
            </div>
          </Dropdown>
        </section>

        <section className="doc-bottom-space-large">
          <Dropdown trigger={<button className="btn">Open Dropdown</button>} position={{ x: 'right' }}>
            <div className="dropdown -right">
              <div className="menu">
                <a href="#">My Profile</a>
                <a href="#">Settings</a>
                <a href="#">Logout</a>
              </div>
            </div>
          </Dropdown>
        </section>
      </div>
    );
  }
}
