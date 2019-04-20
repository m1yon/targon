// calculates other raw data to make aggregation easiser
async function calculateOtherRawData(LCSCollection) {

    var options = {
        allowDiskUse: false
    };

    var projection = {
        "gameid": "$gameid",
        "player": "$player",
        "team": "$team",
        "csat15": "$csat15",
        "_id": 0
    };

    // calculate csPercent15
    var cursor = await LCSCollection.find({});

    cursor.forEach(
        async function(doc) {
            var cursor2 = await LCSCollection.find({ "player": "Team", "team": doc.team, "gameid": doc.gameid }).project(projection);
            cursor2.forEach(
                async function(doc2) {
                    var csPer15 = (doc.csat15 / doc2.csat15) * 100;
                    await LCSCollection.updateOne({ "_id": doc._id }, { "$set": { "csPercent15": csPer15} }, { "upsert": true } );
                }, 
            );
        }, 
    );

    // give mongodb time to insert
    await sleep(15000);

    // calculate deathPercentage
    var cursor = await LCSCollection.find({});
    cursor.forEach(
        async function(doc) {
            if (doc.d != 0) {
                var deathPer = (doc.d / doc.teamdeaths) * 100;
                await LCSCollection.updateOne({ "_id": doc._id }, { "$set": { "deathPercent": deathPer} }, { "upsert": true } );
            }
            else {
                await LCSCollection.updateOne({ "_id": doc._id }, { "$set": { "deathPercent": 0} }, { "upsert": true } );
            }
        }, 
    );

    // calculate opponents
    var cursor = await LCSCollection.find({}).toArray();
    cursor.forEach(
        async function(doc) {
            var pipeline = [
                {
                    "$match": {
                        "player": {
                            "$eq": "Team"
                        },
                        "gameid": {
                            "$eq": doc.gameid
                        },
                        "team": {
                            "$ne": doc.team
                        }
                    }
                },
            ];
            var cursor2 = await LCSCollection.aggregate(pipeline, options).toArray();;
            cursor2.forEach(
                async function(doc2) {
                    await LCSCollection.updateOne({ "_id": doc._id }, { "$set": { "opponentTeam": doc2.team} }, { "upsert": true } );
                },
            );
        },
    );
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = calculateOtherRawData;