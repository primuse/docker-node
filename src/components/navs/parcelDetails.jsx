import React, { Component } from "react";
import MapContainer from "../map/googleMap.jsx";

export class ParcelDetails extends Component {
  state = {
    name: "Rice",
    destination: "Owerri",
    pickupLocation: "Surulere, Lagos",
    currentLocation: "Owerri",
    parcelReciever: "Mary Rose",
    phoneNumber: "08044577893",
    price: "3,000",
    sentOn: "21/01/2019",
    deliveredOn: "Not yet delivered",
    status: "Created",
    id: "P01"
  };

  render() {
    const { 
      name, destination, pickupLocation, currentLocation, parcelReciever, 
      phoneNumber, price, sentOn, deliveredOn, status, id
    } = this.state;
    return (
      <div id="parcel" className="dash-cont d-flex mt-40">
        <div className="map">
          <MapContainer />
        </div>
        <div className="parcel-details p-10">
          <h4 id="parcel-Id" className="parcel-title text-center m-0 mb-24">{id}</h4>
          <div id="details" className="pb-10">
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
              <p>{name}</p>
              <p>{destination}</p>
              <p>{pickupLocation}</p>
              <p>{currentLocation}</p>
              <p>{parcelReciever}</p>
              <p>{phoneNumber}</p>
              <p>{price}</p>
              <p>{sentOn}</p>
              <p>{deliveredOn}</p>
              <p>{status}</p>
            </div>
          </div>
          <div id="details_btns" className="parcel-footer-btns">
            <a href="#" data-modal data-target="#destination-modal" className="btn sm bg-blue mr-1 white">Change Destination</a>
            <a href="#" data-modal data-target="#cancel-modal" className="btn sm is-outlined-blue">Cancel Parcel</a>
          </div>
        </div>
      </div>
    );
  }
}