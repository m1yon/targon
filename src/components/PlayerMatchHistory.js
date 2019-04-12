import React from 'react';
import moment from 'moment';

const PlayerMatchHistory = ({ player }) => {
  console.log('match', player.matches[0].game);

  let match = player.matches[0].game;

  return ( 
    <div className='player-match-history'>
      <div>
        { match.result == 1 ? <p className='player-match-history__result player-match-history__result--victory'>Victory</p> : <p className='player-match-history__result player-match-history__result--loss'>Loss</p> } 
        <p className='player-match-history__date'>{ moment(match.date).format('MM/DD') }</p>
      </div>

      <p className='player-match-history__opponent'>vs {match.opponentTeam}</p>

      <div className='player-match-history__kda' >
        <p className='player-match-history__kills'>{ match.totalKills }</p> /
        <p className='player-match-history__assists'>{ match.totalAssists }</p> /
        <p className='player-match-history__deaths'>{ match.totalDeaths }</p>
      </div>
    </div>
  );
};

export default PlayerMatchHistory;