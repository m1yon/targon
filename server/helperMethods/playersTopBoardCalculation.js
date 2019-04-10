// aggregrates thorugh the players collection and calculates the TopBoards, data will be stored in the PlayersTopBoards collection.
async function playersTopBoardCalculation(db) {

    var options = {
        allowDiskUse: false
    };

    // calculate topBoardKills
    var pipeline = [
        {
            "$project": {
                "_id": "totalKills",
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
    
    var cursor = await db.collection("players").aggregate(pipeline, options).toArray();

    // calculate topBoardAssists
    var pipeline = [
        {
            "$project": {
                "_id": "totalAssists",
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
    var cursor = await db.collection("players").aggregate(pipeline, options);

    // update the document in TopBoards collection with the result document
    cursor.forEach(
        async function(doc) {
            await db.collection("TopBoards").updateOne({ "_id": doc._id }, { "$set": { "players": doc.players} }, { "upsert": true } );
        }, 
    );

    // Calculate topBoardKDA
    var pipeline = [
        {
            "$project": {
                "_id": "kda",
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
    var cursor = await db.collection("players").aggregate(pipeline, options);

    // update the document in TopBoards collection with the result document
    cursor.forEach(
        async function(doc) {
            await db.collection("TopBoards").updateOne({ "_id": doc._id }, { "$set": { "players": doc.players} }, { "upsert": true } );
        }, 
    );

    // calculate topBoardDMGPercentage
    var pipeline = [
        {
            "$project": {
                "_id": "dmgPercentage",
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
    var cursor = await db.collection("players").aggregate(pipeline, options);

    // update the document in TopBoards collection with the result document
    cursor.forEach(
        async function(doc) {
            await db.collection("TopBoards").updateOne({ "_id": doc._id }, { "$set": { "players": doc.players} }, { "upsert": true } );
        }, 
    );

    var pipeline = [
        {
            "$project": {
                "_id": "dpm",
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
    var cursor = await db.collection("players").aggregate(pipeline, options);

    // update the document in TopBoards collection with the result document
    cursor.forEach(
        async function(doc) {
            await db.collection("TopBoards").updateOne({ "_id": doc._id }, { "$set": { "players": doc.players} }, { "upsert": true } );
        }, 
    );

    var pipeline = [
        {
            "$project": {
                "_id": "kp",
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
    var cursor = await db.collection("players").aggregate(pipeline, options);

    // update the document in TopBoards collection with the result document
    cursor.forEach(
        async function(doc) {
            db.collection("TopBoards").updateOne({ "_id": doc._id }, { "$set": { "players": doc.players} }, { "upsert": true } );
        }, 
    );

    var pipeline = [
        {
            "$project": {
                "_id": "goldPercentage",
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
    var cursor = await db.collection("players").aggregate(pipeline, options);

    // update the document in TopBoards collection with the result document
    cursor.forEach(
        async function(doc) {
            await db.collection("TopBoards").updateOne({ "_id": doc._id }, { "$set": { "players": doc.players} }, { "upsert": true } );
        }, 
    );

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = playersTopBoardCalculation;