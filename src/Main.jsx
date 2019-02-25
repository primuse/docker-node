import React from "react";
import ReactDOM from "react-dom";
import { Login, Signup, Reset } from "../src/components/auth/login.jsx";
import { Dashboard, Profile, DeliveredParcel, InTransitParcel } from "./components/dashboard.jsx";
import { Details } from "./components/details.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const MainApp = () => {
  return <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/reset" component={Reset} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/delivered-parcels" component={DeliveredParcel} />
        <Route exact path="/inTransit-parcels" component={InTransitParcel} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/details" component={Details} />
      </Switch>
    </Router>;
};

ReactDOM.render(<MainApp />, document.getElementById("app"));

export default MainApp;