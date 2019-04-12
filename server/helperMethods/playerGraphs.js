// calculates graph data for each player
async function playerGraphs(db) {

    var options = {
        allowDiskUse: false
    };

    var cursor = await db.collection("players").find().project({"_id": "$_id"}).toArray();
    
    cursor.forEach(
        async function(doc) {
            //console.log(doc);
            var pipeline = [
                {
                    "$match": {
                        "player": {
                            "$eq": doc._id
                        }
                    }
                }, 
                {
                    "$group": {
                        "_id": "graph1",
                        "championsPlayed": {
                            "$push": "$champion"
                        }
                    }
                },
                {
                    "$project": {
                        "_id": 0,
                        "championsPlayed": 1.0
                    }
                } 
            ];
            var cursor2 = await db.collection("NALCS").aggregate(pipeline, options);
            cursor2.forEach(
                async function(championsPlayedPieChart) {
                    await db.collection("players").updateOne({ "_id": doc._id }, { "$set": { 'graphs.championsPlayedPieChart':  championsPlayedPieChart  } }, { "upsert": true } );
                }, 
            );
        }
    );

    //win rate pie chart
    var cursor = await db.collection("players").find().project({"_id": "$_id"}).toArray();
    
    cursor.forEach(
        async function(doc) {
            //console.log(doc);
            var pipeline = [
                {
                    "$match": {
                        "_id": {
                            "$eq": doc._id
                        }
                    }
                }, 
                {
                    "$addFields": {
                        "winRate": {
                            "$multiply": [
                                {
                                    "$divide": [
                                        "$totalWins",
                                        "$totalLosses"
                                    ]
                                },
                                100.0
                            ]
                        }
                    }
                },
                {
                    "$project": {
                        "_id": 0.0,
                        "winRate": 1.0
                    }
                },
            ];
            var cursor2 = await db.collection("players").aggregate(pipeline, options);
            cursor2.forEach(
                async function(winRatePieChart) {
                    await db.collection("players").updateOne({ "_id": doc._id }, { "$set": { 'graphs.winRatePieChart':  winRatePieChart } }, { "upsert": true } );
                }, 
            );
        }
    );


    //stat history graphs
    // total kills
    var cursor = await db.collection("players").find().toArray();

    cursor.forEach(
        async function(doc) {
            //console.log(doc._id);
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
                        "_id": "$date",
                        "totalKills": {
                            "$sum": "$k"
                        },
                        "date": {
                            "$first": "$date"
                        },
                        "player": {
                            "$first": "$player"
                        }
                    }
                },
                {
                    "$sort": {
                        "date": -1.0
                    }
                }, 
                {
                    "$limit": 5.0
                },
                {
                    "$project": {
                        "_id": "totalKills",
                        "player": "$player",
                        "totalKills": 1.0,
                        "date": 1.0
                    }
                },
                {
                    "$group": {
                        "_id": "$_id",
                        "stat": {
                            "$push": "$totalKills"
                        },
                        "date": {
                            "$push": "$date"
                        }
                    }
                },
                {
                    "$project": {
                        "_id": 0.0,
                        "stat": 1.0,
                        "date": 1.0
                    }
                },
            ];
            var cursor2 = await db.collection("NALCS").aggregate(pipeline, options);
            cursor2.forEach(
                async function(totalKills) {
                    await db.collection("players").updateOne({ "_id": doc._id }, { "$set": { 'graphs.statHistoryGraphs.totalKills':  totalKills  } }, { "upsert": true } );
                }
            );
        }
    );

    // totalAssists
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
                        "_id": "$date",
                        "totalAssists": {
                            "$sum": "$a"
                        },
                        "date": {
                            "$first": "$date"
                        },
                        "player": {
                            "$first": "$player"
                        }
                    }
                },
                {
                    "$sort": {
                        "date": -1.0
                    }
                }, 
                {
                    "$limit": 5.0
                },
                {
                    "$project": {
                        "_id": "totalAssists",
                        "player": "$player",
                        "totalAssists": 1.0,
                        "date": 1.0
                    }
                },
                {
                    "$group": {
                        "_id": "$_id",
                        "stat": {
                            "$push": "$totalAssists"
                        },
                        "date": {
                            "$push": "$date"
                        }
                    }
                },
                {
                    "$project": {
                        "_id": 0.0,
                        "stat": 1.0,
                        "date": 1.0
                    }
                },
            ];
            var cursor2 = await db.collection("NALCS").aggregate(pipeline, options);
            cursor2.forEach(
                async function(totalAssists) {
                    await db.collection("players").updateOne({ "_id": doc._id }, { "$set": { 'graphs.statHistoryGraphs.totalAssists':  totalAssists  } }, { "upsert": true } );
                }
            );
        }
    );

    // dpm
    var cursor = await db.collection("players").find().toArray();

    cursor.forEach(
        async function(doc) {
            //console.log(doc._id);
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
                        "_id": "$date",
                        "dpm": {
                            "$avg": "$dmgtochampsperminute"
                        },
                        "date": {
                            "$first": "$date"
                        },
                        "player": {
                            "$first": "$player"
                        }
                    }
                },
                {
                    "$sort": {
                        "date": -1.0
                    }
                }, 
                {
                    "$limit": 5.0
                },
                {
                    "$project": {
                        "_id": "dpm",
                        "player": "$player",
                        "dpm": 1.0,
                        "date": 1.0
                    }
                },
                {
                    "$group": {
                        "_id": "$_id",
                        "stat": {
                            "$push": "$dpm"
                        },
                        "date": {
                            "$push": "$date"
                        }
                    }
                },
                {
                    "$project": {
                        "_id": 0.0,
                        "stat": 1.0,
                        "date": 1.0
                    }
                },
            ];

            var cursor2 = await db.collection("NALCS").aggregate(pipeline, options);
            cursor2.forEach(
                async function(dpm) {
                    await db.collection("players").updateOne({ "_id": doc._id }, { "$set": { 'graphs.statHistoryGraphs.dpm':  dpm  } }, { "upsert": true } );
                }
            );
        }
    );

    //kda
    var cursor = await db.collection("players").find().toArray();

    cursor.forEach(
        async function(doc) {
            //console.log(doc._id);
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
                        "_id": "$date",
                        "date": {
                            "$first": "$date"
                        },
                        "player": {
                            "$first": "$player"
                        },
                        "totalKills": {
                            "$first": "$k"
                        },
                        "totalAssists": {
                            "$first": "$a"
                        },
                        "totalDeaths": {
                            "$first": "$d"
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
                    "$limit": 5.0
                },
                {
                    "$project": {
                        "_id": "kda",
                        "player": "$player",
                        "kda": 1.0,
                        "date": 1.0
                    }
                },
                {
                    "$group": {
                        "_id": "$_id",
                        "stat": {
                            "$push": "$kda"
                        },
                        "date": {
                            "$push": "$date"
                        }
                    }
                },
                {
                    "$project": {
                        "_id": 0.0,
                        "stat": 1.0,
                        "date": 1.0
                    }
                },
            ];

            var cursor2 = await db.collection("NALCS").aggregate(pipeline, options);
            cursor2.forEach(
                async function(kda) {
                    await db.collection("players").updateOne({ "_id": doc._id }, { "$set": { 'graphs.statHistoryGraphs.kda':  kda  } }, { "upsert": true } );
                }
            );
        }
    );

}

module.exports = playerGraphs;