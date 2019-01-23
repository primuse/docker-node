import React from "react";
import { } from "../forms/loginForm.jsx";
import { TopNav, Aside } from "../navs/navs.jsx";
import { ParcelTable, InfoBox } from "../navs/table.jsx";
import { Link } from "react-router-dom";
import "../../css/modules.css";
import "../../css/style.css";
import "../../css/dashboard.css";


export const Dashboard = () => {
  return (
    <main>
      <Aside />
      <section class="grey" id="dash">
        <TopNav />
        <div id="main-content-page">
          <InfoBox />
          <ParcelTable />
        </div>
      </section>
    </main>
  );
};