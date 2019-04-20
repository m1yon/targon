// function that updates the roster for each team object
async function teamRosters(TeamsCollection, PlayersCollection) {

    var cursor = await PlayersCollection.find().project({"_id": 1.0, "team": 1.0}).toArray();

    cursor.forEach(
        async function(doc) {
            await TeamsCollection.updateOne( {"_id": doc.team }, { "$addToSet": { 'roster':  doc._id  } }, { "upsert": true });
        }
    );

}

module.exports = teamRosters;