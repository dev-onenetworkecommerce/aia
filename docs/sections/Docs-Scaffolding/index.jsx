import React from 'react';

export default class Scaffolding extends React.Component {
  render() {
    return (
      <div>
        <section className="doc-bottom-space-large">
          <h1 className="doc-heading">Scaffolding</h1>
          <p className="lead">Scaffolding refers to the global resets and dependencies that Aia is built upon.</p>
        </section>

        <section className="doc-bottom-space-large">
          <h2 className="doc-heading">Content</h2>
          <ul>
            <li><a href="#html5-doctype">HTML5 doctype</a></li>
            <li><a href="#box-sizing">Box-sizing</a></li>
            <li><a href="#normalize">Built on Normalize</a></li>
            <li><a href="#container">Container</a></li>
            <li><a href="#font-family">Font Family</a></li>
          </ul>
        </section>

        <section className="doc-bottom-space-large">
          <h2 className="doc-heading" id="html5-doctype">HTML5 doctype</h2>
          <p>Aia makes use of certain HTML elements and CSS properties that require the use of the HTML5 doctype. Include it at the beginning of all your pages.</p>
        </section>

        <section className="doc-bottom-space-large">
          <h2 className="doc-heading" id="box-sizing">Box-sizing</h2>
          <p>We reset box-sizing to border-box for every element in Aia. This allows us to more easily assign widths to elements that also have padding and borders.</p>
        </section>

        <section className="doc-bottom-space-large">
          <h2 className="doc-heading" id="normalize">Built on Normalize</h2>
          <p>For improved cross-browser rendering, we use <a href="https://github.com/necolas/normalize.css/">Normalize.css</a> to correct small inconsistencies across browsers and devices.</p>
        </section>

        <section className="doc-bottom-space-large">
          <h1 className="doc-heading" id="container">Container</h1>
          <p>Wrap site contents and house our grid system.</p>
          <p>Use .container for a responsive fixed-width container.</p>
        </section>

        <section>
          <h1 className="doc-heading" id="font-family">Font Family</h1>
          <p>We mainly use Proxima Nova, and load it from Typekit. This is only internally available.</p>
          <p>The documentation / demos used to load the font, but we are removing it from the docs as of post-0.3.1 to avoid wasting resources.</p>
        </section>
      </div>
    );
  }
}
