var fs = require('fs');
var Crawler = require("crawler");
xlsxj = require("xlsx-to-json");

async function grabData(db) {
    
    // download .xlsx file containing match data
    var c = new Crawler({
        encoding:null,
        jQuery:false,// set false to suppress warning message.
        callback:function(err, res, done){
            if(err){
                console.error(err.stack);
            }else{
                fs.createWriteStream(res.options.filename).write(res.body);
            }
            
            done();
        }
    });
    
    c.queue({
        uri:"http://oracleselixir.com/gamedata/2019-spring/",
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.47 Safari/537.36'
        },
        filename:"server/data/matchdata.xlsx"        
    });

    await sleep(15000);

    // convert .xlsx to json
    xlsxj({
        input: "server/data/matchdata.xlsx", 
        output: "server/data/data.json"
      }, function(err, result) {
        if(err) {
          console.error(err);
        }else {
          //console.log("done");
        }
    });

    await sleep(10000);

    // cleare collection
    db.collection("NALCS").remove({});

    await sleep(150);

    //parse through json file and store data into the database
    fs.readFile('server/data/data.json', 'utf8', function (err, data) {
        if (err) throw err;
        var obj = JSON.parse(data).forEach(function(data) {
          if (data.league == "LCS") {
            data.k = parseInt(data.k);
            data.gameid = parseInt(data.gameid);
            data.date = parseFloat(data.date);
            data.week = parseInt(data.week);
            data.game = parseInt(data.game);
            data.patchno = parseFloat(data.patchno);
            data.playerid = parseInt(data.playerid);
            data.gamelength = parseFloat(data.gamelength);
            data.result = parseInt(data.result);
            data.d = parseInt(data.d);
            data.a = parseInt(data.a);
            data.teamkills = parseInt(data.teamkills);
            data.teamdeaths = parseInt(data.teamdeaths);
            data.doubles = parseInt(data.doubles);
            data.triples = parseInt(data.triples);
            data.quadras = parseInt(data.quadras);
            data.pentas = parseInt(data.pentas);
            data.fb = parseInt(data.fb);
            data.fbassist = parseInt(data.fbassist);
            data.fbvictim = parseInt(data.fbvictim);
            data.fbtime = parseFloat(data.fbtime);
            data.kpm = parseFloat(data.kpm);
            data.okpm = parseFloat(data.okpm);
            data.ckpm = parseFloat(data.ckpm);
            data.fd = parseInt(data.fd);
            data.fdtime = parseFloat(data.fdtime);
            data.oppdragkills = parseInt(data.oppdragkills);
            data.teamdragkills = parseInt(data.teamdragkills);
            data.elementals = parseInt(data.elementals);
            data.oppelementals = parseInt(data.oppelementals);
            data.firedrakes = parseInt(data.firedrakes);
            data.waterdrakes = parseInt(data.waterdrakes);
            data.earthdrakes = parseInt(data.earthdrakes);
            data.airdrakes = parseInt(data.airdrakes);
            data.elders = parseInt(data.elders);
            data.oppelders = parseInt(data.oppelders);
            data.herald = parseInt(data.herald);
            //data.hearldtime = parseFloat(data.hearldtime);
            data.ft = parseInt(data.ft);
            data.fttime = parseFloat(data.fttime);
            data.firstmidouter = parseInt(data.firstmidouter);
            data.firsttothreetowers = parseInt(data.firsttothreetowers);
            data.teamtowerkills = parseInt(data.teamtowerkills);
            data.opptowerkills = parseInt(data.opptowerkills);
            data.fbaron = parseInt(data.fbaron);
            data.fbarontime = parseFloat(data.fbarontime);
            data.teambaronkills = parseInt(data.teambaronkills);
            data.oppbaronkills = parseInt(data.oppbaronkills);
            data.dmgtochamps = parseInt(data.dmgtochamps);
            data.dmgtochampsperminute = parseFloat(data.dmgtochampsperminute);
            data.dmgshare = parseFloat(data.dmgshare);
            data.earnedgoldshare = parseFloat(data.earnedgoldshare);
            data.wards = parseInt(data.wards);
            data.wpm = parseFloat(data.wpm);
            data.wardshare = parseInt(data.wardshare);
            data.wardkills = parseInt(data.wardkills);
            data.wcpm = parseFloat(data.wcpm);
            data.visionwards = parseInt(data.visionwards);
            data.visionwardbuys = parseInt(data.visionwardbuys);
            //data.visiblewardclearrate = parseFloat(data.visiblewardclearrate);
            //data.invisiblewardclearrate = parseFloat(data.invisiblewardclearrate);
            data.totalgold = parseInt(data.totalgold);
            data.earnedgpm = parseFloat(data.earnedgpm);
            data.goldspent = parseInt(data.goldspent);
            data.gspd = parseFloat(data.gspd);
            data.minionkills = parseInt(data.minionkills);
            data.monsterkills = parseInt(data.monsterkills);
            data.monsterkillsownjungle = parseInt(data.monsterkillsownjungle);
            data.monsterkillsenemyjungle = parseInt(data.monsterkillsenemyjungle);
            data.cspm = parseFloat(data.cspm);
            data.goldat10 = parseInt(data.goldat10);
            data.oppgoldat10 = parseInt(data.oppgoldat10);
            data.gdat10 = parseInt(data.gdat10);
            data.goldat15 = parseInt(data.goldat15);
            data.oppgoldat15 = parseInt(data.oppgoldat15);
            data.gdat15 = parseInt(data.gdat15);
            data.xpat10 = parseInt(data.xpat10);
            data.oppxpat10 = parseInt(data.oppxpat10);
            data.xpdat10 = parseInt(data.xpdat10);
            data.csat10 = parseInt(data.csat10);
            data.oppcsat10 = parseInt(data.oppcsat10);
            data.csdat10 = parseInt(data.csdat10);
            data.csat15 = parseInt(data.csat15);
            data.oppcsat15 = parseInt(data.oppcsat15);
            data.csdat15 = parseInt(data.csdat15);
            db.collection("NALCS").save(data);
          }
        });
      });

      await sleep(20000);

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
    await sleep(15000);

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
    await sleep(15000);

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
    await sleep(15000);

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
    await sleep(400);

    //store placements for each player
    placement(db, "Support");
    placement(db, "Middle");
    placement(db, "ADC");
    placement(db, "Jungle");
    placement(db, "Top");
    
    return;

}

function placement(db, position) {

    var options = {
        allowDiskUse: false
    };

    //totalKills
    var pipeline = [
        {
            "$match": {
                "position": position
            }
        }, 
        {
            "$project": {
                "_id": "placing",
                "player": "$_id",
                "totalKills": 1.0,
                "position": 1.0
            }
        }, 
        {
            "$sort": {
                totalKills: -1.0
            }
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
    
    var cursor = db.collection("players").aggregate(pipeline, options);

    //store placements for each player
    cursor.forEach(
        function(doc) {
            for (let i = 0; i < doc.players.length; i++) {
                db.collection("players").updateOne({ "_id": doc.players[i] }, { "$set": { totalKillsPlacement: i + 1} }, { "upsert": true } );
            }
        }, 
    );

    //totalDeaths
    var pipeline = [
        {
            "$match": {
                "position": position
            }
        }, 
        {
            "$project": {
                "_id": "placing",
                "player": "$_id",
                "totalDeaths": 1.0,
                "position": 1.0
            }
        }, 
        {
            "$sort": {
                totalDeaths: 1.0
            }
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
    
    var cursor = db.collection("players").aggregate(pipeline, options);

    //store placements for each player
    cursor.forEach(
        function(doc) {
            for (let i = 0; i < doc.players.length; i++) {
                db.collection("players").updateOne({ "_id": doc.players[i] }, { "$set": { totalDeathsPlacement: i + 1} }, { "upsert": true } );
            }
        }, 
    );

    //totalAssists
    var pipeline = [
        {
            "$match": {
                "position": position
            }
        }, 
        {
            "$project": {
                "_id": "placing",
                "player": "$_id",
                "totalAssists": 1.0,
                "position": 1.0
            }
        }, 
        {
            "$sort": {
                totalAssists: -1.0
            }
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
    
    var cursor = db.collection("players").aggregate(pipeline, options);

    //store placements for each player
    cursor.forEach(
        function(doc) {
            for (let i = 0; i < doc.players.length; i++) {
                db.collection("players").updateOne({ "_id": doc.players[i] }, { "$set": { totalAssistsPlacement: i + 1} }, { "upsert": true } );
            }
        }, 
    );

    //kp
    var pipeline = [
        {
            "$match": {
                "position": position
            }
        }, 
        {
            "$project": {
                "_id": "placing",
                "player": "$_id",
                "kp": 1.0,
                "position": 1.0
            }
        }, 
        {
            "$sort": {
                kp: -1.0
            }
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
    
    var cursor = db.collection("players").aggregate(pipeline, options);

    //store placements for each player
    cursor.forEach(
        function(doc) {
            for (let i = 0; i < doc.players.length; i++) {
                db.collection("players").updateOne({ "_id": doc.players[i] }, { "$set": { kpPlacement: i + 1} }, { "upsert": true } );
            }
        }, 
    );

    //kda
    var pipeline = [
        {
            "$match": {
                "position": position
            }
        }, 
        {
            "$project": {
                "_id": "placing",
                "player": "$_id",
                "kda": 1.0,
                "position": 1.0
            }
        }, 
        {
            "$sort": {
                kda: -1.0
            }
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
    
    var cursor = db.collection("players").aggregate(pipeline, options);

    //store placements for each player
    cursor.forEach(
        function(doc) {
            for (let i = 0; i < doc.players.length; i++) {
                db.collection("players").updateOne({ "_id": doc.players[i] }, { "$set": { kdaPlacement: i + 1} }, { "upsert": true } );
            }
        }, 
    );

    //dthPercentage
    var pipeline = [
        {
            "$match": {
                "position": position
            }
        }, 
        {
            "$project": {
                "_id": "placing",
                "player": "$_id",
                "dthPercentage": 1.0,
                "position": 1.0
            }
        }, 
        {
            "$sort": {
                dthPercentage: 1.0
            }
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
    
    var cursor = db.collection("players").aggregate(pipeline, options);

    //store placements for each player
    cursor.forEach(
        function(doc) {
            for (let i = 0; i < doc.players.length; i++) {
                db.collection("players").updateOne({ "_id": doc.players[i] }, { "$set": { dthPercentagePlacement: i + 1} }, { "upsert": true } );
            }
        }, 
    );

    //fbPercentage
    var pipeline = [
        {
            "$match": {
                "position": position
            }
        }, 
        {
            "$project": {
                "_id": "placing",
                "player": "$_id",
                "fbPercentage": 1.0,
                "position": 1.0
            }
        }, 
        {
            "$sort": {
                fbPercentage: -1.0
            }
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
    
    var cursor = db.collection("players").aggregate(pipeline, options);

    //store placements for each player
    cursor.forEach(
        function(doc) {
            for (let i = 0; i < doc.players.length; i++) {
                db.collection("players").updateOne({ "_id": doc.players[i] }, { "$set": { fbPercentagePlacement: i + 1} }, { "upsert": true } );
            }
        }, 
    );
    
    //gd10
    var pipeline = [
        {
            "$match": {
                "position": position
            }
        }, 
        {
            "$project": {
                "_id": "placing",
                "player": "$_id",
                "gd10": 1.0,
                "position": 1.0
            }
        }, 
        {
            "$sort": {
                gd10: -1.0
            }
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
    
    var cursor = db.collection("players").aggregate(pipeline, options);

    //store placements for each player
    cursor.forEach(
        function(doc) {
            for (let i = 0; i < doc.players.length; i++) {
                db.collection("players").updateOne({ "_id": doc.players[i] }, { "$set": { gd10Placement: i + 1} }, { "upsert": true } );
            }
        }, 
    );

    //xpd10
    var pipeline = [
        {
            "$match": {
                "position": position
            }
        }, 
        {
            "$project": {
                "_id": "placing",
                "player": "$_id",
                "xpd10": 1.0,
                "position": 1.0
            }
        }, 
        {
            "$sort": {
                xpd10: -1.0
            }
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
    
    var cursor = db.collection("players").aggregate(pipeline, options);

    //store placements for each player
    cursor.forEach(
        function(doc) {
            for (let i = 0; i < doc.players.length; i++) {
                db.collection("players").updateOne({ "_id": doc.players[i] }, { "$set": { xpd10Placement: i + 1} }, { "upsert": true } );
            }
        }, 
    );

    //csd10
    var pipeline = [
        {
            "$match": {
                "position": position
            }
        }, 
        {
            "$project": {
                "_id": "placing",
                "player": "$_id",
                "csd10": 1.0,
                "position": 1.0
            }
        }, 
        {
            "$sort": {
                csd10: -1.0
            }
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
    
    var cursor = db.collection("players").aggregate(pipeline, options);

    //store placements for each player
    cursor.forEach(
        function(doc) {
            for (let i = 0; i < doc.players.length; i++) {
                db.collection("players").updateOne({ "_id": doc.players[i] }, { "$set": { csd10Placement: i + 1} }, { "upsert": true } );
            }
        }, 
    );

    //cspm
    var pipeline = [
        {
            "$match": {
                "position": position
            }
        }, 
        {
            "$project": {
                "_id": "placing",
                "player": "$_id",
                "cspm": 1.0,
                "position": 1.0
            }
        }, 
        {
            "$sort": {
                cspm: -1.0
            }
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
    
    var cursor = db.collection("players").aggregate(pipeline, options);

    //store placements for each player
    cursor.forEach(
        function(doc) {
            for (let i = 0; i < doc.players.length; i++) {
                db.collection("players").updateOne({ "_id": doc.players[i] }, { "$set": { cspmPlacement: i + 1} }, { "upsert": true } );
            }
        }, 
    );

    //csPercent15
    var pipeline = [
        {
            "$match": {
                "position": position
            }
        }, 
        {
            "$project": {
                "_id": "placing",
                "player": "$_id",
                "csPercent15": 1.0,
                "position": 1.0
            }
        }, 
        {
            "$sort": {
                csPercent15: -1.0
            }
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
    
    var cursor = db.collection("players").aggregate(pipeline, options);

    //store placements for each player
    cursor.forEach(
        function(doc) {
            for (let i = 0; i < doc.players.length; i++) {
                db.collection("players").updateOne({ "_id": doc.players[i] }, { "$set": { csPercent15Placement: i + 1} }, { "upsert": true } );
            }
        }, 
    );

    //dpm
    var pipeline = [
        {
            "$match": {
                "position": position
            }
        }, 
        {
            "$project": {
                "_id": "placing",
                "player": "$_id",
                "dpm": 1.0,
                "position": 1.0
            }
        }, 
        {
            "$sort": {
                dpm: -1.0
            }
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
    
    var cursor = db.collection("players").aggregate(pipeline, options);

    //store placements for each player
    cursor.forEach(
        function(doc) {
            for (let i = 0; i < doc.players.length; i++) {
                db.collection("players").updateOne({ "_id": doc.players[i] }, { "$set": { dpmPlacement: i + 1} }, { "upsert": true } );
            }
        }, 
    );

    //dmgPercentage
    var pipeline = [
        {
            "$match": {
                "position": position
            }
        }, 
        {
            "$project": {
                "_id": "placing",
                "player": "$_id",
                "dmgPercentage": 1.0,
                "position": 1.0
            }
        }, 
        {
            "$sort": {
                dmgPercentage: -1.0
            }
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
    
    var cursor = db.collection("players").aggregate(pipeline, options);

    //store placements for each player
    cursor.forEach(
        function(doc) {
            for (let i = 0; i < doc.players.length; i++) {
                db.collection("players").updateOne({ "_id": doc.players[i] }, { "$set": { dmgPercentagePlacement: i + 1} }, { "upsert": true } );
            }
        }, 
    );

    //earnedGoldPerMinute
    var pipeline = [
        {
            "$match": {
                "position": position
            }
        }, 
        {
            "$project": {
                "_id": "placing",
                "player": "$_id",
                "earnedGoldPerMinute": 1.0,
                "position": 1.0
            }
        }, 
        {
            "$sort": {
                earnedGoldPerMinute: -1.0
            }
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
    
    var cursor = db.collection("players").aggregate(pipeline, options);

    //store placements for each player
    cursor.forEach(
        function(doc) {
            for (let i = 0; i < doc.players.length; i++) {
                db.collection("players").updateOne({ "_id": doc.players[i] }, { "$set": { earnedGoldPerMinutePlacement: i + 1} }, { "upsert": true } );
            }
        }, 
    );

    //goldPercentage
    var pipeline = [
        {
            "$match": {
                "position": position
            }
        }, 
        {
            "$project": {
                "_id": "placing",
                "player": "$_id",
                "goldPercentage": 1.0,
                "position": 1.0
            }
        }, 
        {
            "$sort": {
                goldPercentage: -1.0
            }
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
    
    var cursor = db.collection("players").aggregate(pipeline, options);

    //store placements for each player
    cursor.forEach(
        function(doc) {
            for (let i = 0; i < doc.players.length; i++) {
                db.collection("players").updateOne({ "_id": doc.players[i] }, { "$set": { goldPercentagePlacement: i + 1} }, { "upsert": true } );
            }
        }, 
    );

    //wpm
    var pipeline = [
        {
            "$match": {
                "position": position
            }
        }, 
        {
            "$project": {
                "_id": "placing",
                "player": "$_id",
                "wpm": 1.0,
                "position": 1.0
            }
        }, 
        {
            "$sort": {
                wpm: -1.0
            }
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
    
    var cursor = db.collection("players").aggregate(pipeline, options);

    //store placements for each player
    cursor.forEach(
        function(doc) {
            for (let i = 0; i < doc.players.length; i++) {
                db.collection("players").updateOne({ "_id": doc.players[i] }, { "$set": { wpmPlacement: i + 1} }, { "upsert": true } );
            }
        }, 
    );

    //wcpm
    var pipeline = [
        {
            "$match": {
                "position": position
            }
        }, 
        {
            "$project": {
                "_id": "placing",
                "player": "$_id",
                "wcpm": 1.0,
                "position": 1.0
            }
        }, 
        {
            "$sort": {
                wcpm: -1.0
            }
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
    
    var cursor = db.collection("players").aggregate(pipeline, options);

    //store placements for each player
    cursor.forEach(
        function(doc) {
            for (let i = 0; i < doc.players.length; i++) {
                db.collection("players").updateOne({ "_id": doc.players[i] }, { "$set": { wcpmPlacement: i + 1} }, { "upsert": true } );
                // set number of players in the position
                db.collection("players").updateOne({ "_id": doc.players[i] }, { "$set": { numOfPlayersInPos: doc.players.length} }, { "upsert": true } );
            }
        }, 
    );
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = grabData;