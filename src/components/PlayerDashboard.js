import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import PlayerStats from "./PlayerStats";
import { fetchPlayer } from "../actions/players";

class PlayerDashboard extends React.Component {
  constructor(props) {
    super(props);
    // Fetch player data
    const playerName = location.pathname.slice(8);
    this.props.fetchPlayer(playerName);

    this.state = {
      players: props.players ? props.players : [{ "_id": "" }], // TODO: change this to just player
      isFetching: props.isFetching
    };
  }

  // TODO: get rid of this function
  componentWillReceiveProps(newProps) {
    if(newProps.players != this.props.players)
      this.setState({ players: newProps.players });
    if(newProps.isFetching != this.props.isFetching)
      this.setState({ isFetching: newProps.isFetching });
  }

  render() {
    return (
      <div className="player-dashboard">
        { !this.state.isFetching ? 
          <div>
            <div className="team-banner">
              <div className="team-banner--no-overflow">
                <img src="/img/cloud9.jpg" className="team-banner__bg" />
              </div>

              <div className="team-banner--overflow">
                <img src="/img/tyler1.jpg" className="team-banner__profile-picture" />
                <div className="team-banner__player-info">
                  <h1>{this.state.players[0]["_id"]}</h1>
                  <h2>TYLER STEINKAMP</h2>
                  <NavLink to="/team/cloud9">ADC - Cloud9</NavLink>
                </div>
              </div>
            </div>
            <PlayerStats player={this.state.players[0]} />
          </div>
        :
        console.log("fetching...")}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.players.isFetching,
    players: state.players
  };
};

export default connect(mapStateToProps)(PlayerDashboard);