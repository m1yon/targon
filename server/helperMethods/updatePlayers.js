// Function that creates/updates a document for each player inserting; _id (player name), team, position. 
// It will also update each players position based on the position they played the most games with
async function updatePlayers(PlayersCollection, LCSCollection) {

    var options = {
        allowDiskUse: false
    };

    var pipeline = [
        {
            "$match": {
                "player": {
                    "$ne": "Team"
                },
            }
        },
        {
            "$group": {
                "_id": "$player",
                "team": {
                    "$first": "$team"
                },
            }
        }
    ];

    var cursor = await LCSCollection.aggregate(pipeline, options).toArray();

    cursor.forEach(
        async function(doc) {
            await PlayersCollection.updateOne({ "_id": doc._id}, { "$set": {"team": doc.team} }, { "upsert": true } );
        }
    );

    await sleep(1000);
    
    // find each players most played position and update their role
    var cursor = await PlayersCollection.find().toArray();
    cursor.forEach(
        async function(doc) {   
            var pipeline = [
                {
                    "$match": {
                        "player": doc._id
                    }
                },
                {
                    "$group": {
                        "_id": {
                            "player": "$player",
                            "position" : "$position"
                        },
                        "games": {
                            "$sum": 1
                        },
                    }
                },
                {
                    "$sort": {
                        "games": -1
                    }
                },
                {
                    "$group": {
                        "_id": "$_id.player",
                        "position": {
                            "$first": "$_id.position"
                        }
                    }
                }
            ];
            var cursor2 = await LCSCollection.aggregate(pipeline, options).toArray();
            cursor2.forEach(
                async function(doc2) {
                    await PlayersCollection.updateOne({ "_id": doc._id}, { "$set": {"position": doc2.position} }, { "upsert": true } );
                }
            );
        }
    );

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = updatePlayers;