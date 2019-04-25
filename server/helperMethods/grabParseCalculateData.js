const downloadMatchData = require('./downloadMatchData');
const parseData = require('./parseData');
const calculateOtherRawData = require('./calculateOtherRawData');
const playersStatsCalculation = require('./playersStatsCalculation');
const playersTopBoardCalculation = require('./playersTopBoardCalculation');
const playersPlacementCalculation = require('./playersPlacementCalculation');
const teamsStatsCalculation = require('./teamsStatsCalculation');
const teamsTopBoardsCalculation = require('./teamsTopBoardCalculation');
const playerGraphs = require('./playerGraphs');
const playerGraphAverages = require('./playerGraphAverages');
const playerMatches = require('./playerMatches');
const teamMatches = require('./teamMatches');
const teamRosters = require('./teamRosters');
const teamsPlacement = require('./teamsPlacement');
const teamGraphs = require('./teamGraphs');
const teamGraphAverage = require('./teamGraphAverages');
const updatePlayers = require('./updatePlayers');


async function grabParseCalculateData(db) {

  // Database collections
  const LCSCollection =  db.collection("2019SpringNALCS");
  const PlayersCollection =  db.collection("2019SpringPlayers");
  const PlayersTopBoardsCollection =  db.collection("2019SpringPlayersTopBoards");
  const TeamsCollection =  db.collection("2019SpringTeams");
  const TeamsTopBoardsCollection =  db.collection("2019SpringTeamsTopBoards");
  var rawData = "2019SpringNALCS";


  await downloadMatchData();
  await sleep(1000);
  await parseData(LCSCollection);
  await sleep(25000);
  //calculates other raw data to make aggregation easiser
  await calculateOtherRawData(LCSCollection);
  await sleep(25000);
  await updatePlayers(PlayersCollection, LCSCollection);
  await sleep(10000);
  await playersStatsCalculation(PlayersCollection, LCSCollection);
  await sleep(25000);
  await playersTopBoardCalculation(PlayersTopBoardsCollection, PlayersCollection);
  await playersPlacementCalculation(PlayersCollection);
  await sleep(10000);
  await playerGraphs(PlayersCollection, LCSCollection);
  await sleep(1500);
  await playerGraphAverages(PlayersCollection, LCSCollection);
  await sleep(1500);
  await playerMatches(PlayersCollection, rawData);
  await sleep(10000);
  await teamsStatsCalculation(TeamsCollection, LCSCollection);
  await sleep(15000);
  await teamsPlacement(TeamsCollection);
  await sleep(1500);
  await teamRosters(TeamsCollection, LCSCollection);
  await sleep(1500);
  await teamMatches(TeamsCollection, rawData);
  await sleep(1500);
  await teamsTopBoardsCalculation(TeamsTopBoardsCollection, TeamsCollection);
  await sleep(1500);
  await teamGraphs(TeamsCollection, LCSCollection);
  await sleep(1500);
  await teamGraphAverage(TeamsCollection, LCSCollection);
  console.log("done");

  return;

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

module.exports = grabParseCalculateData;