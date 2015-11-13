import React from 'react';

export default class Forms extends React.Component {
  render() {
    return (
      <div>
        <h1 className="doc-heading">Forms</h1>
        <p className="lead">Style individual form controls and utilize common layouts.</p>

        <section className="doc-bottom-space-large">
          <section className="doc-bottom-space-largem-space">
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
          <h3 className="doc-heading">Variants</h3>
          <p>To apply, simply add one of the *modifier* classes to <code>.form-control</code>: <code>.-sky</code>, <code>.-emerald,</code> <code>.-sun</code>, <code>.-crimson</code>.</p>
          <section className="doc-bottom-space">
            <input className="form-control -sky" type="text" placeholder="Enter something.." />
          </section>

          <section className="doc-bottom-space">
            <input className="form-control -emerald" type="text" placeholder="Enter something.." />
          </section>

          <section className="doc-bottom-space">
            <input className="form-control -sun" type="text" placeholder="Enter something.." />
          </section>

          <section>
            <input className="form-control -crimson" type="text" placeholder="Enter something.." />
          </section>
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
            <h3 className="doc-heading">Top-positioned message</h3>
            <p>Places the message above the input, useful when an overlapping element is expected to display below (such as date picker).</p>
            <div className="form-group">
              <input className="form-control -crimson" type="text" placeholder="Enter something.." />
              <div className="message -top">Error invalid something..</div>
            </div>
          </section>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Form Groups</h3>
          <p>Used <code>.form-group</code> as a container for form elements to have an ideal spacing.</p>
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

        <section>
          <section className="doc-bottom-space">
            <h3 className="doc-heading">Input Groups</h3>
            <p>Used <code>.input-group</code> as a container for a group of input elements.</p>
            <section className="doc-bottom-space">
              <div className="input-group">
                <span className="addon">00:00</span>
                <input className="form-control" type="text" placeholder="Enter something.." />
              </div>
            </section>

            <section className="doc-bottom-space">
              <div className="input-group">
                <span className="addon">00:00</span>
                <input className="form-control" type="text" placeholder="Enter something.." />
                <span className="addon">Search</span>
              </div>
            </section>

            <section>
              <div className="input-group">
                <input className="form-control" type="text" placeholder="Enter something.." />
                <span className="addon">Search</span>
              </div>
            </section>
          </section>

          <section>
            <h3 className="doc-heading">Example: Input group with buttons</h3>
            <section className="doc-bottom-space">
              <div className="input-group">
                <input className="form-control" type="text" placeholder="Enter something.." />
                <span className="addon -btn"><button className="btn -sky">Search</button></span>
              </div>
            </section>

            <section className="doc-bottom-space">
              <div className="input-group">
                <span className="addon">$</span>
                <input className="form-control" type="text" placeholder="Enter something.." />
                <span className="addon -btn"><button className="btn -sky">Buy</button></span>
              </div>
            </section>

            <section className="doc-bottom-space">
              <div className="input-group">
                <span className="addon -btn"><button className="btn -sky">Buy</button></span>
                <input className="form-control" type="text" placeholder="Enter something.." />
                <span className="addon">$</span>
              </div>
            </section>

            <section className="doc-bottom-space">
              <div className="input-group">
                <span className="addon -btn"><button className="btn -sky">Buy</button></span>
                <input className="form-control" type="text" placeholder="Enter something.." />
                <span className="addon -btn"><button className="btn -sky">Sell</button></span>
              </div>
            </section>
          </section>
        </section>
      </div>
    );
  }
}
