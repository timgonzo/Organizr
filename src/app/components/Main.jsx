import React from "react";
import { Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store";
import { history } from "../store/history";
import { ConnectedDashboard } from "./Dashboard";
import { ConnectedNavigation } from "./Navigation";

export const Main = () => (
  <Router history={history}>
    <Provider store={store}>
      <div>
        <ConnectedNavigation />
      </div>
      {/*<div><ConnectedDashboard/></div>*/}
      <Route exact path="/dashboard" component={ConnectedDashboard} />
    </Provider>
  </Router>
);
