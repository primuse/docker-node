import React from 'react';
import { TopNav, } from './navs/topNav.jsx';
import { Aside } from './navs/aside.jsx';
import { ParcelDetails } from './navs/parcelDetails.jsx';
import '../css/modules.css';
import '../css/style.css';
import '../css/dashboard.css';


export const Details = () => (
    <main>
      <Aside />
      <section className='grey' id='dash'>
        <TopNav />
        <div id='main-content-page'>
          <ParcelDetails />
        </div>
      </section>
    </main>
);
