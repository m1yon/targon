//creates a match object for each plyer which contains stats for each match
async function playerMatches(PlayersCollection) {

    var options = {
        allowDiskUse: false
    };

    var pipeline = [
        {
            "$lookup": {
                "from": "2019SpringNALCS",
                "let": {
                    "playerName": "$_id"
                },
                "pipeline": [
                    {
                        "$match": {
                            "$expr": {
                                "$eq": [
                                    "$$playerName",
                                    "$player"
                                ]
                            }
                        }
                    },
                    {
                        "$sort": {
                            "date": -1.0
                        }
                    }
                ],
                "as": "games"
            }
        }
    ];

    var cursor = await PlayersCollection.aggregate(pipeline, options).toArray();

    cursor.forEach(
        async function(doc) {
            //console.log(doc.games);
            await PlayersCollection.updateOne({ "_id": doc._id }, { "$set": { "matches":  doc.games } }, { "upsert": true } );
        }
    );
}

module.exports = playerMatches;