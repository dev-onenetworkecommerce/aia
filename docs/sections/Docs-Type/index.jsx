import React from 'react';

export default class Type extends React.Component {
  render() {
    return (
      <div>
        <h1 className="doc-heading">Type</h1>
        <section className="doc-bottom-space-large">
          <h1>Headings</h1>
          <div className="alert -sky doc-bottom-space">Heads up! The font-weight of headings are regular by default.</div>
          <h1>Headline 1</h1>
          <h2>Headline 2</h2>
          <h3>Headline 3</h3>
          <h4>Headline 4</h4>
          <h5>Headline 5</h5>
          <h6>Headline 6</h6>
        </section>

        <section className="doc-bottom-space-large">
          <h1>Body text</h1>
          <p>Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
          <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
        </section>

        <section className="doc-bottom-space-large">
          <h1> Link </h1>
          <a href="javascript:void(0)"> Look, look! I'm a link. </a>
        </section>

        <section className="doc-bottom-space-large">
          <h1>Lead</h1>
          <p className="lead">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus. &mdash; Some Guy</p>
        </section>

        <section className="doc-bottom-space-large">
          <h1>Inline text elements</h1>
          <p>You can use the mark tag to <mark>highlight</mark> text.</p>
          <p><del>This line of text is meant to be treated as deleted text.</del></p>
          <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
          <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
          <p><u>This line of text will render as underlined</u></p>
          <p><small>This line of text is meant to be treated as fine print.</small></p>
          <p><strong>This line rendered as bold text.</strong></p>
          <p><em>This line rendered as italicized text.</em></p>
        </section>

        <section className="doc-bottom-space-large">
          <h1>Blockquote</h1>
          <blockquote>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          </blockquote>
        </section>

        <section>
          <h1>Lists</h1>
          <section className="doc-bottom-space">
            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Nulla volutpat aliquam velit
                <ul>
                  <li>Phasellus iaculis neque</li>
                  <li>Purus sodales ultricies</li>
                  <li>Vestibulum laoreet porttitor sem</li>
                  <li>Ac tristique libero volutpat at</li>
                </ul>
              </li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Aenean sit amet erat nunc</li>
              <li>Eget porttitor lorem</li>
            </ul>
          </section>

          <section>
            <h2>Unordered Lists</h2>
            <ol>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Nulla volutpat aliquam velit
                <ol>
                  <li>Phasellus iaculis neque</li>
                  <li>Purus sodales ultricies</li>
                  <li>Vestibulum laoreet porttitor sem</li>
                  <li>Ac tristique libero volutpat at</li>
                </ol>
              </li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Aenean sit amet erat nunc</li>
              <li>Eget porttitor lorem</li>
            </ol>
          </section>
        </section>
      </div>
    );
  }
}
