import React from 'react';

export default class Breacrumbs extends React.Component {
  render() {
    return (
      <ol className="breadcrumb">
        <a href="#"> <li> Home </li> </a>
        <a href="#"> <li> Profile </li> </a>
        <a href="#"> <li className="active"> Settings </li> </a>
      </ol>
    );
  }
}