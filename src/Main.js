import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import { Login, Reset, Signup } from './components/auth/login.jsx';
import {
  Dashboard, Profile, DeliveredParcel, InTransitParcel
} from './components/dashboard.jsx';
import { Details } from './components/details.jsx';

import store from './store';

const MainApp = () => (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/reset' component={Reset} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/delivered-parcels' component={DeliveredParcel} />
          <Route exact path='/inTransit-parcels' component={InTransitParcel} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/details' component={Details} />
        </Switch>
      </Router>
    </Provider>
);

// eslint-disable-next-line no-undef
ReactDOM.render(<MainApp />, document.getElementById('app'));

export default MainApp;
