import React from 'react';
import Tooltip from '../../../scripts/components/Tooltip';

export default class TooltipView extends React.Component {

  render() {
    return (
      <div>
        <h1 className="doc-heading">Tooltip</h1>
        <section className="doc-bottom-space-large">
          <p className="lead">Tooltip Top </p>
          <Tooltip position="top">
            Hover to reveal the tooltip.
          </Tooltip>
        </section>

        <section className="doc-bottom-space-large">
          <p className="lead">Tooltip Bottom </p>
          <Tooltip position="bottom">
            Hover to reveal the tooltip.
          </Tooltip>
        </section>

        <section className="doc-bottom-space-large">
          <p className="lead">Tooltip Left </p>
          <Tooltip position="left">
            Hover to reveal the tooltip.<br/>
          </Tooltip>
        </section>

        <section className="doc-bottom-space-large">
          <p className="lead">Tooltip Right </p>
          <Tooltip position="right">
            Hover to reveal the tooltip.<br/>
           </Tooltip>
        </section>

      </div>
    );
  }
}
