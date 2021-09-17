import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Search from "../pages/Search";

function index(props) {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/user/:id" component={Search} />
    </Switch>
  );
}
export default index;
