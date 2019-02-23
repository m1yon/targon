import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Homepage from "../components/Homepage";
import PlayerStats from "../components/PlayerStats";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={Homepage} exact={true}/>
        <Route path='/player-stats' component={PlayerStats} exact={true}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;