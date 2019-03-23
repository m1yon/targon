import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "../components/Footer";
import HomeDashboard from "../components/HomeDashboard";
import PlayerDashboard from "../components/PlayerDashboard";
import PlayersDashboard from "../components/PlayersDashboard";
import LeaderboardDashboard from "../components/LeaderboardDashboard";
import TeamDashboard from "../components/TeamDashboard";
import SideNavbar from "../components/SideNavbar";
import TopNavbar from "../components/TopNavbar";

const AppRouter = () => (
  <BrowserRouter>
    <div className="app-dashboard">
      <SideNavbar />
      <div>
        <TopNavbar />
        <Switch>
          <Route path='/' component={HomeDashboard} exact={true}/>
          <Route path='/player/' component={PlayersDashboard} exact={true}/>
          <Route path='/player/' component={PlayerDashboard}/>
          <Route path='/team/' component={TeamDashboard}/>
          <Route path='/leaderboard/' component={LeaderboardDashboard} exact={true}/>
          <Route path='/leaderboard/:dsort' component={LeaderboardDashboard}/>
        </Switch>
      </div>
      {/* <Footer /> */}
    </div>
  </BrowserRouter>
);

export default AppRouter;