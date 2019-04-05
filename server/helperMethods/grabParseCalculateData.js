const downloadMatchData = require('./downloadMatchData');
const parseData = require('./parseData');
const calculateOtherRawData = require('./calculateOtherRawData');
const playersStatsCalculation = require('./playersStatsCalculation');
const recentMatches = require('./recentMatches');
const playersTopBoardCalculation = require('./playersTopBoardCalculation');
const playersPlacementCalculation = require('./playersPlacementCalculation');
const teamsStatsCalculation = require('./teamsStatsCalculation');
const teamsTopBoardsCalculation = require('./teamsTopBoardCalculation');

async function grabParseCalculateData(db) {
    
  await downloadMatchData();
  await parseData(db);
  await sleep(25000);
  // calculates other raw data to make aggregation easiser
  await calculateOtherRawData(db);
  await sleep(25000);
  await playersStatsCalculation(db);
  await sleep(20000);
  await recentMatches(db);
  await playersTopBoardCalculation(db);
  await playersPlacementCalculation(db);
  await teamsStatsCalculation(db);
  await teamsTopBoardsCalculation(db);
  console.log("done");

  return;

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

module.exports = grabParseCalculateData;