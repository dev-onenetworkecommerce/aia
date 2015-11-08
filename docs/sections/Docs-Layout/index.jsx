import React from 'react';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <section className="doc-bottom-space-large">
          <h1 className="doc-heading">Layout</h1>
          <p className="lead">Out layout includes basic page containers and a single-tiered, fraction-based grid system. That sounds more complicated than it really is though—it’s just containers, rows, and columns.</p>
          <div className="row doc-bottom-space">
            <div className="col-md-1">
              <div className="doc-block-grid">.col-md-1</div>
            </div>
            <div className="col-md-1">
              <div className="doc-block-grid">.col-md-1</div>
            </div>
            <div className="col-md-1">
              <div className="doc-block-grid">.col-md-1</div>
            </div>
            <div className="col-md-1">
              <div className="doc-block-grid">.col-md-1</div>
            </div>
            <div className="col-md-1">
              <div className="doc-block-grid">.col-md-1</div>
            </div>
            <div className="col-md-1">
              <div className="doc-block-grid">.col-md-1</div>
            </div>
            <div className="col-md-1">
              <div className="doc-block-grid">.col-md-1</div>
            </div>
            <div className="col-md-1">
              <div className="doc-block-grid">.col-md-1</div>
            </div>
            <div className="col-md-1">
              <div className="doc-block-grid">.col-md-1</div>
            </div>
            <div className="col-md-1">
              <div className="doc-block-grid">.col-md-1</div>
            </div>
            <div className="col-md-1">
              <div className="doc-block-grid">.col-md-1</div>
            </div>
            <div className="col-md-1">
              <div className="doc-block-grid">.col-md-1</div>
            </div>
          </div>

          <div className="row doc-bottom-space">
            <div className="col-md-3">
              <div className="doc-block-grid">.col-md-3</div>
            </div>
            <div className="col-md-9">
              <div className="doc-block-grid">.col-md-9</div>
            </div>
          </div>

          <div className="row doc-bottom-space">
            <div className="col-md-4">
              <div className="doc-block-grid">.col-md-4</div>
            </div>
            <div className="col-md-4">
              <div className="doc-block-grid">.col-md-4</div>
            </div>
            <div className="col-md-4">
              <div className="doc-block-grid">.col-md-4</div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="doc-block-grid">.col-md-6</div>
            </div>
            <div className="col-md-6">
              <div className="doc-block-grid">.col-md-6</div>
            </div>
          </div>
        </section>

        <section className="doc-bottom-space-large">
          <h2 className="doc-heading">Right-floated columns</h2>
          <p>Helpful for cases when you'd like to put the last column for screens as the first column for smaller screens.</p>
          <p className="_text-muted">It's pretty hard to explain, so take a look yourself. Note that you will also have to switch the column order.</p>
          <div className="row -right">
            <div className="col-md-3">
              <div className="doc-block-grid">.col-md-3</div>
            </div>
            <div className="col-md-9">
              <div className="doc-block-grid">.col-md-9</div>
            </div>
          </div>
        </section>

        <section className="doc-bottom-space-large">
          <h2 className="doc-heading">Mobile and desktop</h2>
          <p>Don't want your columns to simply stack in smaller devices? Use the extra small and medium device grid classes by adding .col-xs-* .col-md-* to your columns. See the example below for a better idea of how it all works.</p>

          <div className="row doc-bottom-space">
            <div className="col-xs-12 col-md-8"><div className="doc-block-grid">.col-xs-12 .col-md-6</div></div>
            <div className="col-xs-6 col-md-4"><div className="doc-block-grid">.col-xs-6 .col-md-4</div></div>
          </div>
          <div className="row doc-bottom-space">
            <div className="col-xs-6 col-md-4"><div className="doc-block-grid">.col-xs-6 .col-md-4</div></div>
            <div className="col-xs-6 col-md-4"><div className="doc-block-grid">.col-xs-6 .col-md-4</div></div>
            <div className="col-xs-6 col-md-4"><div className="doc-block-grid">.col-xs-6 .col-md-4</div></div>
          </div>
          <div className="row doc-bottom-space">
            <div className="col-xs-6"><div className="doc-block-grid">.col-xs-6</div></div>
            <div className="col-xs-6"><div className="doc-block-grid">.col-xs-6</div></div>
          </div>
        </section>

        <section className="doc-bottom-space-large">
          <section className="doc-bottom-space">
            <h1 className="doc-heading">Centered</h1>
            <p>Columns can be centered by adding <code>._centered</code> to the column class.</p>
            <div className="row">
              <div className="col-md-6 _centered"><div className="doc-block-grid">._centered</div></div>
            </div>
          </section>

          <section className="doc-bottom-space">
            <h1 className="doc-heading">Centered half-sized block</h1>
            <p>You can use the grid to set the width of the block along with .centered to center a half-sized block</p>
            <div className="col-md-6 _centered doc-bottom-space"><div className="doc-block-grid">.col-md-6 ._centered</div></div>
            <div className="col-md-8 _centered doc-bottom-space"><div className="doc-block-grid">.col-md-8 ._centered</div></div>
            <div className="col-md-4 _centered doc-bottom-space"><div className="doc-block-grid">.col-md-4 ._centered</div></div>
          </section>
        </section>
      </div>
    );
  }
}
