//creates a match object for each plyer which contains stats for each match
async function playerMatches(PlayersCollection, NALCS) {

    var options = {
        allowDiskUse: false
    };

    var pipeline = [
        {
            "$lookup": {
                "from": NALCS,
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
            await PlayersCollection.updateOne({ "_id": doc._id }, { "$set": { "matches":  doc.games } }, { "upsert": true } );
        }
    );
}

module.exports = playerMatches;