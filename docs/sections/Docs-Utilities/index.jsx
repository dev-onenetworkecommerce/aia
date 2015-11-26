import React from 'react';

export default class Utilities extends React.Component {
  render() {
    return (
      <div>
        <section className="doc-bottom-space-large">
          <h1 className="doc-heading">Helper classes</h1>
          <p className="lead">Utility classes are available for usage. <strong>But take note:</strong> Use them sparingly. </p>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Contextual classes</h3>
          <p>Convey meaning through color with a handful of emphasis utility classes. These may also be applied to links and will darken on hover just like our default link styles.</p>
          <p className="_text-muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
          <p className="_text-emerald">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
          <p className="_text-sky">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
          <p className="_text-sun">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
          <p className="_text-crimson">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Text alignment</h3>
          <p>Use <code>._text-center</code>, <code>._text-left</code> or <code>._text-right</code></p>
          <p className="_text-center">Yolo please swag.</p>
          <p className="_text-right">Yolo please swag.</p>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Text transforms</h3>
          <p>Use <code>._text-up</code> or <code>._text-low</code></p>
          <p className="_text-up">Yolo please swag.</p>
          <p className="_text-low">YoLo PleAse SwaG.</p>
        </section>

        <section className="doc-bottom-space-large">
          <section className="doc-bottom-space">
            <h3 className="doc-heading">Quick floats</h3>
            <p>Use these to float an element to left or right.</p>
            <div className="_clearfix">
              <div className="_left"><div className="doc-block"><code>._left</code></div></div>
              <div className="_right"><div className="doc-block"><code>._right</code></div></div>
            </div>
          </section>

          <section>
            <h3 className="doc-heading">Clearfix</h3>
            <p>Simply apply <code>._clearfix</code> to parents elements to easily clear floats.</p>
          </section>
        </section>

        <section className="doc-bottom-space-large">
          <section className="doc-bottom-space">
            <h3 className="doc-heading">Spacers</h3>
            <p>Add ._spacer to add a uniform margin-bottom to your elements</p>
            <div className="_spacer"><div className="doc-block"><code>._spacer-small</code></div></div>
            <div className="_spacer"><div className="doc-block"><code>._spacer</code></div></div>
          </section>

          <section className="doc-bottom-space">
            <h3 className="doc-heading">Variations</h3>
            <p>Instead of <code>._space</code>, you can add either <code>._spacer-small</code> or <code>._spacer-large</code> to adjust the margin size.</p>
            <div className="_spacer-small"><div className="doc-block"><code>._spacer-small</code></div></div>
            <div className="_spacer"><div className="doc-block"><code>._spacer</code></div></div>
            <div className="_spacer-large"><div className="doc-block"><code>._spacer-large</code></div></div>
            <div className="doc-block"></div>
          </section>

          <section>
            <h3 className="doc-heading">No Spacer</h3>
            <p>Add ._no-spacer to strictly remove the bottom margin</p>
            <div className="_spacer-small"><div className="doc-block"><code>._spacer-small</code></div></div>
            <div className="_no-spacer"><div className="doc-block"><code>._no-spacer</code></div></div>
            <div className="doc-block"></div>
          </section>
        </section>

        <section className="doc-bottom-space-large">
          <section className="doc-bottom-space">
            <h1 className="doc-heading">Text Ellipsis</h1>
            <p className="lead">Helpful for collapsing very long text.</p>
            <p className="_text-muted">As a class, use the <code>._ellipsis</code> class; as a mixin, use <code>text-ellipsis</code>. As in <code>@include text-ellipsis;</code>.</p>
            <div className="doc-ellipsis-example-container">
              <p className="_ellipsis">This is a very long text, aand aaand yolo please swag.</p>
            </div>
          </section>

          <section>
            <p className="_text-muted _spacer">Adding <code>.-expander</code>, you can reveal the entire text on hover</p>
            <div className="doc-ellipsis-example-container">
              <p className="_ellipsis -expander">This is a very long text, aand aaand yolo please swag.</p>
            </div>
          </section>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Center Block Mixin</h3>
          <p>This is a utility for <code>margin: 0 auto;</code> (used for centering blocks).</p>
          <div className="doc-center-block-mixin-example _spacer" />
          <pre>{`
            .some-class {
              @include center-block;
            }
          `}</pre>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Drop Shadow Mixin</h3>
          <p>Use this utility to add good and consistent drop shadow for your element.</p>
          <div className="doc-drop-shadow-mixin-example _spacer" />
          <pre>{`
            .some-class {
              @include drop-shadow; // bottom (default)
              @include drop-shadow(top); // top
            }
          `}</pre>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Responsive Mixins</h3>
          <p><em>Mixins</em> such <code>breakpoint-sm</code>, <code>breakpoint-md</code>, <code>breakpoint-lg</code>, and <code>breakpoint-xl</code> are provided to help you with your responsive needs.</p>
          <p>You can resize your window and the below should be colored <span className="_text-muted">gray</span>, <span className="_text-crimson">red</span>, <span className="_text-sun">yellow</span>, <span className="_text-sky">blue</span>, and <span className="_text-emerald">green</span> for xs, sm, md, lg, xl sized screens respectively.</p>
          <div className="responsive-mixins-box _spacer" />
          <pre>{`
            .some-class {
              @include breakpoint-md {
                // styling to be applied for
                // md-sized screens and above
              }
            }
          `}</pre>
        </section>
        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Header Bold</h3>
          <p>Header elements doesn't give an automatic bold state. Just add <code>._heading-bold</code> to make your header in bold easily.</p>
          <h5 className="_heading-bold">Header with _heading-bold</h5>
          <h5>Header without _heading-bold</h5>
        </section>
      </div>
    );
  }
}
