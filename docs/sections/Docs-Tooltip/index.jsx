import React from 'react';
import Tooltip from '../../../scripts/components/Tooltip';

export default class TooltipView extends React.Component {

  state = {
    text: ''
  }

  render() {
    return (
      <div>
        <h1 className="doc-heading">Tooltip</h1>
        <Tooltip position="bottom" text="sample tooltip">
            This is the tooltip
        </Tooltip>
      </div>
    );
  }
}
