const downloadMatchData = require('./downloadMatchData');
const parseData = require('./parseData');
const calculateOtherRawData = require('./calculateOtherRawData');
const playersStatsCalculation = require('./playersStatsCalculation');
const recentMatches = require('./recentMatches');
const playersTopBoardCalculation = require('./playersTopBoardCalculation');
const playersPlacementCalculation = require('./playersPlacementCalculation');
const teamsStatsCalculation = require('./teamsStatsCalculation');
const teamsTopBoardsCalculation = require('./teamsTopBoardCalculation');
const playerGraphs = require('./playerGraphs');
const playerMatches = require('./playerMatches');


async function grabParseCalculateData(db) {

  // Database collections
  const LCSCollection =  db.collection("NALCS");
  const PlayersCollection =  db.collection("players");
  const PlayersTopBoardsCollection =  db.collection("TopBoards");
  const TeamsCollection =  db.collection("Teams");
  const TeamsTopBoardsCollection =  db.collection("TeamsTopBoards");
  const RecentMatchesCollection =  db.collection("RecentMatches");


  await downloadMatchData();
  await sleep(1000);
  await parseData(db, LCSCollection);
  await sleep(25000);
  //calculates other raw data to make aggregation easiser
  await calculateOtherRawData(db);
  await sleep(25000);
  await playersStatsCalculation(db);
  await sleep(25000);
  await recentMatches(db);
  await playersTopBoardCalculation(db);
  await playersPlacementCalculation(db);
  await sleep(10000);
  await playerGraphs(db);
  await playerMatches(db);
  await teamsStatsCalculation(db);
  await teamsTopBoardsCalculation(db);
  console.log("done");

  return;

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

module.exports = grabParseCalculateData;