import React from 'react';

export default class Labels extends React.Component {
  render() {
    return (
      <div>
         <label className="label -bordered"> 
         	Default 
         </label>

         <label className="label -crimson"> 
         	Danger 
         </label>
      </div>
    );
  }
}
