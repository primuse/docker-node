import React from "react";
import { TopNav, Aside } from "./navs/navs.jsx";
import { ParcelTable, InfoBox, DeliveredParcelTable, InTransitParcelTable } from "./navs/table.jsx";
import { ProfileInfo } from "./navs/profile.jsx";
import "../css/modules.css";
import "../css/style.css";
import "../css/dashboard.css";


export const Dashboard = () => {
  return (
    <main>
      <Aside />
      <section className="grey" id="dash">
        <TopNav />
        <div id="main-content-page">
          <InfoBox />
          <ParcelTable />
        </div>
      </section>
    </main>
  );
};

export const DeliveredParcel = () => {
  return (
    <main>
      <Aside />
      <section className="grey" id="dash">
        <TopNav />
        <div id="main-content-page">
          <InfoBox />
          <DeliveredParcelTable />
        </div>
      </section>
    </main>
  );
};

export const InTransitParcel = () => {
  return (
    <main>
      <Aside />
      <section className="grey" id="dash">
        <TopNav />
        <div id="main-content-page">
          <InfoBox />
          <InTransitParcelTable />
        </div>
      </section>
    </main>
  );
};

export const Profile = () => {
  const profileStyle = {
    marginTop: '60px'
  }
  return (
    <main>
      <Aside />
      <section className="grey" id="dash">
        <TopNav />
        <div id="main-content-page" style={profileStyle}>
          <ProfileInfo />
        </div>
      </section>
    </main>
  );
};