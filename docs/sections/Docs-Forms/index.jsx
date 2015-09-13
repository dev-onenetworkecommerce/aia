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
                <input className="form-control" type="text" value="Input value" />
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

        <section>
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

          <section className="doc-bottom-space">
            <input className="form-control -crimson" type="text" placeholder="Enter something.." />
          </section>
        </section>
      </div>
    );
  }
}
