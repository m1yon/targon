// aggregrates through the raw data and calculates stats for each time and stores it into a collection called Teams in the database
async function teamsStatsCalculation(TeamsCollection, LCSCollection) {

    var options = {
        allowDiskUse: false
    };
    
    var pipeline = [
        {
            "$match": {
                "player": {
                    "$eq": "Team"
                }
            }
        }, 
        {
            "$group": {
                "_id": "$team",
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
                "kpm": {
                    "$sum": "$kpm"
                },
                "teamDragKills": {
                    "$avg": "$teamdragkills"
                },
                "totalTeamDragKills": {
                    "$sum": "$teamdragkills"
                },
                "firstDragonTime": {
                    "$avg": "$fdtime"
                },
                "heraldTime": {
                    "$avg": "$heraldtime"
                },
                "firstTowerTime": {
                    "$avg": "$fttime"
                },
                "firstBaronTime": {
                    "$avg": "$fbarontime"
                },
                "baronKills": {
                    "$avg": "$teambaronkills"
                },
                "dpm": {
                    "$avg": "$dmgtochampsperminute"
                },
                "wpm": {
                    "$avg": "$wpm"
                },
                "wcpm": {
                    "$avg": "$wcpm"
                },
                "visibleWardClearRate": {
                    "$avg": "$visiblewardclearrate"
                },
                "invisibleWardClearRate": {
                    "$avg": "$invisiblewardclearrate"
                },
                "earnedGoldPerMinute": {
                    "$avg": "$earnedgpm"
                },
                "goldPerGame": {
                    "$avg": "$totalgold"
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
                },
                "winPercentage": {
                    "$multiply": [
                        {
                            "$divide": [
                                "$totalWins",
                                "$totalGames"
                            ]
                        },
                        100.0
                    ]
                },
                "totalLosses": {
                    "$subtract": [
                        "$totalGames",
                        "$totalWins"
                    ]
                }
            }
        }, 
    ];
    
    var cursor = await LCSCollection.aggregate(pipeline, options).toArray();

    cursor.forEach(
        async function(doc) {
            let teamName = doc._id;
            delete doc._id;
            await TeamsCollection.updateOne({ "_id": teamName }, { "$set": {"stats": doc} }, { "upsert": true } );
        }
    );

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = teamsStatsCalculation;