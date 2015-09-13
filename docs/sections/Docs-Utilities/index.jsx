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
      </div>
    );
  }
}
