import React from 'react';
import { Link } from 'react-router';

export default class Docs extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <nav className="list-group doc-bottom-space" role="menu">
              <Link to="/scaffolding" activeClass="-selected" className="menuitem">Scaffolding</Link>
              <Link to="/layout" activeClass="-selected" className="menuitem">Layout</Link>
              <Link to="/type" activeClass="-selected" className="menuitem">Type</Link>
              <Link to="/tables" activeClass="-selected" className="menuitem">Tables</Link>
              <Link to="/forms" activeClass="-selected" className="menuitem">Forms</Link>
              <Link to="/utilities" activeClass="-selected" className="menuitem">Utilities</Link>
            </nav>

            <nav className="list-group doc-bottom-space" role="menu">
              <Link to="/buttons" activeClass="-selected" className="menuitem">Buttons</Link>
              <Link to="/labels" activeClass="-selected" className="menuitem">Labels</Link>
              <Link to="/alerts" activeClass="-selected" className="menuitem">Alerts</Link>
              <Link to="/list-group" activeClass="-selected" className="menuitem">List Group</Link>
              <Link to="/panels" activeClass="-selected" className="menuitem">Panels</Link>
              <Link to="/slate" activeClass="-selected" className="menuitem">Slate</Link>
            </nav>

            <nav className="list-group" role="menu">
              <Link to="/guidelines" activeClass="-selected" className="menuitem">Guidelines</Link>
              <Link to="/colors" activeClass="-selected" className="menuitem">Colors</Link>
            </nav>
          </div>

          <div className="col-md-9">
            {this.props.children}
          </div>
        </div>

        <footer className="doc-footer">
          Copyright <strong>ONE Network Ecommerce 2015.</strong> <br />
          Created and maintained by the Front End team at ONE.&nbsp;
          <strong>Currently 0.1.0</strong>.
        </footer>
      </div>
    );
  }
}
