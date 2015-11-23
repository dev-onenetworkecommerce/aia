import React from 'react';
import { Link } from 'react-router';

export default class Buttons extends React.Component {
  render() {
    return (
      <div>
        <section className="doc-bottom-space-large">
          <h1 className="doc-heading">Buttons</h1>

          <div className="doc-btn-group">
            <button className="btn -default">Default</button>
            <button className="btn -primary">Primary</button>
            <button className="btn -sky">Sky</button>
            <button className="btn -emerald">Emerald</button>
            <button className="btn -crimson">Crimson</button>
            <button className="btn -link">Link</button>
          </div>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Sizes</h3>
          <p>Apply one of <code>.-xs</code>, <code>.-small,</code> or <code>.-large</code></p>
          <div className="doc-btn-group">
            <button className="btn -default -xs">Extra Small</button>
            <button className="btn -default -small">Small</button>
            <button className="btn -default">Default</button>
            <button className="btn -default -large">Large</button>
          </div>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Inverted</h3>
          <p>Simply use <code>.-inverted</code> to a button to make it appear no action.</p>
          <div className="doc-btn-group">
            <button className="btn -inverted -default">Button</button>
            <button className="btn -inverted -primary">Button</button>
            <button className="btn -inverted -sky">Button</button>
            <button className="btn -inverted -crimson">Button</button>
            <button className="btn -inverted -emerald">Button</button>
          </div>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Block buttons</h3>
          <p>Make any button full-width by adding <code>.-block</code> to make it full-width in a block element with centered text.</p>
          <button className="btn -default -block doc-bottom-space">Block button</button>
          <button className="btn -default -small -block">Small block button</button>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Rounded Button</h3>
          <p>Just add <code>.-rounded</code> to make the button rounded.</p>
          <div className="doc-btn-group">
            <button className="btn -default -rounded">Button</button>
            <button className="btn -sky -rounded">Button</button>
            <button className="btn -emerald -rounded">Button</button>
            <button className="btn -crimson -rounded">Button</button>
          </div>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading"> Button with Loader </h3>
          <p>You can use our provided <Link to="/loaders">loader</Link> inside the button.</p>
          <div className="doc-btn-group">
            <button className="btn -default">
              <div className="tri-circle-loader">
                <div />
                <div />
                <div />
              </div>
            </button>

            <button className="btn -primary">
              <div className="tri-circle-loader -light">
                <div />
                <div />
                <div />
              </div>
            </button>
          </div>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Disabled</h3>
          <p>Make a button in disable state using <code>.-disable</code> modifier class.</p>
          <button className="btn -default -disabled">Button</button>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">With Icons</h3>
          <p>Can be done in icon only, icon with text, icon after text or icon in both left and right of text.</p>
          <div className="doc-btn-group">
            <button className="btn -default"> <i className="icon icon-user3" /> </button>
            <button className="btn -default"> <i className="icon icon-user3" /> Button </button>
            <button className="btn -default"> Button <i className="icon icon-user3" /> </button>
            <button className="btn -default">
              <i className="icon icon-user3" /> Button
              <i className="icon icon-user3" />
            </button>
          </div>

          <p>With Icon in different button variants.</p>
          <div className="doc-btn-group">
            <button className="btn -xs -default"> <i className="icon icon-user3" /> Button </button>
            <button className="btn -small -default"> <i className="icon icon-user3" /> Button </button>
            <button className="btn -default"> <i className="icon icon-user3" /> Button </button>
            <button className="btn -large -default"> <i className="icon icon-user3" /> Button </button>
          </div>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Button Group</h3>
          <p>Want to have a set of buttons that are attach to each other? Just simply wrap them in a <code>.btn-group</code> to give the button space from the other button</p>
          <section className="doc-bottom-space">
            <div className="btn-group">
              <button className="btn -default">Button</button>
              <button className="btn -default">Button</button>
              <button className="btn -default">Button</button>
            </div>
          </section>

          <section className="doc-bottom-space">
            <h3 className="doc-heading">Rounded Button Group</h3>
            <p>Simply add the <code>.-rounded</code> modifier class to <code>.btn-group</code>.</p>
            <div className="btn-group -rounded">
              <button className="btn -default">Button</button>
              <button className="btn -default">Button</button>
              <button className="btn -default">Button</button>
            </div>
          </section>

          <section>
            <h3 className="doc-heading">Button Group Sizes</h3>
            <p>You may add the <code>.-xs</code> , <code>.-small</code> or <code>.-large</code> modifier class to <code>.btn-group</code>.</p>
            <div className="btn-group -xs">
              <button className="btn -default">Extrasmall</button>
              <button className="btn -default">Extrasmall</button>
              <button className="btn -default">Extrasmall</button>
            </div>
            <div className="btn-group -small">
              <button className="btn -default">Small</button>
              <button className="btn -default">Small</button>
              <button className="btn -default">Small</button>
            </div>
            <div className="btn-group">
              <button className="btn -default">Default</button>
              <button className="btn -default">Default</button>
              <button className="btn -default">Default</button>
            </div>

            <section className="doc-bottom-space">
              <div className="btn-group -large">
                <button className="btn -default">Large</button>
                <button className="btn -default">Large</button>
                <button className="btn -default">Large</button>
              </div>
            </section>

          </section>
        </section>

        <section className="doc-bottom-space-large">
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

          <section>
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

        <section>
          <section className="doc-bottom-space">
            <h1 className="doc-heading">Light Button</h1>
            <p className="lead">It is useful for actions for a resource in a list. Advised to pair the text with an icon.</p>
            <button className="light-btn">
              <i className="icon icon-pencil" />
              Edit
            </button>
          </section>

          <section>
            <h1 className="doc-heading">Example: Darker Light Button</h1>
            <p>A larger and darker variant of the light button. This is useful for general actions in a list.</p>
            <button className="light-btn -dark">
              <i className="icon icon-plus2" />
              New User
            </button>
          </section>
        </section>
      </div>
    );
  }
}
