import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "../components/Footer";
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
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;