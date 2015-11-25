import React from 'react';

export default class Breadcrumbs extends React.Component {
  render() {
    return (
      <div>
        <section className="doc-bottom-space-large">
          <h1 className="doc-heading">Breadcrumbs</h1>
          <p className="lead">Indicate the current page's location within a navigational hierarchy.</p>
          <ol className="breadcrumb">
            <li> <a> Home </a> </li>
            <li> <a> Profile </a> </li>
            <li className="active"> <a> Logout </a> </li>
          </ol>
        </section>

        <section className="doc-bottom-space-large">
          <h1 className="doc-heading"> Steps Breadcrumbs </h1>
          <p className="lead">Useful for indicating on which step the user is in the wizard and change number into check if the user pass or complete the previous step.</p>
          <ul className="steps">
            <li className="complete"> <a> <i className="icon icon-checkmark" /> </a> </li>
            <li className="complete"> <a> <i className="icon icon-checkmark" /> </a> </li>
            <li className="active"> <a> 3 </a> </li>
            <li> <a> 4 </a> </li>
          </ul>
        </section>
      </div>
    );
  }
}
