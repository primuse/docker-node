import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import history from '../history';
import { InfoBox, DeliveredParcelTable } from './navs/table.jsx';
import getUserParcels from '../actions/parcelActions';
import { TopNav, Aside } from './navs/navs.jsx';
import '../css/modules.css';
import '../css/style.css';
import '../css/dashboard.css';


class DeliveredParcel extends Component {
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
    const { deliveredParcels } = this.props.parcel;
    return <main>
      <Aside />
      <section className='grey' id='dash'>
        <TopNav />
        <div id='main-content-page'>
          <InfoBox />
          <DeliveredParcelTable parcels={deliveredParcels} />
        </div>
      </section>
    </main>;
  }
}

DeliveredParcel.propTypes = {
  getUserParcels: PropTypes.func,
  deliveredParcels: PropTypes.array,
  parcel: PropTypes.object,
  auth: PropTypes.object,
};

const mapStateToProps = state => ({
  auth: state.auth,
  parcel: state.parcel,
});

export default connect(mapStateToProps, { getUserParcels })(DeliveredParcel);
