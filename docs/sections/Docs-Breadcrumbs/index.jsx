import React from 'react';

export default class Breadcrumbs extends React.Component {
  render() {
    return (
      <div>
        <section className="doc-bottom-space-large">
          <h1 className="doc-heading"> Plain Breadcrumb </h1>
          <ol className="breadcrumb">
            <li className="plain"> <a> Home </a> </li>
            <li className="plain"> <a> Profile </a> </li>
            <li className="plain -active"> <a> Logout </a> </li>
          </ol>
        </section>

        <section className="doc-bottom-space-large">
          <h1 className="doc-heading"> Steps Breadcrumb </h1>
          <ul className="breadcrumb">  
            <li className="item -complete"> <a> <i className="icon icon-checkmark" /> </a> </li>
            <li className="item -complete"> <a> <i className="icon icon-checkmark" /> </a> </li>
            <li className="item -active"> <a> 3 </a> </li>
            <li className="item"> <a> 4 </a> </li>
          </ul>
        </section>
      </div>
    );
  }
}