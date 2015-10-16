import React from 'react';

export default class Buttons extends React.Component {
  render() {
    return (
      <div>
        <section className="doc-bottom-space-large">
          <h1 className="doc-heading">Buttons</h1>
          <button className="btn -default">Button</button>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Variants</h3>
          <div className="doc-btn-group">
            <button className="btn -default">Default</button>
            <button className="btn -primary">Primary</button>
            <button className="btn -sky">Sky</button>
            <button className="btn -emerald">Emerald</button>
            <button className="btn -sun">Sun</button>
            <button className="btn -crimson">Crimson</button>
            <button className="btn -plain">Clear</button>
          </div>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Sizes</h3>
          <p>Apply one of .-xs, .-small, .-large</p>
          <div className="doc-btn-group">
            <button className="btn -xs">Extra Small</button>
            <button className="btn -small">Small</button>
            <button className="btn">Default</button>
            <button className="btn -large">Large</button>
          </div>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Inverted</h3>
          <div className="doc-btn-group">
            <button className="btn -inverted -default">Button</button>
            <button className="btn -inverted -primary">Button</button>
            <button className="btn -inverted -sky">Button</button>
            <button className="btn -inverted -sun">Button</button>
            <button className="btn -inverted -crimson">Button</button>
            <button className="btn -inverted -emerald">Button</button>
          </div>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Block buttons</h3>
          <p>Make any button full-width by adding .btn-block. It adds width: 100%;, changes the display from inline-block to block, and centers the button text.</p>
          <button className="btn -default -block doc-bottom-space">Block button</button>
          <button className="btn -default -small -block">Small block button</button>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Rounded Button</h3>
          <div className="doc-btn-group">
            <button className="btn -default -rounded">Button</button>
            <button className="btn -sky -rounded">Button</button>
            <button className="btn -emerald -rounded">Button</button>
            <button className="btn -sun -rounded">Button</button>
            <button className="btn -crimson -rounded">Button</button>
          </div>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Disabled</h3>
          <button className="btn -default -disabled">Button</button>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">With Icons</h3>

          <div className="doc-btn-group">
            <button className="btn -emerald">
              <i className="icon icon-user3" />
            </button>

            <button className="btn -emerald">
              <i className="icon icon-user3" /> Button
            </button>

            <button className="btn -emerald">
              <i className="icon icon-user3" /> Button <i className="icon icon-user3" />
            </button>

            <button className="btn -emerald">
              Button <i className="icon icon-user3" />
            </button>
          </div>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Button Group</h3>
          <section className="doc-bottom-space">
            <div className="btn-group">
              <button className="btn -default">Button</button>
              <button className="btn -default">Button</button>
              <button className="btn -default">Button</button>
            </div>
          </section>

          <section>
            <h3 className="doc-heading">Rounded Button Group</h3>
            <p>Simply add the <code>.-rounded</code> modifier class to <code>.btn-group</code>.</p>
            <div className="btn-group -rounded">
              <button className="btn -default">Button</button>
              <button className="btn -default">Button</button>
              <button className="btn -default">Button</button>
            </div>
          </section>
        </section>

        <section>
          <section className="doc-bottom-space">
            <h1 className="doc-heading">Pagination</h1>
            <p className="lead">These buttons are a bit different, written entirely for pagination.</p>
            <div className="pagination">
              <button className="action">Previous</button>
              <div className="pages">
                <button className="page">1</button>
                <button className="page">2</button>
                <button className="page">3</button>
                <button className="page">4</button>
              </div>
              <button className="action">Next</button>
            </div>
          </section>

          <section className="doc-bottom-space">
            <h3 className="doc-heading">Example: Active Page</h3>
            <p>Add <code>.-active</code> modifier class to a page button.</p>
            <div className="pagination">
              <button className="action">Previous</button>
              <div className="pages">
                <button className="page -active">1</button>
                <button className="page">2</button>
                <button className="page">3</button>
                <button className="page">4</button>
              </div>
              <button className="action">Next</button>
            </div>
          </section>

          <section className="doc-bottom-space">
            <h3 className="doc-heading">Example: Disabled Actions</h3>
            <p>At the moment, only the previous and next button can be disabled. Through the <code>disabled</code> attribute, or by adding the <code>.-disabled </code> modifier class.</p>
            <div className="pagination">
              <button className="action" disabled={true}>Previous</button>
              <div className="pages">
                <button className="page">1</button>
                <button className="page">2</button>
                <button className="page">3</button>
                <button className="page">4</button>
              </div>
              <button className="action" disabled={true}>Next</button>
            </div>
          </section>
        </section>
      </div>
    );
  }
}
