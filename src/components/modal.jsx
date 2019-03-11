import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  state = {
    modalDisplay: this.props.modalDisplay,
  };

  render() {
    const { modalTitle, ModalForm } = this.props;
    const display = this.state.modalDisplay ? 'block' : 'none';
    return <div id='parcelmodal' className='modal' style={display}>
      <div className='modal-box'>
        <div className='modal-content'>
          <h2 className='text-center'>{ modalTitle }</h2>
          <ModalForm />
        </div>
      </div>
    </div>;
  }
}

Modal.propTypes = {
  modalTitle: PropTypes.string,
  ModalForm: PropTypes.func,
  modalDisplay: PropTypes.string,
};

export default Modal;
