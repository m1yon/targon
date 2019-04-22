import { requestGet, recieveGetSuccess } from "./get";

const numeral = require('numeral');
let percentageFormat = "0.00%";
let decimalFormat = "0,0.00";

// Fetches all players
export const fetchData = (season) => {
  return (dispatch) => {
    dispatch(requestGet());
    return fetch(`/api/data/${season}`)
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
    newData[key].stats.kda = numeral(oldData[key].stats.kda).format(decimalFormat);
    newData[key].stats.kp = numeral(oldData[key].stats.kp/100).format(percentageFormat); 
    newData[key].stats.dthPercentage = numeral(oldData[key].stats.dthPercentage/100 ).format(percentageFormat);
    newData[key].stats.fbPercentage = numeral(oldData[key].stats.fbPercentage/100).format(percentageFormat);
    newData[key].stats.gd10 = numeral(oldData[key].stats.gd10).format(decimalFormat);
    newData[key].stats.xpd10 = numeral(oldData[key].stats.xpd10).format(decimalFormat);
    newData[key].stats.csd10 = numeral(oldData[key].stats.csd10).format(decimalFormat);
    newData[key].stats.cspm = numeral(oldData[key].stats.cspm).format(decimalFormat);
    newData[key].stats.csPercent15 = numeral(oldData[key].stats.csPercent15/100).format(percentageFormat);
    newData[key].stats.dpm = numeral(oldData[key].stats.dpm).format(decimalFormat);
    newData[key].stats.dmgPercentage = numeral(oldData[key].stats.dmgPercentage/100).format(percentageFormat);
    newData[key].stats.earnedGoldPerMinute = numeral(oldData[key].stats.earnedGoldPerMinute).format(decimalFormat);
    newData[key].stats.goldPercentage = numeral(oldData[key].stats.goldPercentage/100).format(percentageFormat);
    newData[key].stats.wpm = numeral(oldData[key].stats.wpm).format(decimalFormat);
    newData[key].stats.wcpm = numeral(oldData[key].stats.wcpm).format(decimalFormat);
  });

  return newData;
}

const formatTeamData = (oldData) => {
  let newData = Object.assign({}, oldData);

  Object.keys(oldData).forEach((key) => {
    newData[key].stats.kda = numeral(oldData[key].stats.kda).format(decimalFormat);
    newData[key].stats.kpm = numeral(oldData[key].stats.kpm).format(decimalFormat); 
    newData[key].stats.gd10 = numeral(oldData[key].stats.gd10).format(decimalFormat);
    newData[key].stats.xpd10 = numeral(oldData[key].stats.xpd10).format(decimalFormat);
    newData[key].stats.csd10 = numeral(oldData[key].stats.csd10).format(decimalFormat);
    newData[key].stats.cspm = numeral(oldData[key].stats.cspm).format(decimalFormat);
    newData[key].stats.dpm = numeral(oldData[key].stats.dpm).format(decimalFormat);
    newData[key].stats.earnedGoldPerMinute = numeral(oldData[key].stats.earnedGoldPerMinute).format(decimalFormat);
    newData[key].stats.wpm = numeral(oldData[key].stats.wpm).format(decimalFormat);
    newData[key].stats.wcpm = numeral(oldData[key].stats.wcpm).format(decimalFormat);
    newData[key].stats.winPercentage = numeral(oldData[key].stats.winPercentage/100).format(percentageFormat);
    newData[key].stats.baronKills = numeral(oldData[key].stats.baronKills).format(decimalFormat);
    newData[key].stats.firstBaronTime = numeral(oldData[key].stats.firstBaronTime).format(decimalFormat);
    newData[key].stats.firstDragonTime = numeral(oldData[key].stats.firstDragonTime).format(decimalFormat);
    newData[key].stats.firstTowerTime = numeral(oldData[key].stats.firstTowerTime).format(decimalFormat);
    newData[key].stats.goldPerGame = numeral(oldData[key].stats.goldPerGame).format(decimalFormat);
    newData[key].stats.heraldTime = numeral(oldData[key].stats.heraldTime).format(decimalFormat);
    newData[key].stats.invisibleWardClearRate = numeral(oldData[key].stats.invisibleWardClearRate).format(decimalFormat);
    newData[key].stats.teamDragKills = numeral(oldData[key].stats.teamDragKills).format(decimalFormat);
    newData[key].stats.totalAssists = numeral(oldData[key].stats.totalAssists).format(decimalFormat);
    newData[key].stats.totalDeaths = numeral(oldData[key].stats.totalDeaths).format(decimalFormat);
    newData[key].stats.totalKills = numeral(oldData[key].stats.totalKills).format(decimalFormat);
    newData[key].stats.totalLosses = numeral(oldData[key].stats.totalLosses).format(decimalFormat);
    newData[key].stats.totalTeamdragkills = numeral(oldData[key].stats.totalTeamdragkills).format(decimalFormat);
    newData[key].stats.totalWins = numeral(oldData[key].stats.totalWins).format(decimalFormat);
    newData[key].stats.visibleWardClearRate = numeral(oldData[key].stats.visibleWardClearRate).format(decimalFormat);
  });
  
  return newData;
}

