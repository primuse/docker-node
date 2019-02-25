import React, { Component } from "react";
import { Link } from "react-router-dom";

export class ParcelTable extends Component {
  state = {
    name: "Tiku Okoye",
    id: "P01",
    price: "1,000",
    destination: "No 14 Asobruewu street",
    receiver: "Marcus Wane",
    weight: "30kg",
    sentOn: "21/01/2019",
    status: "Created",
    tableType: "All"
  };

  render() {
    const { name, id, price, destination, receiver, weight, sentOn, status, tableType } = this.state;
    return <div className="dash-cont">
        <div id="table-info">
          <a href="#">{tableType}</a>
        </div>
        <div id="table-cont">
          <table>
            <tbody>
              <tr id="table-head">
                <th>ID</th>
                <th>Name</th>
                <th>Weight</th>
                <th>Price</th>
                <th>Destination</th>
                <th>Receiver</th>
                <th>Sent On</th>
                <th>Status</th>
              </tr>
              <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{weight}</td>
                <td>{price}</td>
                <td>{destination}</td>
                <td>{receiver}</td>
                <td>{sentOn}</td>
                <td>Delivered</td>
                <td>
                <Link to="/details">
                  <a className="btn xsm bg-bright-blue white">
                    View
                  </a>
                </Link>
                </td>
              </tr>
              <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{weight}</td>
                <td>{price}</td>
                <td>{destination}</td>
                <td>{receiver}</td>
                <td>{sentOn}</td>
                <td>In-transit</td>
                <td>
                <Link to="/details">
                  <a className="btn xsm bg-bright-blue white">
                    View
                  </a>
                </Link>
                </td>
              </tr>
              <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{weight}</td>
                <td>{price}</td>
                <td>{destination}</td>
                <td>{receiver}</td>
                <td>{sentOn}</td>
                <td>Delivered</td>
                <td>
                <Link to="/details">
                  <a className="btn xsm bg-bright-blue white">
                    View
                  </a>
                </Link>
                </td>
              </tr>
              <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{weight}</td>
                <td>{price}</td>
                <td>{destination}</td>
                <td>{receiver}</td>
                <td>{sentOn}</td>
                <td>Delivered</td>
                <td>
                <Link to="/details">
                  <a className="btn xsm bg-bright-blue white">
                    View
                  </a>
                </Link>
                </td>
              </tr>
              <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{weight}</td>
                <td>{price}</td>
                <td>{destination}</td>
                <td>{receiver}</td>
                <td>{sentOn}</td>
                <td>Delivered</td>
                <td>
                <Link to="/details">
                  <a className="btn xsm bg-bright-blue white">
                    View
                  </a>
                </Link>
                </td>
              </tr>
              <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{weight}</td>
                <td>{price}</td>
                <td>{destination}</td>
                <td>{receiver}</td>
                <td>{sentOn}</td>
                <td>Canceled</td>
                <td>
                <Link to="/details">
                  <a className="btn xsm bg-bright-blue white">
                    View
                  </a>
                </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>;
  }
}

export class DeliveredParcelTable extends Component {
  state = {
    name: "Tiku Okoye",
    id: "P01",
    price: "1,000",
    destination: "No 14 Asobruewu street",
    receiver: "Marcus Wane",
    weight: "30kg",
    sentOn: "21/01/2019",
    status: "Delivered",
    tableType: "Delivered"
  };

  render() {
    const { name, id, price, destination, receiver, weight, sentOn, status, tableType } = this.state;
    return <div className="dash-cont">
      <div id="table-info">
        <a href="#">{tableType}</a>
      </div>
      <div id="table-cont">
        <table>
          <tbody>
            <tr id="table-head">
              <th>ID</th>
              <th>Name</th>
              <th>Weight</th>
              <th>Price</th>
              <th>Destination</th>
              <th>Receiver</th>
              <th>Sent On</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{weight}</td>
              <td>{price}</td>
              <td>{destination}</td>
              <td>{receiver}</td>
              <td>{sentOn}</td>
              <td>{status}</td>
              <td>
                <Link to="/details">
                  <a className="btn xsm bg-bright-blue white">
                    View
                  </a>
                </Link>
              </td>
            </tr>
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{weight}</td>
              <td>{price}</td>
              <td>{destination}</td>
              <td>{receiver}</td>
              <td>{sentOn}</td>
              <td>{status}</td>
              <td>
                <Link to="/details">
                  <a className="btn xsm bg-bright-blue white">
                    View
                  </a>
                </Link>
              </td>
            </tr>
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{weight}</td>
              <td>{price}</td>
              <td>{destination}</td>
              <td>{receiver}</td>
              <td>{sentOn}</td>
              <td>{status}</td>
              <td>
                <Link to="/details">
                  <a className="btn xsm bg-bright-blue white">
                    View
                  </a>
                </Link>
              </td>
            </tr>
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{weight}</td>
              <td>{price}</td>
              <td>{destination}</td>
              <td>{receiver}</td>
              <td>{sentOn}</td>
              <td>{status}</td>
              <td>
                <Link to="/details">
                  <a className="btn xsm bg-bright-blue white">
                    View
                  </a>
                </Link>
              </td>
            </tr>
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{weight}</td>
              <td>{price}</td>
              <td>{destination}</td>
              <td>{receiver}</td>
              <td>{sentOn}</td>
              <td>{status}</td>
              <td>
                <Link to="/details">
                  <a className="btn xsm bg-bright-blue white">
                    View
                  </a>
                </Link>
              </td>
            </tr>
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{weight}</td>
              <td>{price}</td>
              <td>{destination}</td>
              <td>{receiver}</td>
              <td>{sentOn}</td>
              <td>{status}</td>
              <td>
                <Link to="/details">
                  <a className="btn xsm bg-bright-blue white">
                    View
                  </a>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>;
  }
}

export class InTransitParcelTable extends Component {
  state = {
    name: "Tiku Okoye",
    id: "P01",
    price: "1,000",
    destination: "No 14 Asobruewu street",
    receiver: "Marcus Wane",
    weight: "30kg",
    sentOn: "21/01/2019",
    status: "In-Transit",
    tableType: "In-Transit"
  };

  render() {
    const { name, id, price, destination, receiver, weight, sentOn, status, tableType } = this.state;
    return <div className="dash-cont">
      <div id="table-info">
        <a href="#">{tableType}</a>
      </div>
      <div id="table-cont">
        <table>
          <tbody>
            <tr id="table-head">
              <th>ID</th>
              <th>Name</th>
              <th>Weight</th>
              <th>Price</th>
              <th>Destination</th>
              <th>Receiver</th>
              <th>Sent On</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{weight}</td>
              <td>{price}</td>
              <td>{destination}</td>
              <td>{receiver}</td>
              <td>{sentOn}</td>
              <td>{status}</td>
              <td>
                <Link to="/details">
                  <a className="btn xsm bg-bright-blue white">
                    View
                  </a>
                </Link>
              </td>
            </tr>
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{weight}</td>
              <td>{price}</td>
              <td>{destination}</td>
              <td>{receiver}</td>
              <td>{sentOn}</td>
              <td>{status}</td>
              <td>
                <Link to="/details">
                  <a className="btn xsm bg-bright-blue white">
                    View
                  </a>
                </Link>
              </td>
            </tr>
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{weight}</td>
              <td>{price}</td>
              <td>{destination}</td>
              <td>{receiver}</td>
              <td>{sentOn}</td>
              <td>{status}</td>
              <td>
                <Link to="/details">
                  <a className="btn xsm bg-bright-blue white">
                    View
                  </a>
                </Link>
              </td>
            </tr>
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{weight}</td>
              <td>{price}</td>
              <td>{destination}</td>
              <td>{receiver}</td>
              <td>{sentOn}</td>
              <td>{status}</td>
              <td>
                <Link to="/details">
                  <a className="btn xsm bg-bright-blue white">
                    View
                  </a>
                </Link>
              </td>
            </tr>
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{weight}</td>
              <td>{price}</td>
              <td>{destination}</td>
              <td>{receiver}</td>
              <td>{sentOn}</td>
              <td>{status}</td>
              <td>
                <Link to="/details">
                  <a className="btn xsm bg-bright-blue white">
                    View
                  </a>
                </Link>
              </td>
            </tr>
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{weight}</td>
              <td>{price}</td>
              <td>{destination}</td>
              <td>{receiver}</td>
              <td>{sentOn}</td>
              <td>{status}</td>
              <td>
                <Link to="/details">
                  <a className="btn xsm bg-bright-blue white">
                    View
                  </a>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>;
  }
}

export class InfoBox extends Component {
  state = {
    created: 10,
    inTransit: 5,
    delivered: 5,
  };

  render() {
    const { created, inTransit, delivered } = this.state;
    return (
      <div id="info-cont" className="mb-34">
        <div className="info-box">
          <small>Created</small>
          <h4 id="created" className="m-0">{created}</h4>
        </div>
        <div className="info-box">
          <small>In Transit</small>
          <h4 id="in-transit" className="m-0 blue">{inTransit}</h4>
        </div>
        <div className="info-box">
          <small>Delivered</small>
          <h4 id="delivered" className="m-0 green">{delivered}</h4>
        </div>
      </div>
    );
  }
}

