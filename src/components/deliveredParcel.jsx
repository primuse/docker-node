import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import history from '../history';
import { InfoBox, DeliveredParcelTable } from './navs/table.jsx';
import { TopNav, Aside } from './navs/navs.jsx';
import '../css/modules.css';
import '../css/style.css';
import '../css/dashboard.css';


export const DeliveredParcel = () => (
  <main>
    <Aside />
    <section className='grey' id='dash'>
      <TopNav />
      <div id='main-content-page'>
        <InfoBox />
        <DeliveredParcelTable />
      </div>
    </section>
  </main>
);

