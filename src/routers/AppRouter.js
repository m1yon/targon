import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "../components/Footer";
import HomeDashboard from "../components/HomeDashboard";
import PlayerProfile from "../components/PlayerDashboard";
import LeaderboardDashboard from "../components/LeaderboardDashboard";
import TeamDashboard from "../components/TeamDashboard";
import SideNavbar from "../components/SideNavbar";

const AppRouter = () => (
  <BrowserRouter>
    <div className="app-dashboard">
      <SideNavbar />
      <Switch>
        <Route path='/' component={HomeDashboard} exact={true}/>
        <Route path='/player/' component={PlayerProfile}/>
        <Route path='/team/' component={TeamDashboard}/>
        <Route path='/leaderboard/' component={LeaderboardDashboard} exact={true}/>
        <Route path='/leaderboard/:dsort' component={LeaderboardDashboard}/>
      </Switch>
      {/* <Footer /> */}
    </div>
  </BrowserRouter>
);

export default AppRouter;