// function that updates the roster for each team object
async function teamRosters(TeamsCollection, LCSCollection) {

    var options = {
        allowDiskUse: false
    }

    var cursor = await TeamsCollection.find().project().toArray();

    cursor.forEach(
        async function(doc) {
            var pipeline = [
                {
                    "$match": {
                        "team": {
                            "$eq": doc._id
                        },
                        "player": {
                            "$ne": "Team"
                        }
                    }
                }, 
                {
                    "$group": {
                        "_id": {
                            "player": "$player",
                            "position": "$position"
                        },
                        "games": {
                            "$sum": 1.0
                        }
                    }
                }, 
                {
                    "$sort": {
                        "games": -1.0
                    }
                }, 
                {
                    "$limit": 5.0
                }, 
                {
                    "$group": {
                        "_id": "Roster",
                        "player": {
                            "$push": "$_id.player"
                        },
                        "position": {
                            "$push": "$_id.position"
                        }
                    }
                }
            ];
            var cursor2 = await LCSCollection.aggregate(pipeline, options).toArray();
            cursor2.forEach(
                async function(doc2) {
                    await TeamsCollection.updateOne( {"_id": doc._id }, { "$set": { 'roster':  { "player": doc2.player, "position": doc2.position } } }, { "upsert": true });
                }
            );
        }
    );

    /*var cursor = await TeamsCollection.find().project({"_id": 1}).toArray();

    cursor.forEach(
        async function(doc) {
            var pipeline = [
                {
                    "$match": {
                        "team": {
                            "$eq": doc._id
                        },
                        "player": {
                            "$ne": "Team"
                        }
                    }
                }, 
                {
                    "$group": {
                        "_id": {
                            "player": "$player",
                            "position": "$position"
                        },
                        "games": {
                            "$sum": 1.0
                        }
                    }
                }, 
                {
                    "$sort": {
                        "games": -1.0
                    }
                }, 
                {
                    "$limit": 5.0
                }, 
                {
                    "$group": {
                        "_id": "Roster",
                        "player": {
                            "$push": "$_id.player"
                        },
                        "position": {
                            "$push": "$_id.position"
                        }
                    }
                }
            ];

            var cursor2 = LCSCollection.aggregate(pipeline, options).toArray();

            cursor2.forEach(
                async function(doc2) {
                    await TeamsCollection.updateOne( {"_id": doc._id }, { "$set": { 'roster':  { "player": doc2.player, "position": doc2.position } } }, { "upsert": true });

                }
            );
        }
    );*/
}

module.exports = teamRosters;