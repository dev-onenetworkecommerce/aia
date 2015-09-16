import React from 'react';

export default class Guidelines extends React.Component {
  render() {
    return (
      <div>
        <section className="doc-bottom-space-large">
          <h1 className="doc-heading">Guidelines</h1>
          <p className="lead">While not limited to, we have a set of guidelines and standards to keep our code consistent. This covers both JS and CSS.</p>
        </section>

        <section className="doc-bottom-space-large">
          <section className="doc-bottom-space">
            <h1 className="doc-heading">CSS Best Practices</h1>
            <ul>
              <li><a href="http://codeguide.co/">Code Guide</a> by <a href="http://twitter.com/mdo">@mdo</a></li>
              <li>If a ui component is to be reused for different purposes, do not use business-logic terms without a good reason.</li>
              <li>2 spaces.</li>
              <li>Do not use IDs, ~\`**please**\`~.</li>
              <li>Do not use vendor prefixes (`-webkit-`, `-moz-`) unless necessary. We use <a href="//github.com/postcss/autoprefixer">Autoprefixer</a>.</li>
              <li>Enable <a href="http://ricostacruz.com/cheatsheets/css-antialias">CSS antialiasing</a> globally</li>
              <li>Prefer to use a styleguide early on.</li>
              <li>Refer to [rscss](https://github.com/rstacruz/rscss)</li>
            </ul>
          </section>

          <section>
            <h1 className="doc-heading">Bootstrap</h1>
            <ul>
              <li>Refer to [**bootstrap-practices**](https://github.com/rstacruz/bootstrap-practices)</li>
            </ul>
          </section>
        </section>
      </div>
    );
  }
}
