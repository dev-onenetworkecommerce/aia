import React from 'react';
import Dropdown from '../../../scripts/components/Dropdown';

export default class DropdownView extends React.Component {
  render() {
    return (
      <div>
        <h1 className="doc-heading">Dropdown</h1>
        <p className="lead">Dropdowns are effective for "show-more" actions kind of thing.</p>
        <section className="doc-bottom-space">
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
          <h3 className="doc-heading">Example: Positions</h3>

          <div className="doc-btn-group">
            <Dropdown trigger={<button className="btn -default">Dropdown Right</button>} position={{ x: 'right' }}>
              <div className="dropdown -right">
                <div className="menu">
                  <a href="#">My Profile</a>
                  <a href="#">Settings</a>
                  <a href="#">Logout</a>
                </div>
              </div>
            </Dropdown>

            <Dropdown trigger={<button className="btn -default">Dropup</button>} position={{ y: 'top' }}>
              <div className="dropdown -up">
                <div className="menu">
                  <a href="#">My Profile</a>
                  <a href="#">Settings</a>
                  <a href="#">Logout</a>
                </div>
              </div>
            </Dropdown>

            <Dropdown trigger={<button className="btn -default">Dropup Right</button>} position={{ x: 'right', y: 'top' }}>
              <div className="dropdown -up -right">
                <div className="menu">
                  <a href="#">My Profile</a>
                  <a href="#">Settings</a>
                  <a href="#">Logout</a>
                </div>
              </div>
            </Dropdown>
          </div>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Example: With Dividers</h3>

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
          <h3 className="doc-heading">Example: With Icons</h3>

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
          <h3 className="doc-heading">Example: With Badges</h3>

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

        <section>
          <h3 className="doc-heading">Example: With both icons and badges</h3>

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
