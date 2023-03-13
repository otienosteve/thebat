
var admin = require("firebase-admin");
var clusters=[],bats=[],sites=[],enumarator=[],geoloc=[]
var serviceAccount = require("./conservation-programme-firebase-adminsdk-s1tmf-7e9429afa6.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
     //   The database URL depends on the location of the database
    databaseURL: "https://conservation-programme-default-rtdb.firebaseio.com/"
  });
 
pr=console.log

//  function returnData(){

    var db = admin.database();
    var ref = db.ref("/data/");
    
  let data=ref.once("value")
  .then(snapshot => {
    //   console.log("Passed value ", snapshot.val());
      return { data: snapshot.val()}
  })
  .catch(error => {
    console.log("ERROR:\n" + error);
    return { teams: [] };
  });
console.log(Promise.resolve(data).then(data=>console.log(data)))
  

      
    
  
//   function(snap) {
        // return snap.forEach(function(childNodes){
            // var keys=Object.keys(childNodes.val())
            // nodes= childNodes.val()
            // return nodes
            // var cord=[]
            // for( let i of keys){
                // console.log(childNodes.val())
                // clusters.push(childNodes.val()[i]['clusters'])
                //     pr(childNodes.val()[i]['clusters'].map(n=>+n).reduce((a,v)=>a+=v)) //numBats:
                //     bats.push(childNodes.val()[i]['numBats'])
                //     sites.push(childNodes.val()[i]['site'])
                //     cord.push({
                    //         latitude:childNodes.val()[i]['latitude'],
                    //         longitude:childNodes.val()[i]['longitude']
                    //     })
                    // enumarator.push(childNodes.val()[i]["enumerator_name"])
                    
                    // }
                    // geoloc.push(cord)
                    // pr(bats)
                    // pr(cord)
                
                
            // })
        // })
            // }
// pr(returnData())
module.exports= {clusters, bats,sites,enumarator,geoloc}


