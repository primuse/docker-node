import React, { Component } from "react";
import { Link } from "react-router-dom";

export class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password } = this.state;
    return <form id="login-form" className="text-center">
        <div className="form-row">
          <input type="email" id="email" name="email" value={email} placeholder="Email" required onChange={this.onChange} />
        </div>
        <div className="form-row">
          <input type="password" id="pwd" name="password" value={password} placeholder="Password" required onChange={this.onChange} />
        </div>
        <div type="submit" className="btn lg is-outlined mb-14">
          <Link to="/dashboard">Login</Link>
        </div>
        <div>
          <Link to="/reset">Forgot Password?</Link>
        </div>
      </form>;
  }
}

export class SignupForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { firstName, lastName, email, password } = this.state;
    return (
      <form id="signupForm">
        <div class="column is-two form-row">
          <input
            type="text"
            name="firstName"
            value={firstName}
            id="firstName"
            placeholder="First name"
            required
            onChange={this.onChange}
          />
          <input
            type="text"
            name="lastName"
            value={lastName}
            id="lastName"
            placeholder="Last name"
            required
            onChange={this.onChange}
          />
        </div>
        <div class="column is-two form-row">
          <input
            type="email"
            name="email"
            value={email}
            id="email"
            placeholder="Email"
            required
            onChange={this.onChange}
          />
          <input
            type="password"
            name="password"
            value={password}
            id="password"
            placeholder="Password"
            required
            onChange={this.onChange}
          />
        </div>
        <button id="signup" class="btn lg is-outlined">
          Signup
        </button>
      </form>
    );
  }
}

export class ResetForm extends Component {
  state = {
    email: ""
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email } = this.state;
    return (
      <form id="resetForm" class="text-center">
        <div class="mb-14">
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
        <div class="form-row">
          <small>A reset link would be sent to you</small>
        </div>
        <div>
          <button id="reset" class="btn sm is-outlined">
            Reset Password
          </button>
        </div>
      </form>
    );
  }
}
