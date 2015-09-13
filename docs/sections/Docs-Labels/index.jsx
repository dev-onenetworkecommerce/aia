import React from 'react';

export default class Labels extends React.Component {
  render() {
    return (
      <div>
        <h1 className="doc-heading">Labels & Badges</h1>
        <p className="lead">Used to indicate a status or number.</p>

        <section className="doc-bottom-space-large">
          <h1 className="doc-heading">Labels</h1>
          <span className="label -default doc-allowance">Default</span>
          <span className="label -emerald doc-allowance">Success</span>
          <span className="label -sky doc-allowance">Info</span>
          <span className="label -sun doc-allowance">Warning</span>
          <span className="label -crimson">Danger</span>
        </section>

        <section className="doc-bottom-space-large">
          <h1 className="doc-heading">Badges</h1>
          <div>News Feed  <span className="badge -bordered">20</span></div>
          <div>News Feed <span className="badge -primary">40</span></div>
          <div>News Feed  <span className="badge -emerald">50</span></div>
          <div>News Feed  <span className="badge -sky">60</span></div>
          <div>News Feed <span className="badge -sun">70</span></div>
          <div>News Feed <span className="badge -crimson">80</span></div>
        </section>
      </div>
    );
  }
}
