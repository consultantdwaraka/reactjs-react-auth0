import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Login from "../Login/Login";
import Home from "../home/Home";

const RouterApp = () => {
    return (
    <Router>
        <Switch>
            <Route exact path={"/"}>
                <Login name={"Hello"}/>
            </Route>
            <Route exact path={"/home"}>
                <Home/>
            </Route>
        </Switch>
    </Router>)
};
export default RouterApp;