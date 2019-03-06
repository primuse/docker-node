import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  Router, Route, Switch
} from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import history from './history';
import { Login, Reset, Signup } from './components/auth/login.jsx';
import Dashboard from './components/dashboard.jsx';
import DeliveredParcel from './components/deliveredParcel.jsx';
import InTransitParcel from './components/inTransitParcel.jsx';
import Profile from './components/profile.jsx';
import { Details } from './components/details.jsx';
import store from './store';

if (localStorage.token) {
  const payload = jwtDecode(localStorage.token);
  store.dispatch({ type: 'LOGIN_USER', payload });
}

const MainApp = () => (
  <Provider store={store}>
    <Router history={history}>
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

ReactDOM.render(<MainApp />, document.getElementById('app'));

export default MainApp;
