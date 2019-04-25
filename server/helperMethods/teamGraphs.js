// calculates graph data for each player
 async function teamGraphs(TeamsCollection, LCSCollection) {

    var options = {
        allowDiskUse: false
    };

    //win rate pie chart
    var cursor = await TeamsCollection.find().project({"_id": "$_id"}).toArray();
    
    cursor.forEach(
        async function(doc) {
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
                                        "$stats.totalWins",
                                        "$stats.totalGames"
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
            var cursor2 = await TeamsCollection.aggregate(pipeline, options);
            cursor2.forEach(
                async function(winRatePieChart) {
                    await TeamsCollection.updateOne({ "_id": doc._id }, { "$set": { 'graphs.winRatePieChart':  winRatePieChart } }, { "upsert": true } );
                }, 
            );
        }
    );

    //stat history graphs
    //goldPerGame
    var cursor = await TeamsCollection.find().toArray();

    cursor.forEach(
        async function(doc) {
            var pipeline = [
                {
                    "$match": {
                        "player": {
                            "$eq": 'Team'
                        },
                        "team": {
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
                        "goldPerGame": {
                            "$sum": "$totalgold"
                        },
                        "date": {
                            "$first": "$date"
                        },
                        "team": {
                            "$first": "$team"
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
                        "_id": "goldPerGame",
                        "team": "$team",
                        "goldPerGame": 1.0,
                        "date": 1.0
                    }
                },
                {
                    "$group": {
                        "_id": "$_id",
                        "stat": {
                            "$push": "$goldPerGame"
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
            var cursor2 = await LCSCollection.aggregate(pipeline, options);
            cursor2.forEach(
                async function(goldPerGame) {
                    await TeamsCollection.updateOne({ "_id": doc._id }, { "$set": { 'graphs.statHistoryGraphs.goldPerGame':  goldPerGame  } }, { "upsert": true } );
                }
            );
        }
    );
    
    //goldat10
    var cursor = await TeamsCollection.find().toArray();

    cursor.forEach(
        async function(doc) {
            var pipeline = [
                {
                    "$match": {
                        "player": {
                            "$eq": 'Team'
                        },
                        "team": {
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
                        "goldat10": {
                            "$sum": "$goldat10"
                        },
                        "date": {
                            "$first": "$date"
                        },
                        "team": {
                            "$first": "$team"
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
                        "_id": "goldat10",
                        "team": "$team",
                        "goldat10": 1.0,
                        "date": 1.0
                    }
                },
                {
                    "$group": {
                        "_id": "$_id",
                        "stat": {
                            "$push": "$goldat10"
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
            var cursor2 = await LCSCollection.aggregate(pipeline, options);
            cursor2.forEach(
                async function(goldAt10) {
                    await TeamsCollection.updateOne({ "_id": doc._id }, { "$set": { 'graphs.statHistoryGraphs.goldAt10':  goldAt10  } }, { "upsert": true } );
                }
            );
        }
    );

    //xpat10
    var cursor = await TeamsCollection.find().toArray();

    cursor.forEach(
        async function(doc) {
            var pipeline = [
                {
                    "$match": {
                        "player": {
                            "$eq": 'Team'
                        },
                        "team": {
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
                        "xpat10": {
                            "$sum": "$xpat10"
                        },
                        "date": {
                            "$first": "$date"
                        },
                        "team": {
                            "$first": "$team"
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
                        "_id": "xpat10",
                        "team": "$team",
                        "xpat10": 1.0,
                        "date": 1.0
                    }
                },
                {
                    "$group": {
                        "_id": "$_id",
                        "stat": {
                            "$push": "$xpat10"
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
            var cursor2 = await LCSCollection.aggregate(pipeline, options);
            cursor2.forEach(
                async function(xpAt10) {
                    await TeamsCollection.updateOne({ "_id": doc._id }, { "$set": { 'graphs.statHistoryGraphs.xpAt10':  xpAt10  } }, { "upsert": true } );
                }
            );
        }
    );

    //csat10
    var cursor = await TeamsCollection.find().toArray();

    cursor.forEach(
        async function(doc) {
            var pipeline = [
                {
                    "$match": {
                        "player": {
                            "$eq": 'Team'
                        },
                        "team": {
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
                        "csat10": {
                            "$sum": "$csat10"
                        },
                        "date": {
                            "$first": "$date"
                        },
                        "team": {
                            "$first": "$team"
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
                        "_id": "csat10",
                        "team": "$team",
                        "csat10": 1.0,
                        "date": 1.0
                    }
                },
                {
                    "$group": {
                        "_id": "$_id",
                        "stat": {
                            "$push": "$csat10"
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
            var cursor2 = await LCSCollection.aggregate(pipeline, options);
            cursor2.forEach(
                async function(csAt10) {
                    await TeamsCollection.updateOne({ "_id": doc._id }, { "$set": { 'graphs.statHistoryGraphs.csAt10':  csAt10  } }, { "upsert": true } );
                }
            );
        }
    );

    //cspm
    var cursor = await TeamsCollection.find().toArray();

    cursor.forEach(
        async function(doc) {
            var pipeline = [
                {
                    "$match": {
                        "player": {
                            "$eq": 'Team'
                        },
                        "team": {
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
                        "cspm": {
                            "$sum": "$cspm"
                        },
                        "date": {
                            "$first": "$date"
                        },
                        "team": {
                            "$first": "$team"
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
                        "_id": "cspm",
                        "team": "$team",
                        "cspm": 1.0,
                        "date": 1.0
                    }
                },
                {
                    "$group": {
                        "_id": "$_id",
                        "stat": {
                            "$push": "$cspm"
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
            var cursor2 = await LCSCollection.aggregate(pipeline, options);
            cursor2.forEach(
                async function(cspm) {
                    await TeamsCollection.updateOne({ "_id": doc._id }, { "$set": { 'graphs.statHistoryGraphs.cspm':  cspm  } }, { "upsert": true } );
                }
            );
        }
    );

 }

 module.exports = teamGraphs;