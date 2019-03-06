import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Aside = ({ user }) => <aside>
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
          <a href='#' data-modal data-target='#parcelmodal'>
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
  </aside>;

Aside.propTypes = {
  user: PropTypes.object,
};
