import React from 'react';
import Modal from '../../../scripts/components/Modal';

export default class ModalView extends React.Component {
  state = {
    open: false
  };

  render() {
    return (
      <div>
        <h1 className="doc-heading">Modals</h1>
        {this.state.open}
        <button className="btn -primary" onClick={() => this.setState({ open: true })}>Open Modal</button>
        <Modal open={this.state.open}>
          <div className="modal">
            <div className="modal-dialog">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 _centered">
                    <div className="_clearfix">
                      <h3 className="_left"> Search </h3>
                      <i className="icon icon-close _right" onClick={() => this.setState({ open: false })} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
