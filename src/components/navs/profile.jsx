import React, { Component } from 'react';

export class ProfileInfo extends Component {
  state = {
    firstName: 'Tiku',
    lastName: 'Okoye',
    email: 'tikuokoye@yahoo.com',
    id: 'SD01',
    created: 0,
    delivered: 0,
    inTransit: 0,
    canceled: 0,
    registered: '12 - 10 - 18'
  };

  render() {
    const {
      firstName, lastName, email, id,
      created, delivered, inTransit, canceled, registered
    } = this.state;
    return (
      <div id='user-cont' className='d-flex'>
        <div id='user-desc'>
          <img src={require('../../asset/imgs/ico/user-black.svg')} id='user-img' />
          <div className='text-center'>
            <h2 id='id'>{id}</h2>
            <span id='profile-name' className='d-block mb-14'>
              <h4 id='firstName' className='d-inline'>{firstName}</h4>
              <h4 id='lastName' className='d-inline'>{lastName}</h4>
            </span>
            <small id='email'>{email}</small>
            <h5 id='registered'>Registered On {registered}</h5>
          </div>
        </div>
        <div id='user-info' className='text-center'>
          <h1 className='mb-6'>My Parcels</h1>
          <div className='d-flex content-between mb-6'>
            <div>
              <small>Created</small>
              <h4 id='created'>{created}</h4>
            </div>
            <div>
              <small>Delivered</small>
              <h4 id='delivered' className='green'>{delivered}</h4>
            </div>
            <div>
              <small>In-transit</small>
              <h4 id='in-transit' className='blue'>{inTransit}</h4>
            </div>
            <div>
              <small>Cancelled</small>
              <h4 id='canceled' className='red'>{canceled}</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
