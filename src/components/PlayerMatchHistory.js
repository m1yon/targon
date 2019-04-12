import React from 'react';
import moment from 'moment';

const PlayerMatchHistory = ({ player }) => {
  console.log('match', player.matches[0].game);

  // let match = player.matches[0].game;

  return ( 
    <div>
      { player.matches.map((match, index) =>  { 
        return (
          <div className='player-match-history' key={index}>
            <div className='player-match-history__column-1'>
              { match.game.result == 1 ? <p className='player-match-history__result player-match-history__result--victory'>Victory</p> : <p className='player-match-history__result player-match-history__result--loss'>Loss</p> } 
              <p className='player-match-history__date'>{ moment(match.game.date).format('MM/DD') }</p>
            </div>


            <div className='player-match-history__column-2' >
              <p className='player-match-history__kills'>{ match.game.totalKills }</p> /
              <p className='player-match-history__assists'>{ match.game.totalAssists }</p> /
              <p className='player-match-history__deaths'>{ match.game.totalDeaths }</p>
            </div>
            
            <div className='player-match-history__column-3'>
              <p className='player-match-history__opponent'>vs {match.game.opponentTeam}</p>
              <p className='player-match-history__date'>Game { match.game.game } Week { match.game.week }</p>
            </div>
          </div>
        );
        })
      }
    </div>
  );
};

export default PlayerMatchHistory;