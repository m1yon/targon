// aggregrates thorugh the Teams collection and calculates the TopBoards, data will be stored in the TeamsTopBoards collection.
async function teamsTopBoardsCalculation (TeamsTopBoardsCollection, TeamsCollection) {

    var options = {
        allowDiskUse: false
    };

    // calculate topBoardWinPercentage
    var pipeline = [
        {
            "$project": {
                "_id": "winPercentage",
                "team": "$_id",
                "stats.winPercentage": 1.0
            }
        }, 
        {
            "$sort": {
                "stats.winPercentage": -1.0
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
    
    var cursor = await TeamsCollection.aggregate(pipeline, options).toArray();

    // update the document in TopBoards collection with the result document
    cursor.forEach(
        async function(doc) {
            await TeamsTopBoardsCollection.updateOne({ "_id": doc._id }, { "$set": { "teams": doc.teams} }, { "upsert": true } );
        }, 
    );

    // calculate topBoardHeraldTime
    var pipeline = [
        {
            "$project": {
                "_id": "heraldTime",
                "team": "$_id",
                "stats.heraldTime": 1.0
            }
        }, 
        {
            "$sort": {
                "stats.heraldTime": -1.0
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
    var cursor = await TeamsCollection.aggregate(pipeline, options);

    // update the document in TopBoards collection with the result document
    cursor.forEach(
        async function(doc) {
            await TeamsTopBoardsCollection.updateOne({ "_id": doc._id }, { "$set": { "teams": doc.teams} }, { "upsert": true } );
        }, 
    );

    //calculate FirstTowerTime
    var pipeline = [
        {
            "$project": {
                "_id": "firstTowerTime",
                "team": "$_id",
                "stats.firstTowerTime": 1.0
            }
        }, 
        {
            "$sort": {
                "stats.firstTowerTime": -1.0
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
    var cursor = await TeamsCollection.aggregate(pipeline, options);

    // update the document in TopBoards collection with the result document
    cursor.forEach(
        async function(doc) {
            await TeamsTopBoardsCollection.updateOne({ "_id": doc._id }, { "$set": { "teams": doc.teams} }, { "upsert": true } );
        }, 
    );

    // calculate firstBaronTime
    var pipeline = [
        {
            "$project": {
                "_id": "firstBaronTime",
                "team": "$_id",
                "stats.firstBaronTime": 1.0
            }
        }, 
        {
            "$sort": {
                "stats.firstBaronTime": -1.0
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
    var cursor = await TeamsCollection.aggregate(pipeline, options);

    // update the document in TopBoards collection with the result document
    cursor.forEach(
        async function(doc) {
            await TeamsTopBoardsCollection.updateOne({ "_id": doc._id }, { "$set": { "teams": doc.teams} }, { "upsert": true } );
        }, 
    );

    // calculate visibleWardClearRate
    var pipeline = [
        {
            "$project": {
                "_id": "visibleWardClearRate",
                "team": "$_id",
                "stats.visibleWardClearRate": 1.0
            }
        }, 
        {
            "$sort": {
                "stats.visibleWardClearRate": -1.0
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
    var cursor = await TeamsCollection.aggregate(pipeline, options);

    // update the document in TopBoards collection with the result document
    cursor.forEach(
        async function(doc) {
            await TeamsTopBoardsCollection.updateOne({ "_id": doc._id }, { "$set": { "teams": doc.teams} }, { "upsert": true } );
        }, 
    );
    
    // calculate invisibleWardClearRate
    var pipeline = [
        {
            "$project": {
                "_id": "invisiblewardclearrate",
                "team": "$_id",
                "stats.invisiblewardclearrate": 1.0
            }
        }, 
        {
            "$sort": {
                "stats.invisiblewardclearrate": -1.0
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
    var cursor = await TeamsCollection.aggregate(pipeline, options);

    // update the document in TopBoards collection with the result document
    cursor.forEach(
        async function(doc) {
            await TeamsTopBoardsCollection.updateOne({ "_id": doc._id }, { "$set": { "teams": doc.teams} }, { "upsert": true } );
        }, 
    );

}

module.exports = teamsTopBoardsCalculation;