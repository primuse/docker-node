import React from 'react';
import { Link } from 'react-router-dom';
import {
  bars
} from '../../asset/imgs/ico';


export const TopNav = () => (
  <nav>
    <a href='#' className='toggler mr-1' id='toggle'>
      <img src={bars} />
    </a>
    <ul className='p-0'>
      <li>
        Dashboard
      </li>
    </ul>
    <ul className='p-0 ml-auto'>
      <li className='mr-1'>
        <Link to='/profile'>
          My Profile
        </Link>
      </li>
      <li>
        <Link to='/'>
          Logout
        </Link>
      </li>
    </ul>
  </nav>
);
