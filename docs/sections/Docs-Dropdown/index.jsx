import React from 'react';
import Dropdown from '../../../scripts/components/Dropdown';

export default class DropdownView extends React.Component {
  render() {
    return (
      <div>
        <h1 className="doc-heading">Dropdown</h1>

        <section className="doc-bottom-space-large">
          <p className="lead">Dropdown</p>

          <Dropdown trigger={<button className="btn -default">Click me!</button>}>
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
          <p className="lead">Dropdown right</p>

          <Dropdown trigger={<button className="btn -default">Click me!</button>} position={{ x: 'right' }}>
            <div className="dropdown -right">
              <div className="menu">
                <a href="#">My Profile</a>
                <a href="#">Settings</a>
                <a href="#">Logout</a>
              </div>
            </div>
          </Dropdown>
        </section>

        <section className="doc-bottom-space-large">
          <p className="lead">Dropup</p>

          <Dropdown trigger={<button className="btn -default">Click me!</button>} position={{ y: 'top' }}>
            <div className="dropdown -up">
              <div className="menu">
                <a href="#">My Profile</a>
                <a href="#">Settings</a>
                <a href="#">Logout</a>
              </div>
            </div>
          </Dropdown>
        </section>

        <section className="doc-bottom-space-large">
          <p className="lead">Dropup right</p>

          <Dropdown trigger={<button className="btn -default">Click me!</button>} position={{ x: 'right' , y: 'top'}}>
            <div className="dropdown -up -right">
              <div className="menu">
                <a href="#">My Profile</a>
                <a href="#">Settings</a>
                <a href="#">Logout</a>
              </div>
            </div>
          </Dropdown>
        </section>

        <section className="doc-bottom-space-large">
          <p className="lead">With Divider</p>

          <Dropdown trigger={<button className="btn -default">Click me!</button>}>
            <div className="dropdown">
              <div className="menu">
                <a href="#">My Profile</a>
                <a href="#">Settings</a>
                <a href="#">Logout</a>
                <div className="divider"></div>
                <a href="#">Help</a>
              </div>
            </div>
          </Dropdown>
        </section>

        <section className="doc-bottom-space-large">
          <p className="lead">With Icons</p>

          <Dropdown trigger={<button className="btn -default">Click me!</button>}>
            <div className="dropdown">
              <div className="menu">
                <a href="#"><i className="icon icon-user3"></i> My Profile</a>
                <a href="#"><i className="icon icon-settings"></i> Settings</a>
                <a href="#"><i className="icon icon-signout"></i> Logout</a>
              </div>
            </div>
          </Dropdown>
        </section>

      </div>
    );
  }
}
