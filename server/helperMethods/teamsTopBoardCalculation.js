// aggregrates thorugh the Teams collection and calculates the TopBoards, data will be stored in the TeamsTopBoards collection.
async function teamsTopBoardsCalculation (db) {

    var options = {
        allowDiskUse: false
    };

    // calculate topBoardWinPercentage
    var pipeline = [
        {
            "$project": {
                "_id": "topBoardWinPercentage",
                "team": "$_id",
                "winPercentage": 1.0
            }
        }, 
        {
            "$sort": {
                "winPercentage": -1.0
            }
        }, 
        {
            "$limit": 5.0
        }, 
        {
            "$group": {
                "_id": "$_id",
                "teams": {
                    "$push": "$team"
                }
            }
        }, 
        {
            "$out": "TeamsTopBoards"
        }
    ];
    
    var cursor = await db.collection("Teams").aggregate(pipeline, options).toArray();

    // calculate topBoardHeraldTime
    var pipeline = [
        {
            "$project": {
                "_id": "topBoardHeraldTime",
                "team": "$_id",
                "heraldTime": 1.0
            }
        }, 
        {
            "$sort": {
                "heraldTime": -1.0
            }
        }, 
        {
            "$limit": 5.0
        }, 
        {
            "$group": {
                "_id": "$_id",
                "teams": {
                    "$push": "$team"
                }
            }
        }
    ];
    
    // get aggregate result document
    var cursor = await db.collection("Teams").aggregate(pipeline, options);

    // update the document in TopBoards collection with the result document
    cursor.forEach(
        async function(doc) {
            await db.collection("TeamsTopBoards").updateOne({ "_id": doc._id }, { "$set": { "teams": doc.teams} }, { "upsert": true } );
        }, 
    );

    //calculate FirstTowerTime
    var pipeline = [
        {
            "$project": {
                "_id": "topBoardFirstTowerTime",
                "team": "$_id",
                "firstTowerTime": 1.0
            }
        }, 
        {
            "$sort": {
                "firstTowerTime": -1.0
            }
        }, 
        {
            "$limit": 5.0
        }, 
        {
            "$group": {
                "_id": "$_id",
                "teams": {
                    "$push": "$team"
                }
            }
        }
    ];
    
    // get aggregate result document
    var cursor = await db.collection("Teams").aggregate(pipeline, options);

    // update the document in TopBoards collection with the result document
    cursor.forEach(
        async function(doc) {
            await db.collection("TeamsTopBoards").updateOne({ "_id": doc._id }, { "$set": { "teams": doc.teams} }, { "upsert": true } );
        }, 
    );

    // calculate firstBaronTime
    var pipeline = [
        {
            "$project": {
                "_id": "topBoardFirstBaronTime",
                "team": "$_id",
                "firstBaronTime": 1.0
            }
        }, 
        {
            "$sort": {
                "firstBaronTime": -1.0
            }
        }, 
        {
            "$limit": 5.0
        }, 
        {
            "$group": {
                "_id": "$_id",
                "teams": {
                    "$push": "$team"
                }
            }
        }
    ];
    
    // get aggregate result document
    var cursor = await db.collection("Teams").aggregate(pipeline, options);

    // update the document in TopBoards collection with the result document
    cursor.forEach(
        async function(doc) {
            await db.collection("TeamsTopBoards").updateOne({ "_id": doc._id }, { "$set": { "teams": doc.teams} }, { "upsert": true } );
        }, 
    );

    // calculate visibleWardClearRate
    var pipeline = [
        {
            "$project": {
                "_id": "topBoardVisibleWardClearRate",
                "team": "$_id",
                "visibleWardClearRate": 1.0
            }
        }, 
        {
            "$sort": {
                "visibleWardClearRate": -1.0
            }
        }, 
        {
            "$limit": 5.0
        }, 
        {
            "$group": {
                "_id": "$_id",
                "teams": {
                    "$push": "$team"
                }
            }
        }
    ];
    
    // get aggregate result document
    var cursor = await db.collection("Teams").aggregate(pipeline, options);

    // update the document in TopBoards collection with the result document
    cursor.forEach(
        async function(doc) {
            await db.collection("TeamsTopBoards").updateOne({ "_id": doc._id }, { "$set": { "teams": doc.teams} }, { "upsert": true } );
        }, 
    );
    
    // calculate invisibleWardClearRate
    var pipeline = [
        {
            "$project": {
                "_id": "topBoardInvisiblewardclearrate",
                "team": "$_id",
                "invisiblewardclearrate": 1.0
            }
        }, 
        {
            "$sort": {
                "invisiblewardclearrate": -1.0
            }
        }, 
        {
            "$limit": 5.0
        }, 
        {
            "$group": {
                "_id": "$_id",
                "teams": {
                    "$push": "$team"
                }
            }
        }
    ];
    
    // get aggregate result document
    var cursor = await db.collection("Teams").aggregate(pipeline, options);

    // update the document in TopBoards collection with the result document
    cursor.forEach(
        async function(doc) {
            await db.collection("TeamsTopBoards").updateOne({ "_id": doc._id }, { "$set": { "teams": doc.teams} }, { "upsert": true } );
        }, 
    );

}

module.exports = teamsTopBoardsCalculation;