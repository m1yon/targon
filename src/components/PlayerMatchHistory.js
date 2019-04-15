import React from 'react';
import moment from 'moment';

const PlayerMatchHistory = ({ player }) => {
  console.log('match', player.matches[0].game);

  // let match = player.matches[0].game;

  return ( 
    <div>
      { player.matches.map((match, index) =>  { 
        return (
          <div className={ match.game.game != 1 ? 'player-match-history' : 'player-match-history player-match-history--week-1' } key={index}>
            <div className='player-match-history__column-1'>
              <p className='player-match-history__date'>{ moment(match.game.date).format('MM/DD') }</p>
              <img className='player-match-history__champion-img' src='http://ddragon.leagueoflegends.com/cdn/9.7.1/img/champion/LeeSin.png' />
                { match.game.result == 1 ? 
                  <div className='player-match-history__result-container player-match-history__result--victory'>
                    <p className='player-match-history__result'>Victory</p> 
                  </div>
                  : 
                  <div className='player-match-history__result-container player-match-history__result--loss'>
                    <p className='player-match-history__result'>Defeat</p> 
                  </div>
                } 
            </div>


            <div className='player-match-history__column-2'>
              <div className='player-match-history__kda'>
                <p className='player-match-history__kills'>{ match.game.totalKills }</p> /
                <p className='player-match-history__deaths'>{ match.game.totalDeaths }</p> /
                <p className='player-match-history__assists'>{ match.game.totalAssists }</p>
              </div>
              <div className='player-match-history__details'>
                <p>KDA: {match.game.kda.toFixed(2)}</p>
                <p>GPM: {match.game.earnedGoldPerMinute.toFixed(2)}</p>
                <p>DPM: {match.game.dpm.toFixed(2)}</p>
              </div>
              <div className='player-match-history__details'>
              </div>
            </div>
            
            <div className='player-match-history__column-3'>
              <p className='player-match-history__opponent'>
                vs {match.game.opponentTeam}
                <span style={{backgroundImage: `url(/assets/teams/icons/${match.game.opponentTeam.replace(/ /g,"_")}.png)`}} onError={(e)=>{e.target.onerror = null; e.target.src="/assets/players/avi/default.jpg"}} className="match-history__team-icon"></span>
              </p>
              <p className='player-match-history__week'>Game { match.game.game } Week { match.game.week }</p>
              
            </div>
          </div>
        );
        })
      }
    </div>
  );
};

export default PlayerMatchHistory;