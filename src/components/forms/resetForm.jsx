import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { resetPassword } from '../../actions/resetPasswordActions';

export class ResetForm extends Component {
  state = {
    email: ''
  };

  componentWillUnmount() {
    // Clear State
    this.setState({
      email: ''
    });
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  resetPassword = (event) => {
    event.preventDefault();
    const data = this.state;

    this.props.resetPassword(data);
  }

  render() {
    const { email } = this.state;
    return (
      <form id="resetForm" className="text-center" onSubmit={this.resetPassword}>
        <div className="mb-14">
          <input
            id="email"
            name="email"
            value={email}
            type="email"
            placeholder="Email"
            required
            onChange={this.onChange}
          />
        </div>
        <div className="form-row">
          <small>A reset link would be sent to you</small>
        </div>
        <div>
          <button type='submit' className="btn sm is-outlined">
            Reset Password
          </button>
        </div>
      </form>
    );
  }
}

ResetForm.propTypes = {
  resetPassword: PropTypes.func,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { resetPassword })(ResetForm);
