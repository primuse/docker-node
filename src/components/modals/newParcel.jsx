import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export const NewParcelModalForm = () => <form id='createParcel' className='text-right'>
    <div className='column is-two htmlForm-row text-left'>
      <div>
        <label htmlhtmlFor='parcelType'>Parcel Name</label>
        <input type='text' id='parcelName' required />
      </div>
      <div>
        <label htmlFor='weight'>Weight</label>
        <input type='number' id='weight' required />
      </div>
    </div>
    <div className='htmlForm-row text-left'>
      <div>
        <label htmlFor='destination'>Destination</label>
        <textarea id='destination' required></textarea>
      </div>
    </div>
    <h5 className='text-center'>Addressed To</h5>
    <div className='column is-two htmlForm-row text-left'>
      <div>
        <label htmlFor='name'>Receiver</label>
        <input type='text' id='receiver' required />
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input type='text' id='email' required />
      </div>
    </div>
    <div className='column is-two htmlForm-row text-left'>
      <div>
        <label htmlFor='phoneNumber'>PhoneNumber</label>
        <input type='text' id='phoneNumber' required />
      </div>
      <div>
        <label htmlFor='PickupLocation'>Pickup Location</label>
        <input type='text' id='PickupLocation' required />
      </div>
    </div>
    <button type='submit' className='btn sm bg-bright-blue text-right white'>
      Create
    </button>
  </form>;


export default NewParcelModalForm;
