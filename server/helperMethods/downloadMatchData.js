var fs = require('fs');
var Crawler = require("crawler");
xlsxj = require("xlsx-to-json");

// downloads raw match data and converts it into a json file
async function downloadMatchData() {

    // download .xlsx file containing match data for current split
    await downloadXLSXData();
    // convert matchdata.xlsx file to json
    await sleep(15000);
    await convertXLSXToJSON();

}

// download raw match data for the current split.
// raw data will be in a file called matchdata.xlsx
async function downloadXLSXData() {

     var c = await new Crawler({
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
        filename:"matchdata.xlsx"        
    });

}

// convert matchdata.xlsx into a jason file called data.json
async function convertXLSXToJSON() {

    // convert .xlsx to json
    await xlsxj({
        input: "matchdata.xlsx", 
        output: "data.json"
      }, function(err, result) {
        if(err) {
          console.error(err);
        }else {
          //console.log("done");
        }
    });

}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = downloadMatchData;

