import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DestinationModalForm from '../forms/changeDestinationForm.jsx';
import Modal from '../modal.jsx';
import { getUserParcel } from '../../actions/parcelActions';

class ParcelDetails extends Component {
  state = {
    modalDisplay: false,
  };

  componentDidMount() {
    const { parcelId } = this.props;
    console.log('parcel Id:', parcelId);
    this.props.getUserParcel(parcelId);
  }

  showModal = () => {
    this.setState({ modalDisplay: true });
  }

  closeModal = () => {
    this.setState({ modalDisplay: false });
  }

  render() {
    const parcel = this.props.parcel.userParcel;
    console.log('parcel in component:', parcel);
    const { user } = this.props;
    const { modalDisplay } = this.state;

    return <div id='parcel' className='dash-cont d-flex mt-40'>
      <div id='map'></div>
      <div className='parcel-details p-10'>
        <h4 id='parcel-Id' className='parcel-title text-center m-0 mb-24'>
          PO{'parcel.id'}</h4>
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
            <p>{'parcel.parcelname'}</p>
            <p>{'parcel.destination'}</p>
            <p>{'parcel.pickuplocation'}</p>
            <p>{'parcel.currentlocation'}</p>
            <p>{'parcel.receiver'}</p>
            <p>{'parcel.phonenumber'}</p>
            <p>N{'parcel.price'}</p>
            <p>{'parcel.senton'}</p>
            <p>{'parcel.deliveredon ? parcel.deliveredon : Not yet delivered'}</p>
            <p>{'parcel.status'}</p>
          </div>
        </div>
        <div id='details_btns' className='parcel-footer-btns'>
          {user.isadmin
            ? <a href='#' data-modal data-target='#location-modal'
              className='btn sm bg-blue mr-3 white'>Change Location</a>
            : <a href='#' data-modal data-target='#destination-modal'
              className='btn sm bg-blue mr-1 white'
              onClick={this.showModal}>Change Destination</a>
          }
          {user.isadmin
            ? <a href='#' data-modal data-target='#update-modal'
              className='btn sm is-outlined-blue'>Update Status</a>
            : <a href='#' data-modal data-target='#cancel-modal'
              className='btn sm is-outlined-blue'>Cancel Parcel</a>
          }
        </div>
      </div>
      {modalDisplay
        && <Modal modalTitle='Change Destination' ModalForm={DestinationModalForm}
        closeModal={this.closeModal} />
      }
    </div>;
  }
}

ParcelDetails.propTypes = {
  parcel: PropTypes.object,
  user: PropTypes.object,
  getUserParcel: PropTypes.func,
  parcelId: PropTypes.number
};

const mapStateToProps = state => ({
  parcel: state.parcel,
});

export default connect(mapStateToProps, { getUserParcel })(ParcelDetails);
