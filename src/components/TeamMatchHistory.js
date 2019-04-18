import React from 'react';
import moment from 'moment';
import numeral from 'numeral';

const TeamMatchHistory = ({ team }) => {

  return ( 
    <div>
      { team.matches.map((match, index) =>  { 
        return (
          <div className={ match.game != 1 ? 'team-match-history' : 'team-match-history team-match-history--week-1' } key={index}>
            <div className='team-match-history__column-1'>start</div>
            <div className='team-match-history__column-2'>
              <div className='team-match-history__team-container'>
                <p>{team._id}</p>
              </div>
              { match.result == 1 ? 
                <div className='player-match-history__result-container player-match-history__result--victory'>
                  <p className='player-match-history__result'>Victory</p> 
                </div>
                : 
                <div className='player-match-history__result-container player-match-history__result--loss'>
                  <p className='player-match-history__result'>Defeat</p> 
                </div>
              } 
              <div className='team-match-history__opponent-container'>
                <p>{match.opponentTeam}</p>
              </div>
            </div>
            <div className='team-match-history__column-3'>end</div>
          </div>
        );
        })
      }
    </div>
  );
};

export default TeamMatchHistory;