import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const tableHeading = (<tr id='table-head'>
  <th>ID</th>
  <th>Name</th>
  <th>Weight</th>
  <th>Price</th>
  <th>Destination</th>
  <th>Receiver</th>
  <th>Sent On</th>
  <th>Status</th>
</tr>);

const mapParcels = (parcels) => {
  const parcelItems = parcels.map((parcel, index) => (
    <tr key={index}>
      <td>{parcel.id}</td>
      <td>{parcel.parcelname}</td>
      <td>{parcel.weight}</td>
      <td>{parcel.price}</td>
      <td>{parcel.destination}</td>
      <td>{parcel.receiver}</td>
      <td>{parcel.senton}</td>
      <td>{parcel.status}</td>
      <td>
        <Link to='/details' className='btn xsm bg-bright-blue white'>
          View
          </Link>
      </td>
    </tr>
  ));
  return parcelItems;
};

export const ParcelTable = ({ parcels }) => <div className='dash-cont'>
    <div id='table-info'>
     <a href='#'>All</a>
    </div>
    <div id='table-cont'>
      <table>
        <tbody>
        {tableHeading}
        {mapParcels(parcels)}
        </tbody>
      </table>
    </div>
  </div>;

ParcelTable.propTypes = {
  parcels: PropTypes.array,
};

export const DeliveredParcelTable = ({ parcels }) => <div className='dash-cont'>
    <div id='table-info'>
      <a href='#'>Delivered</a>
    </div>
    <div id='table-cont'>
      <table>
        <tbody>
          {tableHeading}
          {mapParcels(parcels)}
        </tbody>
      </table>
    </div>
  </div>;

DeliveredParcelTable.propTypes = {
  parcels: PropTypes.array,
};

export const InTransitParcelTable = ({ parcels }) => <div className='dash-cont'>
    <div id='table-info'>
      <a href='#'>In-Transit</a>
    </div>
    <div id='table-cont'>
      <table>
        <tbody>
          {tableHeading}
          {mapParcels(parcels)}
        </tbody>
      </table>
    </div>
  </div>;

InTransitParcelTable.propTypes = {
  parcels: PropTypes.array,
};

export class InfoBox extends Component {
  state = {
    created: 10,
    inTransit: 5,
    delivered: 5,
  };

  render() {
    const { created, inTransit, delivered } = this.state;
    return (
      <div id='info-cont' className='mb-34'>
        <div className='info-box'>
          <small>Created</small>
          <h4 id='created' className='m-0'>{created}</h4>
        </div>
        <div className='info-box'>
          <small>In Transit</small>
          <h4 id='in-transit' className='m-0 blue'>{inTransit}</h4>
        </div>
        <div className='info-box'>
          <small>Delivered</small>
          <h4 id='delivered' className='m-0 green'>{delivered}</h4>
        </div>
      </div>
    );
  }
}
