var admin = require("firebase-admin");
var clusters=[],bats=[],sites=[],enumarator=[],geoloc=[]
var serviceAccount = require("./conservation-programme-firebase-adminsdk-s1tmf-7e9429afa6.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  //   The database URL depends on the location of the database
    databaseURL: "https://conservation-programme-default-rtdb.firebaseio.com/"
  });
 
pr=console.log
var db = admin.database();
var ref = db.ref("/data/");
ref.once("value", async function(snap) {
   snap.forEach(function(childNodes){
        let keys=Object.keys(childNodes.val())

    let cord=[]
    for( let i of keys){
        
    clusters=childNodes.val()[i]['clusters']
        pr(childNodes.val()[i]['clusters'].map(n=>+n).reduce((a,v)=>a+=v)) //numBats:
        bats.push(childNodes.val()[i]['numBats'])
        sites.push(childNodes.val()[i]['site'])
        cord.push({
            latitude:childNodes.val()[i]['latitude'],
            longitude:childNodes.val()[i]['longitude']
        })
    enumarator.push(childNodes.val()[i]["enumerator_name"])

    }
    geoloc.push(cord)
    pr(bats)
    pr(cord)
    module.exports= {clusters, bats,sites,enumarator,geoloc}
        })
        // pr(sites)
    });



