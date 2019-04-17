// aggregrates thorugh the players collection and calculates the TopBoards, data will be stored in the PlayersTopBoards collection.
async function playersTopBoardCalculation(PlayersTopBoardsCollection, PlayersCollection) {

    var options = {
        allowDiskUse: false
    };

    // calculate topBoardKills
    var pipeline = [
        {
            "$project": {
                "_id": "totalKills",
                "player": "$_id",
                "stats.totalKills": 1.0
            }
        }, 
        {
            "$sort": {
                "stats.totalKills": -1.0
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
    
    var cursor = await PlayersCollection.aggregate(pipeline, options).toArray();

    // update the document in TopBoards collection with the result document
    cursor.forEach(
        async function(doc) {
            await PlayersTopBoardsCollection.updateOne({ "_id": doc._id }, { "$set": { "players": doc.players} }, { "upsert": true } );
        }, 
    );

    // calculate topBoardAssists
    var pipeline = [
        {
            "$project": {
                "_id": "totalAssists",
                "player": "$_id",
                "stats.totalAssists": 1.0
            }
        }, 
        {
            "$sort": {
                "stats.totalAssists": -1.0
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
    var cursor = await PlayersCollection.aggregate(pipeline, options);

    // update the document in TopBoards collection with the result document
    cursor.forEach(
        async function(doc) {
            await PlayersTopBoardsCollection.updateOne({ "_id": doc._id }, { "$set": { "players": doc.players} }, { "upsert": true } );
        }, 
    );

    // Calculate topBoardKDA
    var pipeline = [
        {
            "$project": {
                "_id": "kda",
                "player": "$_id",
                "stats.kda": 1.0
            }
        }, 
        {
            "$sort": {
                "stats.kda": -1.0
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
    var cursor = await PlayersCollection.aggregate(pipeline, options);

    // update the document in TopBoards collection with the result document
    cursor.forEach(
        async function(doc) {
            await PlayersTopBoardsCollection.updateOne({ "_id": doc._id }, { "$set": { "players": doc.players} }, { "upsert": true } );
        }, 
    );

    // calculate topBoardDMGPercentage
    var pipeline = [
        {
            "$project": {
                "_id": "dmgPercentage",
                "player": "$_id",
                "stats.dmgPercentage": 1.0
            }
        }, 
        {
            "$sort": {
                "stats.dmgPercentage": -1.0
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
    var cursor = await PlayersCollection.aggregate(pipeline, options);

    // update the document in TopBoards collection with the result document
    cursor.forEach(
        async function(doc) {
            await PlayersTopBoardsCollection.updateOne({ "_id": doc._id }, { "$set": { "players": doc.players} }, { "upsert": true } );
        }, 
    );

    var pipeline = [
        {
            "$project": {
                "_id": "dpm",
                "player": "$_id",
                "stats.dpm": 1.0
            }
        }, 
        {
            "$sort": {
                "stats.dpm": -1.0
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
    var cursor = await PlayersCollection.aggregate(pipeline, options);

    // update the document in TopBoards collection with the result document
    cursor.forEach(
        async function(doc) {
            await PlayersTopBoardsCollection.updateOne({ "_id": doc._id }, { "$set": { "players": doc.players} }, { "upsert": true } );
        }, 
    );

    var pipeline = [
        {
            "$project": {
                "_id": "kp",
                "player": "$_id",
                "stats.kp": 1.0
            }
        }, 
        {
            "$sort": {
                "stats.kp": -1.0
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
    var cursor = await PlayersCollection.aggregate(pipeline, options);

    // update the document in TopBoards collection with the result document
    cursor.forEach(
        async function(doc) {
            PlayersTopBoardsCollection.updateOne({ "_id": doc._id }, { "$set": { "players": doc.players} }, { "upsert": true } );
        }, 
    );

    var pipeline = [
        {
            "$project": {
                "_id": "goldPercentage",
                "player": "$_id",
                "stats.goldPercentage": 1.0
            }
        }, 
        {
            "$sort": {
                "stats.goldPercentage": -1.0
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
    var cursor = await PlayersCollection.aggregate(pipeline, options);

    // update the document in TopBoards collection with the result document
    cursor.forEach(
        async function(doc) {
            await PlayersTopBoardsCollection.updateOne({ "_id": doc._id }, { "$set": { "players": doc.players} }, { "upsert": true } );
        }, 
    );

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = playersTopBoardCalculation;