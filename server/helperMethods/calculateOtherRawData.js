// calculates other raw data to make aggregation easiser
async function calculateOtherRawData(db) {

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

    var cursor = await db.collection("NALCSTest").find({});

    cursor.forEach(
        async function(doc) {
            var cursor2 = await db.collection("NALCSTest").find({ "player": "Team", "team": doc.team, "gameid": doc.gameid }).project(projection);
            cursor2.forEach(
                async function(doc2) {
                    var csPer15 = (doc.csat15 / doc2.csat15) * 100;
                    await db.collection("NALCSTest").updateOne({ "_id": doc._id }, { "$set": { "csPercent15": csPer15} }, { "upsert": true } );
                }, 
            );
        }, 
    );

    // give mongodb time to insert
    await sleep(15000);

    var cursor = await db.collection("NALCSTest").find({});

    cursor.forEach(
        async function(doc) {
            if (doc.d != 0) {
                var deathPer = (doc.d / doc.teamdeaths) * 100;
                await db.collection("NALCSTest").updateOne({ "_id": doc._id }, { "$set": { "deathPercent": deathPer} }, { "upsert": true } );
            }
            else {
                await db.collection("NALCSTest").updateOne({ "_id": doc._id }, { "$set": { "deathPercent": 0} }, { "upsert": true } );
            }
        }, 
    );

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = calculateOtherRawData;