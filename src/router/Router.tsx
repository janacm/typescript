import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { Home } from "../components/home/Home.component";
import { Routes } from "./Routes";

function Router() {
  return (
    <BrowserRouter>
      <Link to={Routes.home}>Home</Link>
      <Switch>
        <Route path={Routes.home}>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
