import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Aside extends Component {
  state = {
    name: "Tiku Okoye",
    id: "SD01",
    role: false
  };

  render() {
    const { name, id, role } = this.state;
    return <aside>
        <div className="bg-blue" id="menu">
          <div id="aside-profile">
            <Link to="/dashboard">
              <a>
                <h3 className="m-0 pb-10">
                  Send<span className="head-span">IT</span>
                </h3>
              </a>
            </Link>
            <small id="user-id" className="d-block pb-10 white-3">
              {id}
            </small>
            <small>
              <p className="m-0">Welcome {role && <small>ADMIN</small>}</p>
              <p id="username">{name}</p>
            </small>
          </div>
          <ul className="mt-80">
            <li>
              <img src={require("../../asset/imgs/ico/home.svg")} className="menu-ico" />
              <Link to="/dashboard">
                <a>
                  <span>Dashboard</span>
                </a>
              </Link>
            </li>
            {role == false && <li>
                <img src={require("../../asset/imgs/ico/box-open.svg")} className="menu-ico" />
                <a href="#" data-modal data-target="#parcelmodal">
                  <span>New Parcel</span>
                </a>
              </li>}
            <li>
              <img src={require("../../asset/imgs/ico/archive.svg")} className="menu-ico" />
              <Link to="/delivered-parcels">
                <a href="delivered_parcel.html">
                  <span>Delivered Parcels</span>
                </a>
              </Link>
            </li>
            <li>
              <img src={require("../../asset/imgs/ico/box.svg")} className="menu-ico" />
              <Link to="/inTransit-parcels">
                <a href="intransit_parcel.html">
                  <span>In-transit Parcels</span>
                </a>
              </Link>
            </li>
            {role && <li>
                <img src={require("../../asset/imgs/ico/user.svg")} className="menu-ico" />
                <a href="admin_all_users.html">
                  <span>All Users</span>
                </a>
              </li>}
          </ul>
        </div>
      </aside>;
  }
}

export const TopNav = () => {
  return (
    <nav>
      <a href="#" className="toggler mr-1" id="toggle">
        <img src={require("../../asset/imgs/ico/bars.svg")} />
      </a>
      <ul className="p-0">
        <li>
          Dashboard
        </li>
      </ul>
      <ul className="p-0 ml-auto">
        <li className="mr-1">
          <Link to="/profile">
            <a href="profile.html">My Profile</a>
          </Link>
        </li>
        <li>
          <Link to="/">
            <a href="index.html" id="logout">Logout</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
