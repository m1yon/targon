import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeDashboard from "../components/HomeDashboard";
import PlayerProfile from "../components/PlayerDashboard";
import LeaderboardDashboard from "../components/LeaderboardDashboard";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={HomeDashboard} exact={true}/>
        <Route path='/player/' component={PlayerProfile}/>
        <Route path='/leaderboard/' component={LeaderboardDashboard}/>
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;