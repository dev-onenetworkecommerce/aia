import React from 'react';

export default class Buttons extends React.Component {
  render() {
    return (
      <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <h2>Light Background</h2>
              <div className="doc-bottom-space">
                <h4>Normal</h4>          
                <button className="btn">Button</button>
              </div>

              <div className="doc-bottom-space">            
                <h4>Disabled</h4>
                <button className="btn -disabled">Disabled</button>
              </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <h2>Inverted Button</h2>
            <div className="doc-bottom-space">
              <h4>Normal</h4>
                <div className="doc-bottom-space">
                  <button className="btn -inverted">Button</button>
                </div>

                <div className="doc-bottom-space">
                  <button className="btn -inverted -crimson">Button</button>
                </div>

                <div className="doc-bottom-space">
                  <button className="btn -inverted -sky">Button</button>
                </div>

                <div className="doc-bottom-space">
                  <button className="btn -inverted -emerald">Button</button>
                </div>

                <div className="doc-bottom-space">
                  <button className="btn -inverted -sun">Button</button>
                </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <h2>Color</h2>

            <div className="doc-bottom-space">
              <button className="btn -default">Button</button>
            </div>

            <div className="doc-bottom-space">
              <button className="btn -sky">Button</button>
            </div>

            <div className="doc-bottom-space">
              <button className="btn -emerald">Button</button>
            </div>

            <div className="doc-bottom-space">
              <button className="btn -sun">Button</button>
            </div>

            <div className="doc-bottom-space">
              <button className="btn -crimson">Button</button>
            </div>
          </div>
      </div>
    );
  }
}
