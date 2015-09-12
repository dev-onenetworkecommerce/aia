import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="nav" role="navigation">
          <section className="right">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/scaffolding">Docs</Link>
            <a href="github.com/dev-onenetworkecommerce/june">Github</a>
          </section>
        </nav>

        {this.props.children}
      </div>
    );
  }
}
