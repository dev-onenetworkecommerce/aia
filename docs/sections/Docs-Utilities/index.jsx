import React from 'react';

export default class Utilities extends React.Component {
  render() {
    return (
      <div>
        <h1 className="doc-heading">Helper classes</h1>
        <p className="lead">Utility classes are available for usage. <strong>But take note:</strong> Use them sparingly. </p>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Contextual classes</h3>
          <p>Convey meaning through color with a handful of emphasis utility classes. These may also be applied to links and will darken on hover just like our default link styles.</p>
          <p className="text-muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
          <p className="text-emerald">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
          <p className="text-sky">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
          <p className="text-sun">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
          <p className="text-crimson">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
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
            <div className="doc-block _spacer-large"></div>
          </section>

          <section>
            <h3 className="doc-heading">No Spacer</h3>
            <p>Add ._no-spacer to strictly remove the bottom margin</p>
            <div className="doc-block _spacer-small">._spacer-small</div>
            <div className="doc-block _no-spacer">._no-spacer</div>
            <div className="doc-block"></div>
          </section>
        </section>

      </div>
    );
  }
}
