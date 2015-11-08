import React from 'react';

export default class Panels extends React.Component {
  render() {
    return (
      <div>
        <h1 className="doc-heading">Panels</h1>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Basic Panel</h3>
          <div className="panel">
            <div className="heading">Heading</div>
            <div className="body">I'm the body!</div>
          </div>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading"> Panel With Consecutive Body </h3>
          <div className="panel -default">
            <div className="body"> Basic Panel Example </div>
            <div className="body"> Basic Panel Example </div>
          </div>
        </section>

        <section className="doc-bottom-space-large">
          <section className="doc-bottom-space">
            <h3 className="doc-heading">Panel with Heading and Body</h3>
            <p>Easily add a heading container to your panel with .panel-heading. You may also include any <code>{'<h1>-<h6>'}</code> with a <code>.panel-title</code> class to add a pre-styled heading.</p>
            <div className="panel -default">
              <div className="heading">Panel Title</div>
              <div className="body">Panel Body</div>
            </div>
          </section>

          <section>
            <div className="panel -default">
              <div className="heading"><h2>Panel Title</h2></div>
              <div className="body">Panel Body</div>
            </div>
          </section>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Panel with Footer and Body</h3>
          <div className="panel -default">
            <div className="body">Panel Body</div>
            <div className="footer">Panel Footer</div>
          </div>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Contextual Alternatives</h3>
          <div className="panel -primary doc-bottom-space">
              <div className="heading">Panel Title</div>
              <div className="body">Panel Body</div>
          </div>

          <div className="panel -sky doc-bottom-space">
            <div className="heading">Panel Title</div>
            <div className="body">Panel Body</div>
          </div>

          <div className="panel -emerald doc-bottom-space">
            <div className="heading">Panel Title</div>
            <div className="body">Panel Body</div>
          </div>

          <div className="panel -sun doc-bottom-space">
            <div className="heading">Panel Title</div>
            <div className="body">Panel Body</div>
          </div>

          <div className="panel -crimson">
            <div className="heading">Panel Title</div>
            <div className="body">Panel Body</div>
          </div>
        </section>

        <section className="doc-bottom-space-large">
          <h3 className="doc-heading">Panel with Multiple Body</h3>
          <div className="panel -default">
            <div className="heading">Panel Title</div>
            <div className="body">Hey, I'm a body!</div>
            <div className="body">Oh gosh, I'm also a body!</div>
            <div className="body">
              <h4>Favorites:</h4>
              <div className="doc-bottom-space">
                <i className="icon icon-star-full" />
                <i className="icon icon-star-full" />
                <i className="icon icon-star-full" />
              </div>
              <div>
                <i className="icon icon-star-full" />
                <i className="icon icon-star-full" />
                <i className="icon icon-star-empty" />
              </div>
            </div>
            <div className="footer">Footer</div>
          </div>
        </section>

        <section className="doc-bottom-space-large">
          <h2>Panel with Tables</h2>
          <div className="panel -default">
            <div className="heading">Panel Title</div>
            <div className="body">
              Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id eli.
            </div>
            <table className="table -bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Table Header</th>
                  <th>Table Header</th>
                  <th>Table Header</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Table Content</td>
                  <td>Table Content</td>
                  <td>Table Content</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Table Content</td>
                  <td>Table Content</td>
                  <td>Table Content</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Panel With List Groups</h2>
          <div className="panel -default">
            <div className="heading">Panel Title</div>
            <div className="body">
              Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id eli
            </div>
            <div className="list-group">
              <a className="menuitem">List Item</a>
              <a className="menuitem">List Item</a>
              <a className="menuitem">List Item</a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
