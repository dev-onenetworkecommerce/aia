import React from 'react';

export default class Steps extends React.Component {
  render() {
    return (
      <ul className="steps">  
        <li className="-complete"> <a> <i className="icon icon-checkmark" /> </a> </li>
        <li className="-active"> <a> 2 </a> </li>
        <li> <a> 3 </a> </li>
        <li> <a> 4 </a> </li>
      </ul>
    );
  }
}