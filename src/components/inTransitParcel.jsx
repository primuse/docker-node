import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import history from '../history';
import { InfoBox, InTransitParcelTable } from './navs/table.jsx';
import { ProfileInfo } from './navs/profile.jsx';
import { TopNav, Aside } from './navs/navs.jsx';
import '../css/modules.css';
import '../css/style.css';
import '../css/dashboard.css';


export const InTransitParcel = () => (
  <main>
    <Aside />
    <section className='grey' id='dash'>
      <TopNav />
      <div id='main-content-page'>
        <InfoBox />
        <InTransitParcelTable />
      </div>
    </section>
  </main>
);
