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
const playerGraphAverages = require('./playerGraphAverages');
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
  await parseData(LCSCollection);
  await sleep(25000);
  //calculates other raw data to make aggregation easiser
  await calculateOtherRawData(LCSCollection);
  await sleep(25000);
  await playersStatsCalculation(LCSCollection);
  await sleep(25000);
  await recentMatches(LCSCollection);
  await playersTopBoardCalculation(PlayersTopBoardsCollection, PlayersCollection);
  await playersPlacementCalculation(PlayersCollection);
  await sleep(10000);
  await playerGraphs(PlayersCollection, LCSCollection);
  await playerGraphAverages(PlayersCollection, LCSCollection);
  await playerMatches(PlayersCollection, LCSCollection);
  await teamsStatsCalculation(LCSCollection);
  await teamsTopBoardsCalculation(TeamsTopBoardsCollection, TeamsCollection);
  console.log("done");

  return;

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

module.exports = grabParseCalculateData;