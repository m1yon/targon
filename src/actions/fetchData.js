import { requestGet, recieveGetSuccess } from "./get";

const numeral = require('numeral');
let percentageFormat = "0.00%";
let decimalFormat = "0,0.00";

// Fetches all players
export const fetchData = () => {
  return (dispatch) => {
    dispatch(requestGet());
    return fetch("/api/data")
      .then(
        response => response.json(),
        error => console.log("An error occured.", error)
      )
      .then(data => {
        // Number Format 
        const formattedPlayerData = formatPlayerData(data.players);
        const formattedTeamData = formatTeamData(data.teams);
        return dispatch(recieveGetSuccess({
          ...data,
          players: { ...formattedPlayerData },
          teams: { ...formattedTeamData },
        }));
      }
    )
  }
}

const formatPlayerData = (oldData) => {
  let newData = Object.assign({}, oldData);

  Object.keys(oldData).forEach((key) => {
    newData[key].kda = numeral(oldData[key].kda).format(decimalFormat);
    newData[key].kp = numeral(oldData[key].kp/100).format(percentageFormat); 
    newData[key].dthPercentage = numeral(oldData[key].dthPercentage/100 ).format(percentageFormat);
    newData[key].fbPercentage = numeral(oldData[key].fbPercentage/100).format(percentageFormat);
    newData[key].gd10 = numeral(oldData[key].gd10).format(decimalFormat);
    newData[key].xpd10 = numeral(oldData[key].xpd10).format(decimalFormat);
    newData[key].csd10 = numeral(oldData[key].csd10).format(decimalFormat);
    newData[key].cspm = numeral(oldData[key].cspm).format(decimalFormat);
    newData[key].csPercent15 = numeral(oldData[key].csPercent15/100).format(percentageFormat);
    newData[key].dpm = numeral(oldData[key].dpm).format(decimalFormat);
    newData[key].dmgPercentage = numeral(oldData[key].dmgPercentage/100).format(percentageFormat);
    newData[key].earnedGoldPerMinute = numeral(oldData[key].earnedGoldPerMinute).format(decimalFormat);
    newData[key].goldPercentage = numeral(oldData[key].goldPercentage/100).format(percentageFormat);
    newData[key].wpm = numeral(oldData[key].wpm).format(decimalFormat);
    newData[key].wcpm = numeral(oldData[key].wcpm).format(decimalFormat);
  });

  return newData;
}

const formatTeamData = (oldData) => {
  let newData = Object.assign({}, oldData);

  Object.keys(oldData).forEach((key) => {
    newData[key].kda = numeral(oldData[key].kda).format(decimalFormat);
    newData[key].kpm = numeral(oldData[key].kpm).format(decimalFormat); 
    newData[key].gd10 = numeral(oldData[key].gd10).format(decimalFormat);
    newData[key].xpd10 = numeral(oldData[key].xpd10).format(decimalFormat);
    newData[key].csd10 = numeral(oldData[key].csd10).format(decimalFormat);
    newData[key].cspm = numeral(oldData[key].cspm).format(decimalFormat);
    newData[key].dpm = numeral(oldData[key].dpm).format(decimalFormat);
    newData[key].earnedGoldPerMinute = numeral(oldData[key].earnedGoldPerMinute).format(decimalFormat);
    newData[key].wpm = numeral(oldData[key].wpm).format(decimalFormat);
    newData[key].wcpm = numeral(oldData[key].wcpm).format(decimalFormat);
    newData[key].winPercentage = numeral(oldData[key].winPercentage/100).format(percentageFormat);
    newData[key].baronKills = numeral(oldData[key].baronKills).format(decimalFormat);
    newData[key].firstBaronTime = numeral(oldData[key].firstBaronTime).format(decimalFormat);
    newData[key].firstDragonTime = numeral(oldData[key].firstDragonTime).format(decimalFormat);
    newData[key].firstTowerTime = numeral(oldData[key].firstTowerTime).format(decimalFormat);
    newData[key].goldPerGame = numeral(oldData[key].goldPerGame).format(decimalFormat);
    newData[key].heraldTime = numeral(oldData[key].heraldTime).format(decimalFormat);
    newData[key].invisiblewardclearrate = numeral(oldData[key].invisiblewardclearrate).format(decimalFormat);
    newData[key].teamdragkills = numeral(oldData[key].teamdragkills).format(decimalFormat);
    newData[key].totalAssists = numeral(oldData[key].totalAssists).format(decimalFormat);
    newData[key].totalDeaths = numeral(oldData[key].totalDeaths).format(decimalFormat);
    newData[key].totalKills = numeral(oldData[key].totalKills).format(decimalFormat);
    newData[key].totalLosses = numeral(oldData[key].totalLosses).format(decimalFormat);
    newData[key].totalTeamdragkills = numeral(oldData[key].totalTeamdragkills).format(decimalFormat);
    newData[key].totalWins = numeral(oldData[key].totalWins).format(decimalFormat);
    newData[key].visibleWardClearRate = numeral(oldData[key].visibleWardClearRate).format(decimalFormat);
  });
  
  return newData;
}

