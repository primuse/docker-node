import React, { Component } from 'react';
import { LoginForm } from "../forms/loginForm.jsx";
import { Link } from 'react-router-dom';
import '../../css/modules.css';
import "../../css/style.css";
import "../../css/login.css";

export const Login = () => {
  return (
    <section id="login">
      <header>
        <ul>
          <li id="head-brand">
            <Link to="/">
              Send<span className="head-span">IT</span>
            </Link>
          </li>
        </ul>
        <ul className="ml-auto mt-25">
          <li>
            <Link to ="/signup">Signup</Link>
          </li>
        </ul>
      </header>
      <div className="banner">
        <div className="sendit-text mb-34">
          <h5>
            The <span className="head-span">Courier</span> service app you've been waiting for
          </h5>
          <p>SendIT makes reaching the world easier!</p>
        </div>
        <LoginForm />
      </div>
    </section>
  );
}
