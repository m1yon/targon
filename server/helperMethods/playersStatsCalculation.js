// aggregrate through raw data to calculate stats for each player. Results will be in the collection "players" in the database
async function playersStatsCalculation(db) {

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
                "team": {
                    "$first": "$team"
                },
                "position": {
                    "$first": "$position"
                },
                "totalKills": {
                    "$sum": "$k"
                },
                "totalDeaths": {
                    "$sum": "$d"
                },
                "totalAssists": {
                    "$sum": "$a"
                },
                "totalWins": {
                    "$sum": "$result"
                },
                "totalLosses": {
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
        }, 
        {
            "$out": "players"
        }
    ];
    
    var cursor = await db.collection("NALCS").aggregate(pipeline, options).toArray();

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = playersStatsCalculation;