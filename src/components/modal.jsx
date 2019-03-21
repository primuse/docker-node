import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  state = {
    modalDisplay: this.props.modalDisplay,
    clickedOutside: false,
  };

  componentDidMount() {
    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.modalDisplay !== prevState.modalDisplay) {
      return ({ modalDisplay: nextProps.modalDisplay });
    }
    return null;
  }

  handleClick = (e) => {
    if (this.node.contains(e.target)) {
      this.setState({ modalDisplay: false, clickedOutside: true });
      console.log('state is now:', this.state.modalDisplay, this.state.clickedOutside);
      setTimeout(() => {
        this.setState({ clickedOutside: false });
      }, 1000);
    }
  };


  render() {
    const { modalTitle, ModalForm } = this.props;
    const display = this.state.modalDisplay && this.state.clickedOutside === false
      ? 'block' : 'none';
    console.log(display, this.state.modalDisplay, this.state.clickedOutside);

    // eslint-disable-next-line no-return-assign
    return <div ref={node => this.node = node} className='modal' style={{ display }}>
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
  modalDisplay: PropTypes.bool,
};

export default Modal;
