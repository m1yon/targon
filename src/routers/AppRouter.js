import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PlayerOverview from '../components/PlayerOverview';
import PlayerProfile from '../components/PlayerProfile';
import Leaderboards from "../components/Leaderboards";
import TeamOverview from "../components/TeamOverview";
import SideNavbar from "../components/SideNavbar";
import TopNavbar from "../components/TopNavbar";
import TeamProfile from '../components/TeamProfile';

const AppRouter = () => (
  <BrowserRouter>
    <div className="app-dashboard">
      <SideNavbar />
      <div>
        <TopNavbar />
        <Switch>
          <Route path='/' component={PlayerOverview} exact={true}/>
          <Route path='/players/' component={PlayerOverview} exact={true}/>
          <Route path='/players/' component={PlayerProfile}/>
          <Route path='/teams/' component={TeamOverview} exact={true}/>
          <Route path='/teams/' component={TeamProfile} />
          <Route path='/leaderboards/' component={Leaderboards} exact={true}/>
          <Route path='/leaderboards/:dsort' component={Leaderboards}/>
        </Switch>
      </div>
      {/* <Footer /> */}
    </div>
  </BrowserRouter>
);

export default AppRouter;