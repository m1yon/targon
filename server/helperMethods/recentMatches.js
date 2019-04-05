// aggregrates through raw data to calculate recentMatches and store it into the collection "RecentMatches" in the database
async function recentMatches(db) {

    var options = {
        allowDiskUse: false
    };

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

    var cursor = await db.collection("NALCS").aggregate(pipeline, options).toArray();

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = recentMatches;