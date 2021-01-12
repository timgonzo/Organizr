import React from "react";
import {Route, BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "../store";
import {history} from "../store/history";
import {ConnectedDashboard} from "./Dashboard";
import {ConnectedNavigation} from "./Navigation";
import {ConnectedTaskDetail} from "./TaskDetail";

export const Main = () => (
    <Provider store={store}>
        <BrowserRouter history={history}>
            <div>
                <ConnectedNavigation/>
                <Route exact path="/dashboard" render={() => <ConnectedDashboard/>}/>
                <Route exact path="/task/:id" render={({match}) => (<ConnectedTaskDetail match={match}/>)}/>
            </div>
        </BrowserRouter>
    </Provider>
);
