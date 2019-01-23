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
        <div class="bg-blue" id="menu">
          <div id="aside-profile">
            <a href="dashboard.html">
              <h3 class="m-0 pb-10">
                Send<span class="head-span">IT</span>
              </h3>
            </a>
            <small id="user-id" class="d-block pb-10 white-3">
              {id}
            </small>
            <small>
              <p class="m-0">Welcome {role && ( <br ADMIN /> )}</p>
              <p id="username">{name}</p>
            </small>
          </div>
          <ul class="mt-80">
            <li>
              <img src="asset/imgs/ico/home.svg" class="menu-ico" />
              <a href="dashboard.html">
                <span>Dashboard</span>
              </a>
            </li>
            {role == false && <li>
                <img src="asset/imgs/ico/box-open.svg" class="menu-ico" />
                <a href="#" data-modal data-target="#parcelmodal">
                  <span>New Parcel</span>
                </a>
              </li>}
            <li>
              <img src="asset/imgs/ico/archive.svg" class="menu-ico" />
              <a href="delivered_parcel.html">
                <span>Delivered Parcels</span>
              </a>
            </li>
            <li>
              <img src="asset/imgs/ico/box.svg" class="menu-ico" />
              <a href="intransit_parcel.html">
                <span>In-transit Parcels</span>
              </a>
            </li>
            {role && <li>
                <img src="asset/imgs/ico/user.svg" class="menu-ico" />
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
      <a href="#" class="toggler mr-1" id="toggle"><img src="asset/imgs/ico/bars.svg" /></a>
      <ul class="p-0">
        <li>
          Dashboard
        </li>
      </ul>
      <ul class="p-0 ml-auto">
        <li class="mr-1">
          <a href="profile.html">My Profile</a>
        </li>
        <li>
          <a href="index.html" id="logout">Logout</a>
        </li>
      </ul>
    </nav>
  );
}
