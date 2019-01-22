import React from "react";
import ReactDOM from "react-dom";
import { Login, Signup, Reset } from "../src/components/auth/login.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const MainApp = () => {
  return <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/reset" component={Reset} />
      </Switch>
    </Router>;
};

ReactDOM.render(<MainApp />, document.getElementById("app"));

export default MainApp;