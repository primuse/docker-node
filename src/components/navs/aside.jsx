import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../modal.jsx';

const NewParcelModalForm = () => <form id='createParcel' className='text-right'>
  <div className='column is-two htmlForm-row text-left'>
    <div>
      <label htmlFor='parcelType'>Parcel Name</label>
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


class Aside extends Component {
  state = {
    modalDisplay: false,
  };

  showModal = () => {
    this.setState({ modalDisplay: true });
  }

  render() {
    const { user } = this.props.auth;
    return <aside>
      <div className='bg-blue' id='menu'>
        <div id='aside-profile'>
          <Link to='/dashboard'>
            <h3 className='m-0 pb-10'>
              Send<span className='head-span'>IT</span>
            </h3>
          </Link>
          <small id='user-id' className='d-block pb-10 white-3'>
            SD0{user.id}
          </small>
          <small>
            <p className='m-0'>Welcome {user.isadmin && <small>ADMIN</small>}</p>
            <p id='username'>{user.firstname} {user.lastname}</p>
          </small>
        </div>
        <ul className='mt-80'>
          <li>
            <img src={require('../../asset/imgs/ico/home.svg')} className='menu-ico' />
            <Link to='/dashboard'>
              <span>Dashboard</span>
            </Link>
          </li>
          {user.isadmin === false && <li>
            <img src={require('../../asset/imgs/ico/box-open.svg')}
              className='menu-ico' />
            <a href='#' data-modal data-target='#parcelmodal' onClick={this.showModal}>
              <span>New Parcel</span>
            </a>
          </li>}
          <li>
            <img src={require('../../asset/imgs/ico/archive.svg')}
              className='menu-ico' />
            <Link to='/delivered_parcels'>
              <span>Delivered Parcels</span>
            </Link>
          </li>
          <li>
            <img src={require('../../asset/imgs/ico/box.svg')}
              className='menu-ico' />
            <Link to='/inTransit_parcels'>
              <span>In-transit Parcels</span>
            </Link>
          </li>
          {user.isadmin && <li>
            <img src={require('../../asset/imgs/ico/user.svg')}
              className='menu-ico' />
            <Link to='/all_users'>
              <span>All Users</span>
            </Link>
          </li>}
        </ul>
      </div>
      <Modal modalTitle='New parcel' ModalForm={NewParcelModalForm}
       modalDisplay={this.state.modalDisplay}
      />
    </aside>;
  }
}

Aside.propTypes = {
  user: PropTypes.object,
  auth: PropTypes.object
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Aside);
