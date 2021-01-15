import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import { Redirect } from 'react-router';
import {Provider} from "react-redux";
import {store} from "../store";
import {ConnectedLogin} from './Login';
import {ConnectedDashboard} from "./Dashboard";
import {ConnectedNavigation} from "./Navigation";
import {ConnectedTaskDetail} from "./TaskDetail";

const RouteGuard = Component => ({match}) => {
    console.info("Route guard", match);
    if (!store.getState().session.authenticated) {
        return <Redirect to="/" />
    }
    {
        return <Component match={match}/>
    }
}

export const Main = () => (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <ConnectedNavigation/>
                <Route exact path="/" component={ConnectedLogin} />
                <Route exact path="/dashboard" render={RouteGuard(ConnectedDashboard)}/>
                <Route exact path="/task/:id" render={RouteGuard(ConnectedTaskDetail)}/>
            </div>
        </BrowserRouter>
    </Provider>
);
