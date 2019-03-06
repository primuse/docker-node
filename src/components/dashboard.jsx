/* eslint-disable no-undef */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import history from '../history';
import { TopNav, Aside } from './navs/navs.jsx';
import {
  ParcelTable
} from './navs/table.jsx';
import InfoBox from './infoBox.jsx';
import getUserParcels from '../actions/parcelActions';
import '../css/modules.css';
import '../css/style.css';
import '../css/dashboard.css';

class Dashboard extends Component {
  componentDidMount() {
    if (!localStorage.token) {
      localStorage.clear();
      history.push('/');
      return;
    }
    const userId = this.props.auth.user.id;
    this.props.getUserParcels(userId);
  }

  render() {
    const { parcels } = this.props.parcel;
    return <main>
      <Aside />
      <section className='grey' id='dash'>
        <TopNav />
        <div id='main-content-page'>
          <InfoBox />
          <ParcelTable parcels={parcels} />
        </div>
      </section>
    </main>;
  }
}

Dashboard.propTypes = {
  getUserParcels: PropTypes.func,
  parcels: PropTypes.array,
  auth: PropTypes.object,
  parcel: PropTypes.object,
};


const mapStateToProps = state => ({
  auth: state.auth,
  parcel: state.parcel,
});

export default connect(mapStateToProps, { getUserParcels })(Dashboard);
