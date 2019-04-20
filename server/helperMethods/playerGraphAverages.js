// calculates averages for playergraphs
async function playerGraphsAverages(PlayersCollection, LCSCollection) {

    var options = {
        allowDiskUse: false
    };

    // kills
    var cursor = await PlayersCollection.find().project().toArray();

    cursor.forEach(
        async function(doc) {
            var pipeline = [
                {
                    "$match": {
                        "player": {
                            "$ne": "Team"
                        },
                        "position": {
                            "$eq": doc.position
                        }
                    }
                }, 
                {
                    "$group": {
                        "_id": {
                            "week": "$week",
                            "game": "$game",
                            "position": "$position"
                        },
                        "avgKills": {
                            "$avg": "$k"
                        },
                        "players": {
                            "$push": "$player"
                        },
                        "date": {
                            "$first": "$date"
                       }
                    }
                }, 
                {
                    "$sort": {
                        "date": -1.0
                    }
                }, 
                {
                    "$match": {
                        "players": {
                            "$eq": doc._id
                        }
                    }
                }, 
                {
                    "$limit": 5.0
                }, 
                {
                    "$project": {
                        "_id": 0.0,
                        "avgKills": 1.0
                    }
                }, 
                {
                    "$group": {
                        "_id": "kills",
                        "killsAvg": {
                            "$push": "$avgKills"
                        }
                    }
                }
            ];
            var cursor2 = await LCSCollection.aggregate(pipeline, options);
            cursor2.forEach(
                async function(doc2) {
                    await PlayersCollection.updateOne({ "_id": doc._id }, { "$set": { 'graphs.statHistoryGraphs.totalKills.averages':  doc2.killsAvg } }, { "upsert": true } );
                }, 
            );
        }
    );

    // assists
    var cursor = await PlayersCollection.find().project().toArray();

    cursor.forEach(
        async function(doc) {
            var pipeline = [
                {
                    "$match": {
                        "player": {
                            "$ne": "Team"
                        },
                        "position": {
                            "$eq": doc.position
                        }
                    }
                }, 
                {
                    "$group": {
                        "_id": {
                            "week": "$week",
                            "game": "$game",
                            "position": "$position"
                        },
                        "avgAssists": {
                            "$avg": "$a"
                        },
                        "players": {
                            "$push": "$player"
                        },
                        "date": {
                            "$first": "$date"
                       }
                    }
                }, 
                {
                    "$sort": {
                        "date": -1.0
                    }
                }, 
                {
                    "$match": {
                        "players": {
                            "$eq": doc._id
                        }
                    }
                }, 
                {
                    "$limit": 5.0
                }, 
                {
                    "$project": {
                        "_id": 0.0,
                        "avgAssists": 1.0
                    }
                }, 
                {
                    "$group": {
                        "_id": "kills",
                        "assistsAvg": {
                            "$push": "$avgAssists"
                        }
                    }
                }
            ];
            var cursor2 = await LCSCollection.aggregate(pipeline, options);
            cursor2.forEach(
                async function(doc2) {
                    await PlayersCollection.updateOne({ "_id": doc._id }, { "$set": { 'graphs.statHistoryGraphs.totalAssists.averages':  doc2.assistsAvg } }, { "upsert": true } );
                }, 
            );
        }
    );

    //dpm
    var cursor = await PlayersCollection.find().project().toArray();

    cursor.forEach(
        async function(doc) {
            var pipeline = [
                {
                    "$match": {
                        "player": {
                            "$ne": "Team"
                        },
                        "position": {
                            "$eq": doc.position
                        }
                    }
                }, 
                {
                    "$group": {
                        "_id": {
                            "week": "$week",
                            "game": "$game",
                            "position": "$position"
                        },
                        "avgDPM": {
                            "$avg": "$dmgtochampsperminute"
                        },
                        "players": {
                            "$push": "$player"
                        },
                        "date": {
                            "$first": "$date"
                       }
                    }
                }, 
                {
                    "$sort": {
                        "date": -1.0
                    }
                }, 
                {
                    "$match": {
                        "players": {
                            "$eq": doc._id
                        }
                    }
                }, 
                {
                    "$limit": 5.0
                }, 
                {
                    "$project": {
                        "_id": 0.0,
                        "avgDPM": 1.0
                    }
                }, 
                {
                    "$group": {
                        "_id": "kills",
                        "dpmAvg": {
                            "$push": "$avgDPM"
                        }
                    }
                }
            ];
            var cursor2 = await LCSCollection.aggregate(pipeline, options);
            cursor2.forEach(
                async function(doc2) {
                    await PlayersCollection.updateOne({ "_id": doc._id }, { "$set": { 'graphs.statHistoryGraphs.dpm.averages':  doc2.dpmAvg } }, { "upsert": true } );
                }, 
            );
        }
    );

    var cursor = await PlayersCollection.find().project().toArray();

    //kda
    cursor.forEach(
        async function(doc) {
            var pipeline = [
                {
                    "$match": {
                        "player": {
                            "$ne": "Team"
                        },
                        "position": {
                            "$eq": doc.position
                        }
                    }
                }, 
                {
                    "$group": {
                        "_id": {
                            "week": "$week",
                            "game": "$game",
                            "position": "$position"
                        },
                        "avgKDA": {
                            "$avg": "$kda"
                        },
                        "players": {
                            "$push": "$player"
                        },
                        "date": {
                            "$first": "$date"
                       }
                    }
                }, 
                {
                    "$sort": {
                        "date": -1.0
                    }
                }, 
                {
                    "$match": {
                        "players": {
                            "$eq": doc._id
                        }
                    }
                }, 
                {
                    "$limit": 5.0
                }, 
                {
                    "$project": {
                        "_id": 0.0,
                        "avgKDA": 1.0
                    }
                }, 
                {
                    "$group": {
                        "_id": "kills",
                        "kdaAvg": {
                            "$push": "$avgKDA"
                        }
                    }
                }
            ];
            var cursor2 = await LCSCollection.aggregate(pipeline, options);
            cursor2.forEach(
                async function(doc2) {
                    await PlayersCollection.updateOne({ "_id": doc._id }, { "$set": { 'graphs.statHistoryGraphs.kda.averages':  doc2.kdaAvg } }, { "upsert": true } );
                }, 
            );
        }
    );
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = playerGraphsAverages