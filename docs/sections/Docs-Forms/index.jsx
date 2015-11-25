import React from 'react';

export default class Forms extends React.Component {
  render() {
    return (
      <div>
        <h1 className="doc-heading">Forms</h1>
        <p className="lead">Style individual form controls and utilize common layouts.</p>

        <section className="doc-bottom-space-large">
          <section className="doc-bottom-space">
            <textarea className="form-control" defaultValue="Text content here." />
          </section>

          <section className="doc-bottom-space">
            <input className="form-control" type="text" defaultValue="Input value" />
          </section>

          <section className="doc-bottom-space">
            <input className="form-control" type="text" placeholder="Placeholder" />
          </section>

          <section className="doc-bottom-space">
            <select className="form-control">
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </section>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Disabled state</h3>
          <p>Add the <code>disabled</code> boolean attribute on an input to prevent user interactions. Disabled inputs appear monotone and add a not-allowed cursor.</p>
          <input className="form-control" type="text" placeholder="Enter something" disabled />
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Form Actions</h3>
          <p className="lead">This is a helper which automatically puts a spacing between each button.</p>

          <div className="form-actions">
            <button className="btn -emerald">Submit</button>
            <button className="btn">Cancel</button>
          </div>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Form Error</h3>
          <p className="lead">You may present form errors with a tooltip-like presentation.</p>
          <section className="doc-bottom-space">
            <div className="form-group">
              <input className="form-control -crimson" type="text" placeholder="Enter something.." />
              <div className="message">Error invalid something..</div>
            </div>
          </section>

          <section>
            <h3 className="doc-heading">Example: Top-positioned message</h3>
            <p>Places the message above the input, useful when an overlapping element is expected to display below (such as date picker).</p>
            <div className="form-group">
              <input className="form-control -crimson" type="text" placeholder="Enter something.." />
              <div className="message -top">Error invalid something..</div>
            </div>
          </section>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Form Groups</h3>
          <p>Used as a container for a form element.</p>
          <section className="doc-bottom-space">
            <div className="form-group">
              <label htmlFor="form-zx@41a">Username</label>
              <input id="form-zx@41a" className="form-control" type="text" placeholder="Enter something.." />
            </div>

            <div className="form-group">
              <label htmlFor="form-xczcS">Password</label>
              <input id="form-xczcS" className="form-control" type="password" placeholder="*****" />
            </div>
          </section>
        </section>

        <section className="doc-bottom-space-large">
          <section className="doc-bottom-space">
            <h3 className="doc-heading">Input Groups</h3>
            <p>Use as a container for a form element.</p>
            <section className="doc-bottom-space">
              <div className="input-group">
                <input className="form-control" type="text" placeholder="Enter something.." />
                <span className="addon">Search</span>
              </div>
            </section>
            <p>Add <code>.-primary-link</code> in the addon to use the other variant.</p>
            <section className="doc-bottom-space">
              <div className="input-group">
                <input className="form-control" type="text" placeholder="Enter something.." />
                <span className="addon -primary-link">Search</span>
              </div>
            </section>
          </section>
        </section>
        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Example: Input group For Search</h3>
          <p>Consist of button and search icon.</p>
          <section className="doc-bottom-space">
            <div className="input-group">
              <span className="addon -btn"><button className="btn -sky">Search</button></span>
              <input className="form-control" type="text" placeholder="Enter something.." />
              <i className="icon icon-search" />
            </div>
          </section>
        </section>
      </div>
    );
  }
}
