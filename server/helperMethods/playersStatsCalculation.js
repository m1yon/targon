// aggregrate through raw data to calculate stats for each player. Results will be in the collection "players" in the database
async function playersStatsCalculation(PlayersCollection, LCSCollection) {

    var options = {
        allowDiskUse: false
    };
    
    // player calculation
    var pipeline = [
        {
            "$match": {
                "player": {
                    "$ne": "Team"
                }
            }
        }, 
        {
            "$group": {
                "_id": "$player",
                "totalKills": {
                    "$sum": "$k"
                },
                "totalDeaths": {
                    "$sum": "$d"
                },
                "totalAssists": {
                    "$sum": "$a"
                },
                "kills": {
                    "$avg": "$k"
                },
                "assists": {
                    "$avg": "$a"
                },
                "deaths": {
                    "$avg": "$d"
                },
                "totalWins": {
                    "$sum": "$result"
                },
                "totalGames": {
                    "$sum": 1.0
                },
                "kp": {
                    "$sum": "$teamkills"
                },
                "dthPercentage": {
                    "$avg": "$deathPercent"
                },
                "fb": {
                    "$sum": "$fb"
                },
                "fbAssist": {
                    "$sum": "$fbassist"
                },
                "fbPercentage": {
                    "$sum": 1.0
                },
                "dpm": {
                    "$avg": "$dmgtochampsperminute"
                },
                "dmgPercentage": {
                    "$avg": "$dmgshare"
                },
                "earnedGoldPerMinute": {
                    "$avg": "$earnedgpm"
                },
                "goldPercentage": {
                    "$avg": "$earnedgoldshare"
                },
                "gd10": {
                    "$avg": "$gdat10"
                },
                "xpd10": {
                    "$avg": "$xpdat10"
                },
                "csd10": {
                    "$avg": "$csdat10"
                },
                "cspm": {
                    "$avg": "$cspm"
                },
                "csPercent15": {
                    "$avg": "$csPercent15"
                },
                "wpm": {
                    "$avg": "$wpm"
                },
                "wcpm": {
                    "$avg": "$wcpm"
                }
            }
        }, 
        {
            "$addFields": {
                "fbPercentage": {
                    "$multiply": [
                        {
                            "$divide": [
                                {
                                    "$add": [
                                        "$fb",
                                        "$fbAssist"
                                    ]
                                },
                                "$fbPercentage"
                            ]
                        },
                        100.0
                    ]
                },
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
                },
                "kp": {
                    "$multiply": [
                        {
                            "$divide": [
                                {
                                    "$add": [
                                        "$totalKills",
                                        "$totalAssists"
                                    ]
                                },
                                "$kp"
                            ]
                        },
                        100.0
                    ]
                },
                "dmgPercentage": {
                    "$multiply": [
                        "$dmgPercentage",
                        100.0
                    ]
                },
                "goldPercentage": {
                    "$multiply": [
                        "$goldPercentage",
                        100.0
                    ]
                }
            }
        }
    ];
    
    var cursor = await LCSCollection.aggregate(pipeline, options).toArray();

    cursor.forEach(
        async function(doc) {
            let playerName = doc._id;
            delete doc._id;
            await PlayersCollection.updateOne({ "_id": playerName}, { "$set": {"stats": doc} }, { "upsert": true } );
        }
    );

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = playersStatsCalculation;