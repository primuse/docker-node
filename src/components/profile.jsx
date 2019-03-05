import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import history from '../history';
import { ProfileInfo } from './navs/profile.jsx';
import { TopNav, Aside } from './navs/navs.jsx';
import '../css/modules.css';
import '../css/style.css';
import '../css/dashboard.css';

export const Profile = () => {
  const profileStyle = {
    marginTop: '60px'
  };
  return (
    <main>
      <Aside />
      <section className='grey' id='dash'>
        <TopNav />
        <div id='main-content-page' style={profileStyle}>
          <ProfileInfo />
        </div>
      </section>
    </main>
  );
};
