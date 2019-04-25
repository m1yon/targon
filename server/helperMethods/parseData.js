var fs = require('fs');
const moment = require('moment-msdate');

// parses data.json file and stores the raw data into the database
async function parseData(LCSCollection) {

    // clear collection
    await LCSCollection.remove({});
    
    //parse through json file and store data into the database
    await fs.readFile('data.json', 'utf8', async function (err, data) {
        if (err) throw err;
        var obj = await JSON.parse(data).forEach(async function(data) {
          if (data.league == "LCS") {
            data.gameid = parseInt(data.gameid);
            data.date = parseFloat(data.date);
            data.dateString = moment.fromOADate(data.date).format('L');
            data.date = moment.fromOADate(data.date);
            data.date = data.date._d
            data.patchno = parseFloat(data.patchno);
            data.playerid = parseInt(data.playerid);
            data.gamelength = parseFloat(data.gamelength);
            data.result = parseInt(data.result);
            data.k = parseInt(data.k);
            data.d = parseInt(data.d);
            data.a = parseInt(data.a);
            if (data.d == 0)
                data.kda = data.k + data.a;
            else
                data.kda = (data.k + data.a) / data.d;  
            data.teamkills = parseInt(data.teamkills);
            data.teamdeaths = parseInt(data.teamdeaths);
            if (data.doubles != '')
                data.doubles = parseInt(data.doubles);
            if (data.triples != '')
                data.triples = parseInt(data.triples);
            if (data.quadras != '')
                data.quadras = parseInt(data.quadras);
            if (data.pentas != '')
                data.pentas = parseInt(data.pentas);
            data.fb = parseInt(data.fb);
            data.fbassist = parseInt(data.fbassist);
            data.fbvictim = parseInt(data.fbvictim);
            data.fbtime = parseFloat(data.fbtime);
            data.kpm = parseFloat(data.kpm);
            data.okpm = parseFloat(data.okpm);
            data.ckpm = parseFloat(data.ckpm);
            data.fd = parseInt(data.fd);
            data.fdtime = parseFloat(data.fdtime);
            data.oppdragkills = parseInt(data.oppdragkills);
            data.teamdragkills = parseInt(data.teamdragkills);
            data.elementals = parseInt(data.elementals);
            data.oppelementals = parseInt(data.oppelementals);
            data.firedrakes = parseInt(data.firedrakes);
            data.waterdrakes = parseInt(data.waterdrakes);
            data.earthdrakes = parseInt(data.earthdrakes);
            data.airdrakes = parseInt(data.airdrakes);
            data.elders = parseInt(data.elders);
            data.oppelders = parseInt(data.oppelders);
            data.herald = parseInt(data.herald);
            if (isNaN(data.herald))
                data.herald = 0;
            data.heraldtime = parseFloat(data.heraldtime);
            if (isNaN(data.heraldtime))
                data.heraldtime = 0;
            data.ft = parseInt(data.ft);
            data.fttime = parseFloat(data.fttime);
            data.firstmidouter = parseInt(data.firstmidouter);
            data.firsttothreetowers = parseInt(data.firsttothreetowers);
            data.teamtowerkills = parseInt(data.teamtowerkills);
            data.opptowerkills = parseInt(data.opptowerkills);
            data.fbaron = parseInt(data.fbaron);
            if (isNaN(data.fbaron))
                data.fbaron = 0;
            data.fbarontime = parseFloat(data.fbarontime);
            if (isNaN(data.fbarontime))
                data.fbarontime = 0;
            data.teambaronkills = parseInt(data.teambaronkills);
            data.oppbaronkills = parseInt(data.oppbaronkills);
            data.dmgtochamps = parseInt(data.dmgtochamps);
            data.dmgtochampsperminute = parseFloat(data.dmgtochampsperminute);
            data.dmgshare = parseFloat(data.dmgshare);
            if (isNaN(data.dmgshare))
                data.dmgshare = 0;
            if (data.earnedgoldshare != '')
                data.earnedgoldshare = parseFloat(data.earnedgoldshare);
            data.wards = parseInt(data.wards);
            data.wpm = parseFloat(data.wpm);
            data.wardshare = parseInt(data.wardshare);
            data.wardkills = parseInt(data.wardkills);
            data.wcpm = parseFloat(data.wcpm);
            data.visionwards = parseInt(data.visionwards);
            data.visionwardbuys = parseInt(data.visionwardbuys);
            if (data.visiblewardclearrate != '')
                data.visiblewardclearrate = parseFloat(data.visiblewardclearrate);
            if (data.invisiblewardclearrate != '')
                data.invisiblewardclearrate = parseFloat(data.invisiblewardclearrate);
            data.totalgold = parseInt(data.totalgold);
            data.earnedgpm = parseFloat(data.earnedgpm);
            data.goldspent = parseInt(data.goldspent);
            data.gspd = parseFloat(data.gspd);
            data.minionkills = parseInt(data.minionkills);
            data.monsterkills = parseInt(data.monsterkills);
            data.monsterkillsownjungle = parseInt(data.monsterkillsownjungle);
            data.monsterkillsenemyjungle = parseInt(data.monsterkillsenemyjungle);
            data.cspm = parseFloat(data.cspm);
            data.goldat10 = parseInt(data.goldat10);
            data.oppgoldat10 = parseInt(data.oppgoldat10);
            data.gdat10 = parseInt(data.gdat10);
            data.goldat15 = parseInt(data.goldat15);
            data.oppgoldat15 = parseInt(data.oppgoldat15);
            data.gdat15 = parseInt(data.gdat15);
            data.xpat10 = parseInt(data.xpat10);
            data.oppxpat10 = parseInt(data.oppxpat10);
            data.xpdat10 = parseInt(data.xpdat10);
            data.csat10 = parseInt(data.csat10);
            data.oppcsat10 = parseInt(data.oppcsat10);
            data.csdat10 = parseInt(data.csdat10);
            data.csat15 = parseInt(data.csat15);
            data.oppcsat15 = parseInt(data.oppcsat15);
            data.csdat15 = parseInt(data.csdat15);
            await LCSCollection.save(data);
            await sleep(150);
          }
        });
      });

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = parseData;