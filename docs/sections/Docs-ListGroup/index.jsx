import React from 'react';

export default class ListGroup extends React.Component {
  render() {
    return (
      <div>
        <section className="doc-bottom-space-large">
          <h1 className="doc-heading">List Group</h1>
          <p className="lead">Useful for navigations, etc.</p>
          <div className="row">
            <div className="col-md-4">
              <div className="list-group">
                <a className="menuitem" href="#">Home</a>
                <a className="menuitem" href="#">About</a>
                <a className="menuitem" href="#">Downloads</a>
              </div>
            </div>
          </div>
        </section>

        <section className="doc-bottom-space-large">
          <h2 className="doc-heading">Example: Selected / Active Item</h2>
          <p>Simply add the .-selected modifier to apply the `hover` styling to a menuitem.</p>
          <div className="row">
            <div className="col-md-4">
              <div className="list-group">
                <a href="#" className="menuitem -selected">Home</a>
                <a className="menuitem" href="#">About</a>
                <a className="menuitem" href="#">Downloads</a>
              </div>
            </div>
          </div>
        </section>

        <section className="doc-bottom-space-large">
          <h2 className="doc-heading"> Example: Item with Icons </h2>
          <div className="row">
            <div className="col-md-4">
              <div className="list-group">
                <a href="#" className="menuitem -selected"><i className="icon icon-home" /> Home </a>
                <a className="menuitem" href="#"><i className="icon icon-profile2" /> About </a>
                <a className="menuitem" href="#"><i className="icon icon-download4" /> Downloads </a>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="doc-heading"> Example: Item with Badge </h2>
          <div className="row">
            <div className="col-md-4">
              <div className="list-group">
                <a href="#" className="menuitem -selected"> 
                  <i className="icon icon-home" />
                  <span className="badge"> 69 </span> Home 
                </a>

                <a href="#" className="menuitem">
                  <i className="icon icon-profile2" />
                  <span className="badge"> 69 </span> About 
                </a>

                <a href="#" className="menuitem"> 
                  <i className="icon icon-download4" /> 
                  <span className="badge"> 69 </span> Downloads 
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
