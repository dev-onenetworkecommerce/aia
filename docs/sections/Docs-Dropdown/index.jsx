import React from 'react';
import Dropdown from '../../../scripts/components/Dropdown';

export default class DropdownView extends React.Component {
  render() {
    return (
      <div>
        <h1 className="doc-heading">Dropdown</h1>
        <p className="lead">Yea, yolo swag.</p>

        <div>
          <Dropdown trigger={<button type="button" className="btn">Open Dropdown</button>}>
            <div className="dropdown">
              <div className="menu">
                <a href="#">My Profile</a>
                <a href="#">Settings</a>
                <a href="#">Logout</a>
              </div>
            </div>
          </Dropdown>
        </div>

      </div>
    );
  }
}
