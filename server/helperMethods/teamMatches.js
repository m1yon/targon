//creates a match object for each team which contains team stats for each match
async function teamMatches(TeamsCollection) {

    var options = {
        allowDiskUse: false
    };

    var pipeline = [
        {
            "$lookup": {
                "from": "2019SpringNALCS",
                "let": {
                    "teamName": "$_id"
                },
                "pipeline": [
                    {
                        "$match": {
                            "$expr": {
                                "$and": [
                                    { "$eq": ["$player","Team"] },
                                    { "$eq": ["$$teamName","$team"] }
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

    var cursor = await TeamsCollection.aggregate(pipeline, options).toArray();

    cursor.forEach(
        async function(doc) {
            await TeamsCollection.updateOne({ "_id": doc._id }, { "$set": { "matches":  doc.games } }, { "upsert": true } );
        }
    );
}

module.exports = teamMatches;