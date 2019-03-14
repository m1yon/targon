import { requestGet, recieveGetSuccess } from "./get";

const numeral = require('numeral');
let percentageFormat = "0.00%";
let decimalFormat = "0,0.00";

// Fetches all players
export const fetchPlayers = () => {
  return (dispatch) => {
    dispatch(requestGet("players"));
    return fetch("/api/getPlayers")
      .then(
        response => response.json(),
        error => console.log("An error occured.", error)
      )
      .then(data => {
        // Number Format 
        const formattedData= formatData(data);
        return dispatch(recieveGetSuccess("players", {
          ...formattedData,
        }));
      }
    )
  }
}

const formatData = (oldData) => {
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

