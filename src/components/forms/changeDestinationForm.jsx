import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createNewParcel } from '../../actions/parcelActions';

class DestinationModalForm extends Component {
  state = {
    destination: '',
  }

  componentWillUnmount() {
    // Clear State
    this.setState({
      destination: '',
    });
  }

  save = (event) => {
    event.preventDefault();
    const data = this.state;

    this.props.createNewParcel(data);
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { destination } = this.state;

    return <form id='changeDestination' className='text-right' onSubmit={this.save}>
      <div className='form-row'>
        <input type='text' id='destination' name='destination'
        onChange={this.onChange} value={destination} required />
      </div>
      <button type='submit' className='btn xsm is-outlined white'>Save</button>
    </form>;
  }
}

DestinationModalForm.propTypes = {
  createNewParcel: PropTypes.func,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { createNewParcel })(DestinationModalForm);
