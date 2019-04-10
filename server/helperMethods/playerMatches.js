//creates a match object for each plyer which contains stats for each match
async function playerMatches(db) {

    var options = {
        allowDiskUse: false
    };

    var cursor = await db.collection("players").find().toArray();

    cursor.forEach(
        async function(doc) {
            var pipeline = [
                {
                    "$match": {
                        "player": {
                            "$eq": doc._id
                        }
                    }
                },
                {
                    "$sort": {
                        "date": -1.0
                    }
                }, 
                {
                    "$group": {
                        "_id": "$gameid",
                        "week": {
                            "$first": "$week"
                        },
                        "game": {
                            "$first": "$game"
                        },
                        "date": {
                            "$first": "$date"
                        },
                        "opponentTeam": {
                            "$first": "$opponentTeam"
                        },
                        "result": {
                            "$first": "$result"
                        },
                        "totalKills": {
                            "$first": "$k"
                        },
                        "totalAssists": {
                            "$first": "$a"
                        },
                        "totalDeaths": {
                            "$first": "$d"
                        },
                        "dpm": {
                            "$avg": "$dmgtochampsperminute"
                        },
                        "earnedGoldPerMinute": {
                            "$first": "$earnedgpm"
                        },
                        "player": {
                            "$first": "$player"
                        }
                    }
                },
                {
                    "$addFields": {
                        "kda": {
                            "$cond": [
                                {
                                    "$eq": [
                                        "$totalDeaths",
                                        0.0
                                    ]
                                },
                                {
                                    "$add": [
                                        "$totalKills",
                                        "$totalAssists"
                                    ]
                                },
                                {
                                    "$divide": [
                                        {
                                            "$add": [
                                                "$totalKills",
                                                "$totalAssists"
                                            ]
                                        },
                                        "$totalDeaths"
                                    ]
                                }
                            ]
                        }
                    }
                },
                {
                    "$sort": {
                        "date": -1.0
                    }
                }, 
                {
                    "$project": {
                        "_id": 0,
                        "week": 1.0,
                        "game": 1.0,
                        "date": 1.0,
                        "opponentTeam": 1.0,
                        "result": 1.0,
                        "totalKills": 1.0,
                        "totalAssists": 1.0,
                        "totalDeaths": 1.0,
                        "dpm": 1.0,
                        "earnedGoldPerMinute": 1.0,
                        "kda": 1.0,
                    }
                },
            ];

            var cursor2 = await db.collection("NALCS").aggregate(pipeline, options).toArray();
            cursor2.forEach(
                async function(game) {
                    await db.collection("players").updateOne({ "_id": doc._id }, { "$push": { "matches":  {"$each": [{game}], "$sort":{ "game.date": -1  } } } }, { "upsert": true } );
                }
            );
        }
    );
}

module.exports = playerMatches;