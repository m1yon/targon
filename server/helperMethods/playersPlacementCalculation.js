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

    //Kills
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
                "stats.kills": 1.0,
                "position": 1.0
            }
        }, 
        {
            "$sort": {
                "stats.kills": -1.0
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
                await PlayersCollection.updateOne({ "_id": doc.players[i] }, { "$set": { "placement.kills": i + 1} }, { "upsert": true } );
            }
        }, 
    );

    // deaths
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
                "stats.deaths": 1.0,
                "position": 1.0
            }
        }, 
        {
            "$sort": {
                "stats.deaths": 1.0
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
                await PlayersCollection.updateOne({ "_id": doc.players[i] }, { "$set": { "placement.deaths": i + 1} }, { "upsert": true } );
            }
        }, 
    );

    //Assists
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
                "stats.assists": 1.0,
                "position": 1.0
            }
        }, 
        {
            "$sort": {
                "stats.assists": -1.0
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
                await PlayersCollection.updateOne({ "_id": doc.players[i] }, { "$set": { "placement.assists": i + 1} }, { "upsert": true } );
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
                "stats.kp": 1.0,
                "position": 1.0
            }
        }, 
        {
            "$sort": {
                "stats.kp": -1.0
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
                await PlayersCollection.updateOne({ "_id": doc.players[i] }, { "$set": { "placement.kp": i + 1} }, { "upsert": true } );
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
                "stats.kda": 1.0,
                "position": 1.0
            }
        }, 
        {
            "$sort": {
                "stats.kda": -1.0
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
                await PlayersCollection.updateOne({ "_id": doc.players[i] }, { "$set": { "placement.kda": i + 1} }, { "upsert": true } );
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
                "stats.dthPercentage": 1.0,
                "position": 1.0
            }
        }, 
        {
            "$sort": {
                "stats.dthPercentage": 1.0
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
                await PlayersCollection.updateOne({ "_id": doc.players[i] }, { "$set": { "placement.dthPercentage": i + 1} }, { "upsert": true } );
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
                "stats.fbPercentage": 1.0,
                "position": 1.0
            }
        }, 
        {
            "$sort": {
                "stats.fbPercentage": -1.0
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
                await PlayersCollection.updateOne({ "_id": doc.players[i] }, { "$set": { "placement.fbPercentage": i + 1} }, { "upsert": true } );
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
                "stats.gd10": 1.0,
                "position": 1.0
            }
        }, 
        {
            "$sort": {
                "stats.gd10": -1.0
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
                await PlayersCollection.updateOne({ "_id": doc.players[i] }, { "$set": { "placement.gd10": i + 1} }, { "upsert": true } );
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
                "stats.xpd10": 1.0,
                "position": 1.0
            }
        }, 
        {
            "$sort": {
                "stats.xpd10": -1.0
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
                await PlayersCollection.updateOne({ "_id": doc.players[i] }, { "$set": { "placement.xpd10": i + 1} }, { "upsert": true } );
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
                "stats.csd10": 1.0,
                "position": 1.0
            }
        }, 
        {
            "$sort": {
                "stats.csd10": -1.0
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
                await PlayersCollection.updateOne({ "_id": doc.players[i] }, { "$set": { "placement.csd10": i + 1} }, { "upsert": true } );
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
                "stats.cspm": 1.0,
                "position": 1.0
            }
        }, 
        {
            "$sort": {
                "stats.cspm": -1.0
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
                await PlayersCollection.updateOne({ "_id": doc.players[i] }, { "$set": { "placement.cspm": i + 1} }, { "upsert": true } );
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
                "stats.csPercent15": 1.0,
                "position": 1.0
            }
        }, 
        {
            "$sort": {
                "stats.csPercent15": -1.0
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
               await  PlayersCollection.updateOne({ "_id": doc.players[i] }, { "$set": { "placement.csPercent15": i + 1} }, { "upsert": true } );
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
                "stats.dpm": 1.0,
                "position": 1.0
            }
        }, 
        {
            "$sort": {
                "stats.dpm": -1.0
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
                await PlayersCollection.updateOne({ "_id": doc.players[i] }, { "$set": { "placement.dpm": i + 1} }, { "upsert": true } );
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
                "stats.dmgPercentage": 1.0,
                "position": 1.0
            }
        }, 
        {
            "$sort": {
                "stats.dmgPercentage": -1.0
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
                await PlayersCollection.updateOne({ "_id": doc.players[i] }, { "$set": { "placement.dmgPercentage": i + 1} }, { "upsert": true } );
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
                "stats.earnedGoldPerMinute": 1.0,
                "position": 1.0
            }
        }, 
        {
            "$sort": {
                "stats.earnedGoldPerMinute": -1.0
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
                await PlayersCollection.updateOne({ "_id": doc.players[i] }, { "$set": { "placement.earnedGoldPerMinute": i + 1} }, { "upsert": true } );
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
                "stats.goldPercentage": 1.0,
                "position": 1.0
            }
        }, 
        {
            "$sort": {
                "stats.goldPercentage": -1.0
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
                await PlayersCollection.updateOne({ "_id": doc.players[i] }, { "$set": { "placement.goldPercentage": i + 1} }, { "upsert": true } );
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
                "stats.wpm": 1.0,
                "position": 1.0
            }
        }, 
        {
            "$sort": {
                "stats.wpm": -1.0
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
                await PlayersCollection.updateOne({ "_id": doc.players[i] }, { "$set": { "placement.wpm": i + 1} }, { "upsert": true } );
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
                "stats.wcpm": 1.0,
                "position": 1.0
            }
        }, 
        {
            "$sort": {
                "stats.wcpm": -1.0
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
                await PlayersCollection.updateOne({ "_id": doc.players[i] }, { "$set": { "placement.wcpm": i + 1} }, { "upsert": true } );
                // set number of players in the position
                await PlayersCollection.updateOne({ "_id": doc.players[i] }, { "$set": { "placement.numOfPlayersInPos": doc.players.length} }, { "upsert": true } );
            }
        }, 
    );
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = playersPlacementCalculation;
