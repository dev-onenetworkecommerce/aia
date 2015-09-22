import React from 'react';

export default class Alerts extends React.Component {
  render() {
    return (
      <div>
        <section className="doc-bottom-space-large">
          <h1 className="doc-heading">Alerts</h1>
        	<p className="lead">
            This is a collection of symbols for quickly mocking up web applications. Created by your friends at One Network Ecommerce and released under the ONE License
          </p>

          <div className="alert -sky doc-bottom-space">
            Heads up! This alert needs your attention, but its not super important.
          </div>

        	<div className="alert -emerald doc-bottom-space">
        		Well done! You have successfully read this important alert message.
        	</div>

        	<div className="alert -sun doc-bottom-space">
        		Warning! Better check yourself, youre not looking too good.
        	</div>

        	<div className="alert -crimson">
        		Oh snap! Change a few things up and try this submitting again.
        	</div>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Example: Block</h3>
          <p>Useful when you'd like to use the whole space without the border and radius. Simply apply the .-block class.</p>
          <div className="alert -emerald -block">
            Oh snap! Change a few things up and try this submitting again.
          </div>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Example: Large</h3>
          <p>Simply apply the .-large class.</p>
          <div className="alert -emerald -large">
            Oh snap! Change a few things up and try this submitting again.
          </div>
        </section>

        <section>
          <h3 className="doc-heading">Example: With Icons</h3>
          <div className="alert -crimson">
            <i className="icon icon-alert" />
            Oh snap! Change a few things up and try this submitting again.
          </div>
        </section>
      </div>
    );
  }
}
