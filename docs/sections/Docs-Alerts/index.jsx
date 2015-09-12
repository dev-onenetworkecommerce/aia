import React from 'react';

export default class Alerts extends React.Component {
  render() {
    return (
      <div>
        <h1>Alert</h1>
      	<strong>This is a collection of symbols for quickly mocking up web applications. Created by your friends at One Network Ecommerce and released under the ONE License</strong>
      	<div className="alert-box -success">
      		<span>Class: alert-box -success</span>
      		<h3>Well done! You have successfully read this important alert message.</h3>
      	</div>
      	<div className="alert-box -info">
      	  <span>Class: alert-box -info</span>	 
      		<h3>Heads up! This alert needs your attention, but its not super important.</h3>
      	</div>
      	<div className="alert-box -warning">
      	  <span>Class: alert-box -warning</span>
      		<h3>Warning! Better check yourself, youre not looking too good.</h3>
      	</div>
      	<div className="alert-box -danger">
      	  <span>Class: alert-box -danger</span>
      		<h3>Oh snap! Change a few things up and try this submitting again.</h3>
      	</div>
      	<div className="alert-box -warning">
      		<span className="dismiss-btn">x</span>
      		<h3>This is a dismissable alert box.</h3>
      	</div>

      </div>
    );
  }
}
