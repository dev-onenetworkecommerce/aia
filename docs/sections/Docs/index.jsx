import React from 'react';
import { Link } from 'react-router';

export default class Docs extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <nav className="list-group _spacer" role="menu">
              <Link to="/scaffolding" activeClassName="-selected" className="menuitem">Scaffolding</Link>
              <Link to="/layout" activeClassName="-selected" className="menuitem">Layout</Link>
              <Link to="/type" activeClassName="-selected" className="menuitem">Type</Link>
              <Link to="/tables" activeClassName="-selected" className="menuitem">Tables</Link>
              <Link to="/forms" activeClassName="-selected" className="menuitem">Forms</Link>
              <Link to="/utilities" activeClassName="-selected" className="menuitem">Utilities</Link>
            </nav>

            <nav className="list-group _spacer" role="menu">
              <Link to="/icons" activeClassName="-selected" className="menuitem">Icons</Link>
              <Link to="/buttons" activeClassName="-selected" className="menuitem">Buttons</Link>
              <Link to="/nav" activeClassName="-selected" className="menuitem">Nav</Link>
              <Link to="/labels" activeClassName="-selected" className="menuitem">Labels</Link>
              <Link to="/alerts" activeClassName="-selected" className="menuitem">Alerts</Link>
              <Link to="/list-group" activeClassName="-selected" className="menuitem">List Group</Link>
              <Link to="/panels" activeClassName="-selected" className="menuitem">Panels</Link>
              <Link to="/slate" activeClassName="-selected" className="menuitem">Slate</Link>
              <Link to="/dropdown" activeClassName="-selected" className="menuitem">Dropdown</Link>
              <Link to="/modal" activeClassName="-selected" className="menuitem">Modal</Link>
              <Link to="/loaders" activeClassName="-selected" className="menuitem">Loaders</Link>
              <Link to="/steps" activeClassName="-selected" className="menuitem">Steps</Link>
            </nav>

            <nav className="list-group _spacer-large" role="menu">
              <Link to="/guidelines" activeClassName="-selected" className="menuitem">Guidelines</Link>
              <Link to="/colors" activeClassName="-selected" className="menuitem">Colors</Link>
            </nav>
          </div>

          <div className="col-md-9">
            {this.props.children}
          </div>
        </div>

        <footer className="doc-footer">
          <p>Copyright <strong>ONE Network Ecommerce 2015.</strong></p>
          <p>
            Created and maintained by the Front End team at ONE.&nbsp;
            <strong>Currently 0.3.5</strong>.
          </p>
        </footer>
      </div>
    );
  }
}
