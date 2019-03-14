import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeDashboard from "../components/HomeDashboard";
import PlayerProfile from "../components/PlayerDashboard";
import LeaderboardDashboard from "../components/LeaderboardDashboard";
import TeamDashboard from "../components/TeamDashboard";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={HomeDashboard} exact={true}/>
        <Route path='/player/' component={PlayerProfile}/>
        <Route path='/team/' component={TeamDashboard}/>
        <Route path='/leaderboard/:dsort' component={LeaderboardDashboard}/>
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;