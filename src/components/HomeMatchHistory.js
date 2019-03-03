import React from "react";

const HomeMatchHistory = () => (
  <div className="home-dashboard__match-history">
    <MatchHistoryCard />
    <MatchHistoryCard />
    <MatchHistoryCard />
    <MatchHistoryCard />
    <MatchHistoryCard />
    <MatchHistoryCard />
    <MatchHistoryCard />
    <MatchHistoryCard />
    <MatchHistoryCard />
    <MatchHistoryCard />
    <MatchHistoryCard />
    <MatchHistoryCard />
    <MatchHistoryCard />
    <MatchHistoryCard />
    <MatchHistoryCard />
    <MatchHistoryCard />
    <MatchHistoryCard />

  </div>
);

const MatchHistoryCard = () => (
  <div className="match-history__card">
    <p className="card__team-1">Cloud9</p>
      <i className="team__icon"></i>
        <div className="card__score-box">
          <p className="score-box__score">0 - 1</p>
        </div>
      <i className="team__icon"></i>
    <p className="card__team-2">SKT</p>
  </div>
);

export default HomeMatchHistory;