import React from 'react';

export default class Alerts extends React.Component {
  render() {
    return (
      <div>
        <h1>Alert</h1>
      	<strong>This is a collection of symbols for quickly mocking up web applications. Created by your friends at One Network Ecommerce and released under the ONE License</strong>
      	<div className="alert -success doc-top-space">
      		<span>Class: alert-box -success</span>
      		<h3>Well done! You have successfully read this important alert message.</h3>
      	</div>
      	<div className="alert -info doc-top-space-large">
      	  <span>Class: alert-box -info</span>
      		<h3>Heads up! This alert needs your attention, but its not super important.</h3>
      	</div>
      	<div className="alert -warning doc-bottom-space">
      	  <span>Class: alert-box -warning</span>
      		<h3>Warning! Better check yourself, youre not looking too good.</h3>
      	</div>
      	<div className="alert -danger doc-bottom-space-large">
      	  <span>Class: alert-box -danger</span>
      		<h3>Oh snap! Change a few things up and try this submitting again.</h3>
      	</div>
      </div>
    );
  }
}
