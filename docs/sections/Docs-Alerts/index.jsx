import React from 'react';

export default class Alerts extends React.Component {
  state = {
    growl: false
  };

  componentWillUnmount() {
    if ( this._growlTimeout ) {
      cancelTimeout(this._growlTimeout);
    }
  }

  constructor(props) {
    super(props);

    this.handleShowGrowl = ::this.handleShowGrowl;
  }

  render() {
    return (
      <div>
        <section className="doc-bottom-space-large">
          <h1 className="doc-heading">Alerts</h1>
        	<p className="lead">
            Use alerts to inform or notify the user.
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

        <section className="doc-bottom-space">
          <h3 className="doc-heading">Example: Block</h3>
          <p>Useful when you'd like to use a more emphasized alert (for example, growl).</p>
          <div className="alert -emerald -block">
            Oh snap! Change a few things up and try this submitting again.
          </div>
        </section>

        <section className="doc-bottom-space">
          <h3 className="doc-heading">Example: Large</h3>
          <p>Simply apply the .-large class.</p>
          <div className="alert -emerald -large">
            Oh snap! Change a few things up and try this submitting again.
          </div>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Example: With Icons</h3>
          <div className="alert -crimson">
            <i className="icon icon-alert" />
            Oh snap! Change a few things up and try this submitting again.
          </div>
        </section>

        <section>
          <h3 className="doc-heading">Growl</h3>
          <p className="lead">This is useful for notifying the user of an update with a pop-up message.</p>
          <div className="alert -sky _spacer">
            According to <a href="https://en.wikipedia.org/wiki/Growl_(software)">Wikipedia</a>, Growl is a global notification system and pop-up notification implementation.
          </div>
          <button className="btn -primary" onClick={this.handleShowGrowl}>Show Growl</button>
          {this.renderGrowl()}
        </section>
      </div>
    );
  }

  renderGrowl() {
    return this.state.growl ? (
      <div className="alert-growl">
        <div className="alert -crimson">
          <i className="icon icon-alert" />
          Oh snap! Change a few things up and try this submitting again.
        </div>
      </div>
    ) : null;
  }

  handleShowGrowl() {
    if ( this.state.growl ) {
      return;
    }

    this.setState({ growl: true }, () => {
      this._growlTimeout = setTimeout(() => {
        this.setState({ growl: false })
      }, 1500);
    });
  }
}
