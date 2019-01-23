import React, { Component } from "react";
import { Link } from "react-router-dom";

export class ParcelTable extends Component {
  state = {
    name: "Tiku Okoye",
    id: "SD01",
    price: false,
    destination: "",
    receiver: "",
    weight: "",
    sentOn: "",
    status: "",
    tableType: "All"
  };

  render() {
    const { name, id, price, destination, receiver, weight, sentOn, status, tableType } = this.state;
    return (
      <div class="dash-cont">
        <div id="table-info">
          <a href="#">{tableType}</a>
        </div>
        <div id="table-cont">
          <table>
            <tr id="table-head">
              <th>ID</th>
              <th>Type</th>
              <th>Weight</th>
              <th>Price</th>
              <th>Destination</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>101</td>
              <td>Document</td>
              <td>10kg</td>
              <td>#1000</td>
              <td>No 14 Asobruewu street, Rumuigbo</td>
              <td>31/10/2018</td>
              <td>Delivered</td>
              <td><a href="details.html" class="btn xsm bg-bright-blue white">View</a></td>
            </tr>
            <tr>
              <td>101</td>
              <td>Document</td>
              <td>10kg</td>
              <td>#1000</td>
              <td>No 14 Asobruewu street, Rumuigbo</td>
              <td>31/10/2018</td>
              <td>In-transit</td>
              <td><a href="details.html" class="btn xsm bg-bright-blue white">View</a></td>
            </tr>
            <tr>
              <td>101</td>
              <td>Document</td>
              <td>10kg</td>
              <td>#1000</td>
              <td>No 14 Asobruewu street, Rumuigbo</td>
              <td>31/10/2018</td>
              <td>Delivered</td>
              <td><a href="details.html" class="btn xsm bg-bright-blue white">View</a></td>
            </tr>
            <tr>
              <td>101</td>
              <td>Document</td>
              <td>10kg</td>
              <td>#1000</td>
              <td>No 14 Asobruewu street, Rumuigbo</td>
              <td>31/10/2018</td>
              <td>Delivered</td>
              <td><a href="details.html" class="btn xsm bg-bright-blue white">View</a></td>
            </tr>
            <tr>
              <td>101</td>
              <td>Document</td>
              <td>10kg</td>
              <td>#1000</td>
              <td>No 14 Asobruewu street, Rumuigbo</td>
              <td>31/10/2018</td>
              <td>Delivered</td>
              <td><a href="details.html" class="btn xsm bg-bright-blue white">View</a></td>
            </tr>
            <tr>
              <td>101</td>
              <td>Document</td>
              <td>10kg</td>
              <td>#1000</td>
              <td>No 14 Asobruewu street, Rumuigbo</td>
              <td>31/10/2018</td>
              <td>Canceled</td>
              <td><a href="details.html" class="btn xsm bg-bright-blue white">View</a></td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export class InfoBox extends Component {
  state = {
    created: 0,
    inTransit: 0,
    delivered: 0,
  };

  render() {
    const { created, inTransit, delivered } = this.state;
    return (
      <div id="info-cont" class="mb-34">
        <div class="info-box">
          <small>Created</small>
          <h4 id="created" class="m-0">{created}</h4>
        </div>
        <div class="info-box">
          <small>In Transit</small>
          <h4 id="in-transit" class="m-0 blue">{inTransit}</h4>
        </div>
        <div class="info-box">
          <small>Delivered</small>
          <h4 id="delivered" class="m-0 green">{delivered}</h4>
        </div>
      </div>
    );
  }
}

