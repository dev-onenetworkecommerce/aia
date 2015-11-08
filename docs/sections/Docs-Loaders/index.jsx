import React from 'react';

export default class Loader extends React.Component {
  render() {
    return (
      <div>
        <h1 className="doc-heading">Loaders</h1>
        <p className="lead">Loaders are a great way to indicate that a process is still in progress.</p>
        <p>Our loader is mainly inspired by <a href="https://heroku.com">Heroku</a> and <a href="https://travis-ci.org">Travis CI</a>.</p>

        <div className="doc-loader-panel">
          <div className="tri-circle-loader">
            <div />
            <div />
            <div />
          </div>
        </div>

        <div className="doc-loader-panel -dark">
          <div className="tri-circle-loader -light">
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
    );
  }
}
