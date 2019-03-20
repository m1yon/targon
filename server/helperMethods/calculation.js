async function calculate (db) {

    var options = {
        allowDiskUse: false
    };

    var projection = {
        "gameid": "$gameid",
        "player": "$player",
        "team": "$team",
        "csat15": "$csat15",
        "_id": 0
    };

    var cursor = db.collection("NALCS").find({});

    cursor.forEach(
        function(doc) {
            var cursor2 = db.collection("NALCS").find({ "player": "Team", "team": doc.team, "gameid": doc.gameid }).project(projection);
            cursor2.forEach(
                function(doc2) {
                    var csPer15 = (doc.csat15 / doc2.csat15) * 100;
                    db.collection("NALCS").updateOne({ "_id": doc._id }, { "$set": { "csPercent15": csPer15} }, { "upsert": true } );
                }, 
            );
        }, 
    );

    // give mongodb time to insert
    await sleep(200);

    var cursor = db.collection("NALCS").find({});

    cursor.forEach(
        function(doc) {
            if (doc.d != 0) {
                var deathPer = (doc.d / doc.teamdeaths) * 100;
                db.collection("NALCS").updateOne({ "_id": doc._id }, { "$set": { "deathPercent": deathPer} }, { "upsert": true } );
            }
            else {
                db.collection("NALCS").updateOne({ "_id": doc._id }, { "$set": { "deathPercent": 0} }, { "upsert": true } );
            }
        }, 
    );
    
    // give mongodb time to insert
    await sleep(200);

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
                },
                "games": {
                    "$push": "$gameid"
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
                    "$divide": [
                        {
                            "$add": [
                                "$totalKills",
                                "$totalAssists"
                            ]
                        },
                        "$totalDeaths"
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
    
    var cursor = db.collection("NALCS").aggregate(pipeline, options).toArray();

    // give mongodb time to insert
    await sleep(150);

    // calculate RecentMatches
    var pipeline = [
        {
            "$match": {
                "player": "Team"
            }
        }, 
        {
            "$project": {
                "_id": "$gameid",
                "result": 1.0,
                "team": 1.0,
                "week": 1.0
            }
        }, 
        {
            "$sort": {
                "week": -1.0
            }
        }, 
        {
            "$group": {
                "_id": "$_id",
                "Teams": {
                    "$push": "$team"
                },
                "Results": {
                    "$push": "$result"
                },
                "Week": {
                    "$first": "$week"
                }
            }
        }, 
        {
            "$sort": {
                "Week": -1.0
            }
        }, 
        {
            "$out": "RecentMatches"
        }
    ];

    var cursor = db.collection("NALCS").aggregate(pipeline, options).toArray();

    // calculate TopBoards Collection

    // calculate topBoardKills
    var pipeline = [
        {
            "$project": {
                "_id": "topBoardKills",
                "player": "$_id",
                "totalKills": 1.0
            }
        }, 
        {
            "$sort": {
                "totalKills": -1.0
            }
        }, 
        {
            "$limit": 5.0
        }, 
        {
            "$group": {
                "_id": "$_id",
                "players": {
                    "$push": "$player"
                }
            }
        }, 
        {
            "$out": "TopBoards"
        }
    ];
    
    var cursor = db.collection("players").aggregate(pipeline, options).toArray();

    // calculate topBoardAssists
    var pipeline = [
        {
            "$project": {
                "_id": "topBoardAssists",
                "player": "$_id",
                "totalAssists": 1.0
            }
        }, 
        {
            "$sort": {
                "totalAssists": -1.0
            }
        }, 
        {
            "$limit": 5.0
        }, 
        {
            "$group": {
                "_id": "$_id",
                "players": {
                    "$push": "$player"
                }
            }
        }
    ];
    
    // get aggregate result document
    var cursor = db.collection("players").aggregate(pipeline, options);

    // update the document in TopBoards collection with the result document
    cursor.forEach(
        function(doc) {
            db.collection("TopBoards").updateOne({ "_id": doc._id }, { "$set": { "players": doc.players} }, { "upsert": true } );
        }, 
    );

    // Calculate topBoardKDA
    var pipeline = [
        {
            "$project": {
                "_id": "topBoardKDA",
                "player": "$_id",
                "kda": 1.0
            }
        }, 
        {
            "$sort": {
                "kda": -1.0
            }
        }, 
        {
            "$limit": 5.0
        }, 
        {
            "$group": {
                "_id": "$_id",
                "players": {
                    "$push": "$player"
                }
            }
        }
    ];

    // get aggregate result document
    var cursor = db.collection("players").aggregate(pipeline, options);

    // update the document in TopBoards collection with the result document
    cursor.forEach(
        function(doc) {
            db.collection("TopBoards").updateOne({ "_id": doc._id }, { "$set": { "players": doc.players} }, { "upsert": true } );
        }, 
    );

    // calculate topBoardDMGPercentage
    var pipeline = [
        {
            "$project": {
                "_id": "topBoardDMGPercentage",
                "player": "$_id",
                "dmgPercentage": 1.0
            }
        }, 
        {
            "$sort": {
                "dmgPercentage": -1.0
            }
        }, 
        {
            "$limit": 5.0
        }, 
        {
            "$group": {
                "_id": "$_id",
                "players": {
                    "$push": "$player"
                }
            }
        }
    ];
    
    // get aggregate result document
    var cursor = db.collection("players").aggregate(pipeline, options);

    // update the document in TopBoards collection with the result document
    cursor.forEach(
        function(doc) {
            db.collection("TopBoards").updateOne({ "_id": doc._id }, { "$set": { "players": doc.players} }, { "upsert": true } );
        }, 
    );

    var pipeline = [
        {
            "$project": {
                "_id": "topBoardDPM",
                "player": "$_id",
                "dpm": 1.0
            }
        }, 
        {
            "$sort": {
                "dpm": -1.0
            }
        }, 
        {
            "$limit": 5.0
        }, 
        {
            "$group": {
                "_id": "$_id",
                "players": {
                    "$push": "$player"
                }
            }
        }
    ];

    // get aggregate result document
    var cursor = db.collection("players").aggregate(pipeline, options);

    // update the document in TopBoards collection with the result document
    cursor.forEach(
        function(doc) {
            db.collection("TopBoards").updateOne({ "_id": doc._id }, { "$set": { "players": doc.players} }, { "upsert": true } );
        }, 
    );

    var pipeline = [
        {
            "$project": {
                "_id": "topBoardKP",
                "player": "$_id",
                "kp": 1.0
            }
        }, 
        {
            "$sort": {
                "kp": -1.0
            }
        }, 
        {
            "$limit": 5.0
        }, 
        {
            "$group": {
                "_id": "$_id",
                "players": {
                    "$push": "$player"
                }
            }
        }
    ];

    // get aggregate result document
    var cursor = db.collection("players").aggregate(pipeline, options);

    // update the document in TopBoards collection with the result document
    cursor.forEach(
        function(doc) {
            db.collection("TopBoards").updateOne({ "_id": doc._id }, { "$set": { "players": doc.players} }, { "upsert": true } );
        }, 
    );

    var pipeline = [
        {
            "$project": {
                "_id": "topBoardGoldPercentage",
                "player": "$_id",
                "goldPercentage": 1.0
            }
        }, 
        {
            "$sort": {
                "goldPercentage": -1.0
            }
        }, 
        {
            "$limit": 5.0
        }, 
        {
            "$group": {
                "_id": "$_id",
                "players": {
                    "$push": "$player"
                }
            }
        }
    ];

    // get aggregate result document
    var cursor = db.collection("players").aggregate(pipeline, options);

    // update the document in TopBoards collection with the result document
    cursor.forEach(
        function(doc) {
            db.collection("TopBoards").updateOne({ "_id": doc._id }, { "$set": { "players": doc.players} }, { "upsert": true } );
        }, 
    );

    // give mongodb time to insert
    await sleep(100);

    return;

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = calculate;