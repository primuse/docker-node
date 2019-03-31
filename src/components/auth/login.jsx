import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../forms/loginForm.jsx';
import SignupForm from '../forms/signUpForm.jsx';
import ResetForm from '../forms/resetForm.jsx';
import '../../css/modules.css';
import '../../css/style.css';
import '../../css/login.css';

export const Login = () => (
  <section id='login'>
    <header>
      <ul>
        <li id='head-brand'>
          <Link to='/'>
            Send<span className='head-span'>IT</span>
          </Link>
        </li>
      </ul>
      <ul className='ml-auto mt-25'>
        <li>
          <Link to='/signup'>Signup</Link>
        </li>
      </ul>
    </header>
    <div className='banner'>
      <div className='sendit-text mb-34'>
        <h5>
          The <span className='head-span'>Courier</span> service app you've
          been waiting for
        </h5>
        <p>SendIT makes reaching the world easier!</p>
      </div>
      <LoginForm />
    </div>
  </section>
);

export const Signup = () => (
  <section id='login'>
    <header>
      <ul>
        <li id='head-brand'>
          <Link to='/'>
            Send<span className='head-span'>IT</span>
          </Link>
        </li>
      </ul>
      <ul className='ml-auto mt-25'>
        <li>
          <Link to='/'>Login</Link>
        </li>
      </ul>
    </header>
    <div className='banner'>
      <div className='sendit-text'>
        <h5>
          The <span className='head-span'>Courier</span> service app you've been
          waiting for
        </h5>
        <p className='mb-34'>
          Register to experience our world class courier services
        </p>
      </div>
      <div id='form-box'>
        <div className='text-center'>
          <SignupForm />
        </div>
      </div>
    </div>
  </section>
);

export const Reset = () => (
  <section id='login'>
    <header>
      <ul>
        <li id='head-brand'>
          <Link to='/'>
            Send<span className='head-span'>IT</span>
          </Link>
        </li>
      </ul>
      <ul className='ml-auto'>
        <li>
          <Link to='/signup'>Signup</Link>
        </li>
      </ul>
    </header>
    <div className='banner bg-pd'>
      <div className='sendit-text mb-24'>
        <h5>
          The <span className='head-span'>Courier</span> service app you've been
          waiting for
        </h5>
      </div>
      <div id='form-box'>
        <ResetForm />
      </div>
    </div>
  </section>
);
