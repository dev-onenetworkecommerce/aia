import React from 'react';
import Dropdown from '../../../scripts/components/Dropdown';

export default class DropdownView extends React.Component {
  render() {
    return (
      <div>
        <h1 className="doc-heading">Dropdown</h1>

        <section className="doc-bottom-space-large">
          <p className="lead">Dropdown</p>

          <Dropdown trigger={<button className="btn -default">Open me!</button>}>
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

          <Dropdown trigger={<button className="btn -default">Open me!</button>} position={{ x: 'right' }}>
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

          <Dropdown trigger={<button className="btn -default">Open me!</button>} position={{ y: 'top' }}>
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
          <p className="lead">With Divider</p>

          <Dropdown trigger={<button className="btn -default">Open me!</button>}>
            <div className="dropdown">
              <div className="menu">
                <a href="#">My Profile</a>
                <a href="#">Settings</a>
                <a href="#">Logout</a>
                <div className="divider"/>
                <a href="#">Help</a>
              </div>
            </div>
          </Dropdown>
        </section>

        <section className="doc-bottom-space-large">
          <p className="lead">With Icons</p>

          <Dropdown trigger={<button className="btn -default">Open me!</button>}>
            <div className="dropdown">
              <div className="menu">
                <a href="#"><i className="icon icon-user3"/> My Profile</a>
                <a href="#"><i className="icon icon-settings"/> Settings</a>
                <a href="#"><i className="icon icon-signout"/> Logout</a>
              </div>
            </div>
          </Dropdown>
        </section>

        <section className="doc-bottom-space-large">
          <p className="lead">With Badge</p>

          <Dropdown trigger={<button className="btn -default">Open me!</button>}>
            <div className="dropdown">
              <div className="menu">
                <a href="#">My Profile <span className="badge"> 69 </span></a>
                <a href="#">Settings <span className="badge"> 69 </span></a>
                <a href="#">Logout <span className="badge"> 69 </span></a>
              </div>
            </div>
          </Dropdown>
        </section>

        <section className="doc-bottom-space-large">
          <p className="lead">With Both Icon and Badge</p>

          <Dropdown trigger={<button className="btn -default">Open me!</button>}>
            <div className="dropdown">
              <div className="menu">
                <a href="#"><i className="icon icon-user3"/> My Profile <span className="badge"> 69 </span></a>
                <a href="#"><i className="icon icon-settings"/> Settings <span className="badge"> 69 </span></a>
                <a href="#"><i className="icon icon-signout"/> Logout <span className="badge"> 69 </span></a>
              </div>
            </div>
          </Dropdown>
        </section>

      </div>
    );
  }
}
