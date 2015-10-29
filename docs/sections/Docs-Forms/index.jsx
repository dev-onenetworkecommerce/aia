import React from 'react';

export default class Forms extends React.Component {
  render() {
    return (
      <div>
        <h1 className="doc-heading">Forms</h1>
        <p className="lead">Style individual form controls and utilize common layouts.</p>

        <section className="doc-bottom-space-large">
          <div className="row">
            <div className="col-md-6">
              <h3 className="doc-heading">Form Elements</h3>
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
            </div>

            <div className="col-md-6">
              <h3 className="doc-heading">Disabled</h3>
              <section className="doc-bottom-space">
                <textarea className="form-control" placeholder="Enter something" disabled />
              </section>

              <section className="doc-bottom-space">
                <input className="form-control" type="text" placeholder="Enter something" disabled />
              </section>

              <section>
                <select className="form-control" disabled>
                  <option>Clickity click!</option>
                </select>
              </section>
            </div>
          </div>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Variants</h3>
          <p>To apply, simply add one of the *modifier* classes to .form-control: .-sky, .-emerald, .-sun, .-crimson.</p>
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
          <h3 className="doc-heading">Forms Error</h3>
          <p>Individual fields may display an error state. To apply, simply add one of the *modifier* classes to .form-control: .-error</p>

          <section className="doc-bottom-space">
            <div className="form-group">
                <input className="form-control -crimson" type="text" placeholder="Enter something.." />
                <span className="message">Tool tip</span>
            </div>
          </section>

          <section className="doc-bottom-space">
            <select className="form-control -crimson">
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
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

        <section>
          <section className="doc-bottom-space">
            <h3 className="doc-heading">Input Groups</h3>
            <p>Used as a container for a form element.</p>
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
