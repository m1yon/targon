// update teams placement for each team.
async function teamsPlacement(TeamsCollection) {

    var options = {
        allowDiskUse: false
    };

    /*//Kills
    var pipeline = [
        {
            "$project": {
                "team": "$_id",
                "stats.kills": 1.0
            }
        },
        {
            "$sort": {
                "stats.kills": -1.0
            }
        },
        {
            "$group": {
                "_id": "placing",
                "teams": {"$push": "$team"}
            }
        }
    ];
    
    var cursor = await TeamsCollection.aggregate(pipeline, options);

    //store placements for each player
    cursor.forEach(
        async function(doc) {  
            for (let i = 0; i < doc.teams.length; i++) {
                await TeamsCollection.updateOne({ "_id": doc.teams[i] }, { "$set": { "placement.kills": i + 1} }, { "upsert": true } );
            }
        }, 
    );

    //assists
    var pipeline = [
        {
            "$project": {
                "team": "$_id",
                "stats.assists": 1.0
            }
        },
        {
            "$sort": {
                "stats.assists": -1.0
            }
        },
        {
            "$group": {
                "_id": "placing",
                "teams": {"$push": "$team"}
            }
        }
    ];
    
    var cursor = await TeamsCollection.aggregate(pipeline, options);

    //store placements for each player
    cursor.forEach(
        async function(doc) {  
            for (let i = 0; i < doc.teams.length; i++) {
                await TeamsCollection.updateOne({ "_id": doc.teams[i] }, { "$set": { "placement.assists": i + 1} }, { "upsert": true } );
            }
        }, 
    );

    //deaths
    var pipeline = [
        {
            "$project": {
                "team": "$_id",
                "stats.deaths": 1.0
            }
        },
        {
            "$sort": {
                "stats.deaths": 1.0
            }
        },
        {
            "$group": {
                "_id": "placing",
                "teams": {"$push": "$team"}
            }
        }
    ];
    
    var cursor = await TeamsCollection.aggregate(pipeline, options);

    //store placements for each player
    cursor.forEach(
        async function(doc) {  
            for (let i = 0; i < doc.teams.length; i++) {
                await TeamsCollection.updateOne({ "_id": doc.teams[i] }, { "$set": { "placement.deaths": i + 1} }, { "upsert": true } );
            }
        }, 
    );*/

    //kda
    var pipeline = [
        {
            "$project": {
                "team": "$_id",
                "stats.kda": 1.0
            }
        },
        {
            "$sort": {
                "stats.kda": -1.0
            }
        },
        {
            "$group": {
                "_id": "placing",
                "teams": {"$push": "$team"}
            }
        }
    ];
    
    var cursor = await TeamsCollection.aggregate(pipeline, options);

    //store placements for each team
    cursor.forEach(
        async function(doc) {  
            for (let i = 0; i < doc.teams.length; i++) {
                await TeamsCollection.updateOne({ "_id": doc.teams[i] }, { "$set": { "placement.kda": i + 1} }, { "upsert": true } );
            }
        }, 
    );

    //baronkills
    var pipeline = [
        {
            "$project": {
                "team": "$_id",
                "stats.baronKills": 1.0
            }
        },
        {
            "$sort": {
                "stats.baronKills": -1.0
            }
        },
        {
            "$group": {
                "_id": "placing",
                "teams": {"$push": "$team"}
            }
        }
    ];
    
    var cursor = await TeamsCollection.aggregate(pipeline, options);

    //store placements for each team
    cursor.forEach(
        async function(doc) {  
            for (let i = 0; i < doc.teams.length; i++) {
                await TeamsCollection.updateOne({ "_id": doc.teams[i] }, { "$set": { "placement.baronKills": i + 1} }, { "upsert": true } );
            }
        }, 
    );

    //teamDragKills
    var pipeline = [
        {
            "$project": {
                "team": "$_id",
                "stats.teamDragKills": 1.0
            }
        },
        {
            "$sort": {
                "stats.teamDragKills": -1.0
            }
        },
        {
            "$group": {
                "_id": "placing",
                "teams": {"$push": "$team"}
            }
        }
    ];
    
    var cursor = await TeamsCollection.aggregate(pipeline, options);

    //store placements for each team
    cursor.forEach(
        async function(doc) {  
            for (let i = 0; i < doc.teams.length; i++) {
                await TeamsCollection.updateOne({ "_id": doc.teams[i] }, { "$set": { "placement.teamDragKills": i + 1} }, { "upsert": true } );
            }
        }, 
    );

    //gd10
    var pipeline = [
        {
            "$project": {
                "team": "$_id",
                "stats.gd10": 1.0
            }
        },
        {
            "$sort": {
                "stats.gd10": -1.0
            }
        },
        {
            "$group": {
                "_id": "placing",
                "teams": {"$push": "$team"}
            }
        }
    ];
    
    var cursor = await TeamsCollection.aggregate(pipeline, options);

    //store placements for each team
    cursor.forEach(
        async function(doc) {  
            for (let i = 0; i < doc.teams.length; i++) {
                await TeamsCollection.updateOne({ "_id": doc.teams[i] }, { "$set": { "placement.gd10": i + 1} }, { "upsert": true } );
            }
        }, 
    );

    //xpd10
    var pipeline = [
        {
            "$project": {
                "team": "$_id",
                "stats.xpd10": 1.0
            }
        },
        {
            "$sort": {
                "stats.xpd10": -1.0
            }
        },
        {
            "$group": {
                "_id": "placing",
                "teams": {"$push": "$team"}
            }
        }
    ];
    
    var cursor = await TeamsCollection.aggregate(pipeline, options);

    //store placements for each team
    cursor.forEach(
        async function(doc) {  
            for (let i = 0; i < doc.teams.length; i++) {
                await TeamsCollection.updateOne({ "_id": doc.teams[i] }, { "$set": { "placement.xpd10": i + 1} }, { "upsert": true } );
            }
        }, 
    );

    //csd10
    var pipeline = [
        {
            "$project": {
                "team": "$_id",
                "stats.csd10": 1.0
            }
        },
        {
            "$sort": {
                "stats.csd10": -1.0
            }
        },
        {
            "$group": {
                "_id": "placing",
                "teams": {"$push": "$team"}
            }
        }
    ];
    
    var cursor = await TeamsCollection.aggregate(pipeline, options);

    //store placements for each team
    cursor.forEach(
        async function(doc) {  
            for (let i = 0; i < doc.teams.length; i++) {
                await TeamsCollection.updateOne({ "_id": doc.teams[i] }, { "$set": { "placement.csd10": i + 1} }, { "upsert": true } );
            }
        }, 
    );

    //cspm
    var pipeline = [
        {
            "$project": {
                "team": "$_id",
                "stats.cspm": 1.0
            }
        },
        {
            "$sort": {
                "stats.cspm": -1.0
            }
        },
        {
            "$group": {
                "_id": "placing",
                "teams": {"$push": "$team"}
            }
        }
    ];
    
    var cursor = await TeamsCollection.aggregate(pipeline, options);

    //store placements for each team
    cursor.forEach(
        async function(doc) {  
            for (let i = 0; i < doc.teams.length; i++) {
                await TeamsCollection.updateOne({ "_id": doc.teams[i] }, { "$set": { "placement.cspm": i + 1} }, { "upsert": true } );
            }
        }, 
    );

    //dpm
    var pipeline = [
        {
            "$project": {
                "team": "$_id",
                "stats.dpm": 1.0
            }
        },
        {
            "$sort": {
                "stats.dpm": -1.0
            }
        },
        {
            "$group": {
                "_id": "placing",
                "teams": {"$push": "$team"}
            }
        }
    ];
    
    var cursor = await TeamsCollection.aggregate(pipeline, options);

    //store placements for each team
    cursor.forEach(
        async function(doc) {  
            for (let i = 0; i < doc.teams.length; i++) {
                await TeamsCollection.updateOne({ "_id": doc.teams[i] }, { "$set": { "placement.dpm": i + 1} }, { "upsert": true } );
            }
        }, 
    );

    //earnedGoldPerMinute
    var pipeline = [
        {
            "$project": {
                "team": "$_id",
                "stats.earnedGoldPerMinute": 1.0
            }
        },
        {
            "$sort": {
                "stats.earnedGoldPerMinute": -1.0
            }
        },
        {
            "$group": {
                "_id": "placing",
                "teams": {"$push": "$team"}
            }
        }
    ];
    
    var cursor = await TeamsCollection.aggregate(pipeline, options);

    //store placements for each team
    cursor.forEach(
        async function(doc) {  
            for (let i = 0; i < doc.teams.length; i++) {
                await TeamsCollection.updateOne({ "_id": doc.teams[i] }, { "$set": { "placement.earnedGoldPerMinute": i + 1} }, { "upsert": true } );
            }
        }, 
    );

    //goldPerGame
    var pipeline = [
        {
            "$project": {
                "team": "$_id",
                "stats.goldPerGame": 1.0
            }
        },
        {
            "$sort": {
                "stats.goldPerGame": -1.0
            }
        },
        {
            "$group": {
                "_id": "placing",
                "teams": {"$push": "$team"}
            }
        }
    ];
    
    var cursor = await TeamsCollection.aggregate(pipeline, options);

    //store placements for each team
    cursor.forEach(
        async function(doc) {  
            for (let i = 0; i < doc.teams.length; i++) {
                await TeamsCollection.updateOne({ "_id": doc.teams[i] }, { "$set": { "placement.goldPerGame": i + 1} }, { "upsert": true } );
            }
        }, 
    );

    //wpm
    var pipeline = [
        {
            "$project": {
                "team": "$_id",
                "stats.wpm": 1.0
            }
        },
        {
            "$sort": {
                "stats.wpm": -1.0
            }
        },
        {
            "$group": {
                "_id": "placing",
                "teams": {"$push": "$team"}
            }
        }
    ];
    
    var cursor = await TeamsCollection.aggregate(pipeline, options);

    //store placements for each team
    cursor.forEach(
        async function(doc) {  
            for (let i = 0; i < doc.teams.length; i++) {
                await TeamsCollection.updateOne({ "_id": doc.teams[i] }, { "$set": { "placement.wpm": i + 1} }, { "upsert": true } );
            }
        }, 
    );

    //wcpm
    var pipeline = [
        {
            "$project": {
                "team": "$_id",
                "stats.wcpm": 1.0
            }
        },
        {
            "$sort": {
                "stats.wcpm": -1.0
            }
        },
        {
            "$group": {
                "_id": "placing",
                "teams": {"$push": "$team"}
            }
        }
    ];
    
    var cursor = await TeamsCollection.aggregate(pipeline, options);

    //store placements for each team
    cursor.forEach(
        async function(doc) {  
            for (let i = 0; i < doc.teams.length; i++) {
                await TeamsCollection.updateOne({ "_id": doc.teams[i] }, { "$set": { "placement.wcpm": i + 1} }, { "upsert": true } );
            }
        }, 
    );

    //Kpm
    var pipeline = [
        {
            "$project": {
                "team": "$_id",
                "stats.kpm": 1.0
            }
        },
        {
            "$sort": {
                "stats.kpm": -1.0
            }
        },
        {
            "$group": {
                "_id": "placing",
                "teams": {"$push": "$team"}
            }
        }
    ];
    
    var cursor = await TeamsCollection.aggregate(pipeline, options);

    //store placements for each team
    cursor.forEach(
        async function(doc) {  
            for (let i = 0; i < doc.teams.length; i++) {
                await TeamsCollection.updateOne({ "_id": doc.teams[i] }, { "$set": { "placement.kpm": i + 1} }, { "upsert": true } );
            }
        }, 
    );

    //invisibleWardCleaRrate
    var pipeline = [
        {
            "$project": {
                "team": "$_id",
                "stats.invisibleWardCleaRrate": 1.0
            }
        },
        {
            "$sort": {
                "stats.invisibleWardCleaRrate": -1.0
            }
        },
        {
            "$group": {
                "_id": "placing",
                "teams": {"$push": "$team"}
            }
        }
    ];
    
    var cursor = await TeamsCollection.aggregate(pipeline, options);

    //store placements for each team
    cursor.forEach(
        async function(doc) {  
            for (let i = 0; i < doc.teams.length; i++) {
                await TeamsCollection.updateOne({ "_id": doc.teams[i] }, { "$set": { "placement.invisibleWardCleaRrate": i + 1} }, { "upsert": true } );
            }
        }, 
    );

    //visibleWardClearRate
    var pipeline = [
        {
            "$project": {
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
            "$group": {
                "_id": "placing",
                "teams": {"$push": "$team"}
            }
        }
    ];
    
    var cursor = await TeamsCollection.aggregate(pipeline, options);

    //store placements for each team
    cursor.forEach(
        async function(doc) {  
            for (let i = 0; i < doc.teams.length; i++) {
                await TeamsCollection.updateOne({ "_id": doc.teams[i] }, { "$set": { "placement.visibleWardClearRate": i + 1} }, { "upsert": true } );
                // set number of teams
                await TeamsCollection.updateOne({ "_id": doc.teams[i] }, { "$set": { "placement.numOfTeams": doc.teams.length} }, { "upsert": true } );
            }
        }, 
    );

}

module.exports = teamsPlacement;