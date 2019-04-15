// aggregrates through the players collection to callculate placements for each player based on position.
async function playersPlacementCalculation (PlayersCollection) {

    await placement(PlayersCollection, "Support");
    await placement(PlayersCollection, "Middle");
    await placement(PlayersCollection, "ADC");
    await placement(PlayersCollection, "Jungle");
    await placement(PlayersCollection, "Top");

}

async function placement(PlayersCollection, position) {

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
    
    var cursor = await PlayersCollection.aggregate(pipeline, options);

    //store placements for each player
    cursor.forEach(
        async function(doc) {
            for (let i = 0; i < doc.players.length; i++) {
                await PlayersCollection.updateOne({ "_id": doc.players[i] }, { "$set": { totalKillsPlacement: i + 1} }, { "upsert": true } );
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
    
    var cursor = await PlayersCollection.aggregate(pipeline, options);

    //store placements for each player
    cursor.forEach(
        async function(doc) {
            for (let i = 0; i < doc.players.length; i++) {
                await PlayersCollection.updateOne({ "_id": doc.players[i] }, { "$set": { totalDeathsPlacement: i + 1} }, { "upsert": true } );
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
    
    var cursor = await PlayersCollection.aggregate(pipeline, options);

    //store placements for each player
    cursor.forEach(
        async function(doc) {
            for (let i = 0; i < doc.players.length; i++) {
                await PlayersCollection.updateOne({ "_id": doc.players[i] }, { "$set": { totalAssistsPlacement: i + 1} }, { "upsert": true } );
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
    
    var cursor = await PlayersCollection.aggregate(pipeline, options);

    //store placements for each player
    cursor.forEach(
        async function(doc) {
            for (let i = 0; i < doc.players.length; i++) {
                await PlayersCollection.updateOne({ "_id": doc.players[i] }, { "$set": { kpPlacement: i + 1} }, { "upsert": true } );
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
    
    var cursor = await PlayersCollection.aggregate(pipeline, options);

    //store placements for each player
    cursor.forEach(
        async function(doc) {
            for (let i = 0; i < doc.players.length; i++) {
                await PlayersCollection.updateOne({ "_id": doc.players[i] }, { "$set": { kdaPlacement: i + 1} }, { "upsert": true } );
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
    
    var cursor = await PlayersCollection.aggregate(pipeline, options);

    //store placements for each player
    cursor.forEach(
        async function(doc) {
            for (let i = 0; i < doc.players.length; i++) {
                await PlayersCollection.updateOne({ "_id": doc.players[i] }, { "$set": { dthPercentagePlacement: i + 1} }, { "upsert": true } );
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
    
    var cursor = await PlayersCollection.aggregate(pipeline, options);

    //store placements for each player
    cursor.forEach(
        async function(doc) {
            for (let i = 0; i < doc.players.length; i++) {
                await PlayersCollection.updateOne({ "_id": doc.players[i] }, { "$set": { fbPercentagePlacement: i + 1} }, { "upsert": true } );
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
    
    var cursor = await PlayersCollection.aggregate(pipeline, options);

    //store placements for each player
    cursor.forEach(
        async function(doc) {
            for (let i = 0; i < doc.players.length; i++) {
                await PlayersCollection.updateOne({ "_id": doc.players[i] }, { "$set": { gd10Placement: i + 1} }, { "upsert": true } );
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
    
    var cursor = await PlayersCollection.aggregate(pipeline, options);

    //store placements for each player
    cursor.forEach(
        async function(doc) {
            for (let i = 0; i < doc.players.length; i++) {
                await PlayersCollection.updateOne({ "_id": doc.players[i] }, { "$set": { xpd10Placement: i + 1} }, { "upsert": true } );
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
    
    var cursor = await PlayersCollection.aggregate(pipeline, options);

    //store placements for each player
    cursor.forEach(
        async function(doc) {
            for (let i = 0; i < doc.players.length; i++) {
                await PlayersCollection.updateOne({ "_id": doc.players[i] }, { "$set": { csd10Placement: i + 1} }, { "upsert": true } );
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
    
    var cursor = await PlayersCollection.aggregate(pipeline, options);

    //store placements for each player
    cursor.forEach(
        async function(doc) {
            for (let i = 0; i < doc.players.length; i++) {
                await PlayersCollection.updateOne({ "_id": doc.players[i] }, { "$set": { cspmPlacement: i + 1} }, { "upsert": true } );
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
    
    var cursor = await PlayersCollection.aggregate(pipeline, options);

    //store placements for each player
    cursor.forEach(
        async function(doc) {
            for (let i = 0; i < doc.players.length; i++) {
               await  PlayersCollection.updateOne({ "_id": doc.players[i] }, { "$set": { csPercent15Placement: i + 1} }, { "upsert": true } );
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
    
    var cursor = await PlayersCollection.aggregate(pipeline, options);

    //store placements for each player
    cursor.forEach(
        async function(doc) {
            for (let i = 0; i < doc.players.length; i++) {
                await PlayersCollection.updateOne({ "_id": doc.players[i] }, { "$set": { dpmPlacement: i + 1} }, { "upsert": true } );
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
    
    var cursor = await PlayersCollection.aggregate(pipeline, options);

    //store placements for each player
    cursor.forEach(
        async function(doc) {
            for (let i = 0; i < doc.players.length; i++) {
                await PlayersCollection.updateOne({ "_id": doc.players[i] }, { "$set": { dmgPercentagePlacement: i + 1} }, { "upsert": true } );
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
    
    var cursor = await PlayersCollection.aggregate(pipeline, options);

    //store placements for each player
    cursor.forEach(
        async function(doc) {
            for (let i = 0; i < doc.players.length; i++) {
                await PlayersCollection.updateOne({ "_id": doc.players[i] }, { "$set": { earnedGoldPerMinutePlacement: i + 1} }, { "upsert": true } );
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
    
    var cursor = await PlayersCollection.aggregate(pipeline, options);

    //store placements for each player
    cursor.forEach(
        async function(doc) {
            for (let i = 0; i < doc.players.length; i++) {
                await PlayersCollection.updateOne({ "_id": doc.players[i] }, { "$set": { goldPercentagePlacement: i + 1} }, { "upsert": true } );
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
    
    var cursor = await PlayersCollection.aggregate(pipeline, options);

    //store placements for each player
    cursor.forEach(
        async function(doc) {
            for (let i = 0; i < doc.players.length; i++) {
                await PlayersCollection.updateOne({ "_id": doc.players[i] }, { "$set": { wpmPlacement: i + 1} }, { "upsert": true } );
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
    
    var cursor = await PlayersCollection.aggregate(pipeline, options);

    //store placements for each player
    cursor.forEach(
        async function(doc) {
            for (let i = 0; i < doc.players.length; i++) {
                await PlayersCollection.updateOne({ "_id": doc.players[i] }, { "$set": { wcpmPlacement: i + 1} }, { "upsert": true } );
                // set number of players in the position
                await PlayersCollection.updateOne({ "_id": doc.players[i] }, { "$set": { numOfPlayersInPos: doc.players.length} }, { "upsert": true } );
            }
        }, 
    );
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = playersPlacementCalculation;
