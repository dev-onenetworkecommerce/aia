import React from 'react';

export default class Scaffolding extends React.Component {
  render() {
    return (
      <div>
        <section className="doc-bottom-space-large">
          <h1 className="doc-heading">Scaffolding</h1>
          <p className="lead">Scaffolding refers to the global resets and dependencies that June is built upon.</p>
        </section>

        <section className="doc-bottom-space-large">
          <h1 className="doc-heading">Content</h1>
          <ul>
            <li><a href="#html5-doctype">HTML5 doctype</a></li>
            <li><a href="#box-sizing">Box-sizing</a></li>
            <li><a href="#normalize">Built on Normalize</a></li>
          </ul>
        </section>

        <section className="doc-bottom-space-large">
          <h1 className="doc-heading" id="html5-doctype">HTML5 doctype</h1>
          <p>Primer makes use of certain HTML elements and CSS properties that require the use of the HTML5 doctype. Include it at the beginning of all your pages.</p>
        </section>

        <section className="doc-bottom-space-large">
          <h1 className="doc-heading" id="box-sizing">Box-sizing</h1>
          <p>We reset box-sizing to border-box for every element in June. This allows us to more easily assign widths to elements that also have padding and borders.</p>
        </section>

        <section className="doc-bottom-space-large">
          <h1 className="doc-heading" id="normalize">Built on Normalize</h1>
          <p>For improved cross-browser rendering, we use <a href="https://github.com/necolas/normalize.css/">Normalize.css</a> to correct small inconsistencies across browsers and devices.</p>
        </section>
      </div>
    );
  }
}
