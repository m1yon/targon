// calculates averages for team graphs
async function teamGraphAverages(TeamsCollection, LCSCollection) {

    var options = {
        allowDiskUse: false
    };
    
    // goldPerGame
    var cursor = await TeamsCollection.find().project().toArray();
    
    cursor.forEach(
        async function(doc) {
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
                        "_id": {
                            "week": "$week",
                            "game": "$game"
                        },
                        "goldPerGame": {
                            "$avg": "$totalgold"
                        },
                        "teams": {
                            "$push": "$team"
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
                        "teams": {
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
                        "goldPerGame": 1.0
                    }
                }, 
                {
                    "$group": {
                        "_id": "stat",
                        "average": {
                            "$push": "$goldPerGame"
                        }
                    }
                }
            ];
            var cursor2 = await LCSCollection.aggregate(pipeline, options);
            cursor2.forEach(
                async function(doc2) {
                    await TeamsCollection.updateOne({ "_id": doc._id }, { "$set": { 'graphs.statHistoryGraphs.goldPerGame.averages':  doc2.average } }, { "upsert": true } );
                }, 
            );
        }
    );

    // goldat10
    var cursor = await TeamsCollection.find().project().toArray();
    
    cursor.forEach(
        async function(doc) {
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
                        "_id": {
                            "week": "$week",
                            "game": "$game"
                        },
                        "goldat10": {
                            "$avg": "$goldat10"
                        },
                        "teams": {
                            "$push": "$team"
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
                        "teams": {
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
                        "goldat10": 1.0
                    }
                }, 
                {
                    "$group": {
                        "_id": "stat",
                        "average": {
                            "$push": "$goldat10"
                        }
                    }
                }
            ];
            var cursor2 = await LCSCollection.aggregate(pipeline, options);
            cursor2.forEach(
                async function(doc2) {
                    await TeamsCollection.updateOne({ "_id": doc._id }, { "$set": { 'graphs.statHistoryGraphs.goldAt10.averages':  doc2.average } }, { "upsert": true } );
                }, 
            );
        }
    );

    // xpat10
    var cursor = await TeamsCollection.find().project().toArray();
    
    cursor.forEach(
        async function(doc) {
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
                        "_id": {
                            "week": "$week",
                            "game": "$game"
                        },
                        "xpat10": {
                            "$avg": "$xpat10"
                        },
                        "teams": {
                            "$push": "$team"
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
                        "teams": {
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
                        "xpat10": 1.0
                    }
                }, 
                {
                    "$group": {
                        "_id": "stat",
                        "average": {
                            "$push": "$xpat10"
                        }
                    }
                }
            ];
            var cursor2 = await LCSCollection.aggregate(pipeline, options);
            cursor2.forEach(
                async function(doc2) {
                    await TeamsCollection.updateOne({ "_id": doc._id }, { "$set": { 'graphs.statHistoryGraphs.xpAt10.averages':  doc2.average } }, { "upsert": true } );
                }, 
            );
        }
    );

    // csat10
    var cursor = await TeamsCollection.find().project().toArray();
    
    cursor.forEach(
        async function(doc) {
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
                        "_id": {
                            "week": "$week",
                            "game": "$game"
                        },
                        "csat10": {
                            "$avg": "$csat10"
                        },
                        "teams": {
                            "$push": "$team"
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
                        "teams": {
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
                        "csat10": 1.0
                    }
                }, 
                {
                    "$group": {
                        "_id": "stat",
                        "average": {
                            "$push": "$csat10"
                        }
                    }
                }
            ];
            var cursor2 = await LCSCollection.aggregate(pipeline, options);
            cursor2.forEach(
                async function(doc2) {
                    await TeamsCollection.updateOne({ "_id": doc._id }, { "$set": { 'graphs.statHistoryGraphs.csAt10.averages':  doc2.average } }, { "upsert": true } );
                }, 
            );
        }
    );

    // cspm
    var cursor = await TeamsCollection.find().project().toArray();
    
    cursor.forEach(
        async function(doc) {
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
                        "_id": {
                            "week": "$week",
                            "game": "$game"
                        },
                        "cspm": {
                            "$avg": "$cspm"
                        },
                        "teams": {
                            "$push": "$team"
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
                        "teams": {
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
                        "cspm": 1.0
                    }
                }, 
                {
                    "$group": {
                        "_id": "stat",
                        "average": {
                            "$push": "$cspm"
                        }
                    }
                }
            ];
            var cursor2 = await LCSCollection.aggregate(pipeline, options);
            cursor2.forEach(
                async function(doc2) {
                    await TeamsCollection.updateOne({ "_id": doc._id }, { "$set": { 'graphs.statHistoryGraphs.cspm.averages':  doc2.average } }, { "upsert": true } );
                }, 
            );
        }
    );
}

module.exports = teamGraphAverages;