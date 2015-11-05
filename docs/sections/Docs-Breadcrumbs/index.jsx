import React from 'react';

export default class Breadcrumbs extends React.Component {
  render() {
    return (
      <div>
        <section className="doc-bottom-space-large">
          <h1 className="doc-heading"> Breadcrumb </h1>
          <ol className="breadcrumb">
            <li> <a> Home </a> </li>
            <li> <a> Profile </a> </li>
            <li className="active"> <a> Logout </a> </li>
          </ol>
        </section>

        <section className="doc-bottom-space-large">
          <h1 className="doc-heading"> Steps Breadcrumb </h1>
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