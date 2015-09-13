import React from 'react';

export default class Alerts extends React.Component {
  render() {
    return (
      <div>
        <h1 className="doc-heading">Alerts</h1>
      	<p className="lead">
          This is a collection of symbols for quickly mocking up web applications. Created by your friends at One Network Ecommerce and released under the ONE License
        </p>

      	<div className="alert -success doc-bottom-space">
      		Well done! You have successfully read this important alert message.
      	</div>

      	<div className="alert -info doc-bottom-space">
      		Heads up! This alert needs your attention, but its not super important.
      	</div>

      	<div className="alert -warning doc-bottom-space">
      		Warning! Better check yourself, youre not looking too good.
      	</div>

      	<div className="alert -danger doc-bottom-space">
      		Oh snap! Change a few things up and try this submitting again.
      	</div>
      </div>
    );
  }
}
