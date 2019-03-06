import React from 'react';
import PropTypes from 'prop-types';

export const ParcelDetails = (props) => {
  const parcel = props.parcel[0];
  const { user } = props;

  return <div id='parcel' className='dash-cont d-flex mt-40'>
    <div id='map'></div>
    <div className='parcel-details p-10'>
      <h4 id='parcel-Id' className='parcel-title text-center m-0 mb-24'>PO{parcel.id}</h4>
      <div id='details' className='pb-10'>
        <div>
          <h6>Name:</h6>
          <h6>Destination:</h6>
          <h6>Pickup Location:</h6>
          <h6>Current Location:</h6>
          <h6>Addressed to:</h6>
          <h6>Phone Number</h6>
          <h6>Price:</h6>
          <h6>Sent On:</h6>
          <h6>Delivered On:</h6>
          <h6>Status:</h6>
        </div>
        <div>
          <p>{parcel.parcelname}</p>
          <p>{parcel.destination}</p>
          <p>{parcel.pickuplocation}</p>
          <p>{parcel.currentlocation}</p>
          <p>{parcel.receiver}</p>
          <p>{parcel.phonenumber}</p>
          <p>N{parcel.price}</p>
          <p>{parcel.senton}</p>
          <p>{parcel.deliveredon ? parcel.deliveredon : 'Not yet delivered'}</p>
          <p>{parcel.status}</p>
        </div>
      </div>
      <div id='details_btns' className='parcel-footer-btns'>
        {user.isadmin
          ? <a href='#' data-modal data-target='#location-modal'
            className='btn sm bg-blue mr-3 white'>Change Location</a>
          : <a href='#' data-modal data-target='#destination-modal'
          className='btn sm bg-blue mr-1 white'>Change Destination</a>
        }
        {user.isadmin
          ? <a href='#' data-modal data-target='#update-modal'
            className='btn sm is-outlined-blue'>Update Status</a>
          : <a href='#' data-modal data-target='#cancel-modal'
          className='btn sm is-outlined-blue'>Cancel Parcel</a>
        }
      </div>
    </div>
  </div>;
};

ParcelDetails.propTypes = {
  parcel: PropTypes.array,
  user: PropTypes.object,
};
