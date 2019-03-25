import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createNewParcel } from '../../actions/parcelActions';

export class NewParcelModalForm extends Component {
  state = {
    parcelName: '',
    weight: '',
    destination: '',
    receiver: '',
    email: '',
    phoneNumber: '',
    pickupLocation: ''

  }

  componentWillUnmount() {
    // Clear State
    this.setState({
      parcelName: '',
      weight: '',
      destination: '',
      receiver: '',
      email: '',
      phoneNumber: '',
      pickupLocation: ''
    });
  }

  create = (event) => {
    event.preventDefault();
    const data = this.state;

    this.props.createNewParcel(data);
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      parcelName, weight, destination, receiver,
      email, phoneNumber, pickupLocation
    } = this.state;

    return <form id='createParcel' className='text-right' onSubmit={this.create}>
      <div className='column is-two htmlForm-row text-left'>
        <div>
          <label htmlFor='parcelType'>Parcel Name</label>
          <input type='text' id='parcelName' name='parcelName' value={parcelName}
          onChange={this.onChange} required />
        </div>
        <div>
          <label htmlFor='weight'>Weight</label>
          <input type='number' id='weight' name='weight' value={weight}
          onChange={this.onChange} required />
        </div>
      </div>
      <div className='htmlForm-row text-left'>
        <div>
          <label htmlFor='destination'>Destination</label>
          <textarea id='destination' name='destination' value={destination}
            onChange={this.onChange} required></textarea>
        </div>
      </div>
      <h5 className='text-center'>Addressed To</h5>
      <div className='column is-two htmlForm-row text-left'>
        <div>
          <label htmlFor='name'>Receiver</label>
          <input type='text' id='receiver' name='receiver' value={receiver}
            onChange={this.onChange} required />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='text' id='email' name='email' value={email}
            onChange={this.onChange} required />
        </div>
      </div>
      <div className='column is-two htmlForm-row text-left'>
        <div>
          <label htmlFor='phoneNumber'>PhoneNumber</label>
          <input type='text' id='phoneNumber' name='phoneNumber' value={phoneNumber}
            onChange={this.onChange} required />
        </div>
        <div className='mb-14'>
          <label htmlFor='PickupLocation'>Pickup Location</label>
          <input type='text' id='PickupLocation' name='pickupLocation'
            value={pickupLocation} onChange={this.onChange} required />
        </div>
      </div>
      <button type='submit' className='btn sm bg-bright-blue text-right white'>
        Create
      </button>
    </form>;
  }
}

NewParcelModalForm.propTypes = {
  createNewParcel: PropTypes.func,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { createNewParcel })(NewParcelModalForm);
