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
          <p>Use ._text-center, ._text-left or ._text-right</p>
          <p className="_text-center">Yolo please swag.</p>
          <p className="_text-right">Yolo please swag.</p>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Text transforms</h3>
          <p>Use ._text-up or ._text-low</p>
          <p className="_text-up">Yolo please swag.</p>
          <p className="_text-low">YoLo PleAse SwaG.</p>
        </section>

        <section className="doc-bottom-space-large">
          <section className="doc-bottom-space">
            <h3 className="doc-heading">Quick floats</h3>
            <p>Use these to float an element to left or right.</p>
            <div className="_clearfix">
              <div className="_left doc-block">._left</div>
              <div className="_right doc-block">._right</div>
            </div>
          </section>

          <section>
            <h3 className="doc-heading">Clearfix</h3>
            <p>Simply apply ._clearfix to parents elements to easily clear floats.</p>
          </section>
        </section>

        <section className="doc-bottom-space-large">
          <section className="doc-bottom-space">
            <h3 className="doc-heading">Spacers</h3>
            <p>Add ._spacer to add a uniform margin-bottom to your elements</p>
            <div className="doc-block _spacer">._spacer-small</div>
            <div className="doc-block _spacer">._spacer</div>
          </section>

          <section className="doc-bottom-space">
            <h3 className="doc-heading">Variations</h3>
            <p>Instead of ._space, you can add either ._spacer-small or ._spacer-large to adjust the margin size.</p>
            <div className="doc-block _spacer-small">._spacer-small</div>
            <div className="doc-block _spacer">._spacer</div>
            <div className="doc-block _spacer-large">._spacer-large</div>
          </section>

          <section>
            <h3 className="doc-heading">No Spacer</h3>
            <p>Add ._no-spacer to strictly remove the bottom margin</p>
            <div className="doc-block _spacer-small">._spacer-small</div>
            <div className="doc-block _no-spacer">._no-spacer</div>
            <div className="doc-block"></div>
          </section>
        </section>

        <section className="doc-bottom-space-large">
          <h1 className="doc-heading">Text Ellipsis</h1>
          <p className="lead">Helpful for collapsing very long text.</p>
          <p className="_text-muted">As a class, use the <code>._ellipsis</code> class; as a mixin, use <code>text-ellipsis</code>. As in <code>@include text-ellipsis;</code>.</p>
          <div className="doc-ellipsis-example-container">
            <p className="_ellipsis">This is a very long text, aand aaand yolo please swag.</p>
          </div>
          <p className="_text-muted _spacer">Adding <code>.-expander</code>, you can reveal the entire text on hover</p>
          <div className="doc-ellipsis-example-container">
            <p className="_ellipsis -expander">This is a very long text, aand aaand yolo please swag.</p>
          </div>
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
      </div>
    );
  }
}
