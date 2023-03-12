
// bats CRUD
// Get Bats
var admin = require("firebase-admin");

// Fetch the service account key JSON file contents
var serviceAccount = require("./conservation-programme-firebase-adminsdk-s1tmf-7e9429afa6.json");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
//   The database URL depends on the location of the database
  databaseURL: "https://conservation-programme-default-rtdb.firebaseio.com/"
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
let data;
pr=console.log
var db = admin.database();
var ref = db.ref("/data/");
ref.once("value", function(snap) {
    snap.forEach(function(childNodes){
        let keys=Object.keys(childNodes.val())
    //     childNodes.val().forEach(function(chldren){
    //  console.log(chldren)
    //     })
    var cord=[]
    for( let i of keys){
        pr(childNodes.val()[i]['clusters'])
        pr(childNodes.val()[i]['clusters'].map(n=>+n).reduce((a,v)=>a+=v)) //numBats:
        pr(childNodes.val()[i]['numBats']) 
        pr(childNodes.val()[i]['site'])
        cord.push({
            latitude:childNodes.val()[i]['latitude'],
            longitude:childNodes.val()[i]['longitude']
        })
        pr(childNodes.val()[i]["enumerator_name"])
        pr(childNodes.val()[i]["enumerator_name"])

    }
    
    pr(cord)
        })
//         const enumerators = Object.keys(snap);
// const formValues = [];

// enumerators.forEach((enumerator) => {
// const forms = snap[enumerator];

// Object.keys(forms).forEach((formId) => {
// const form = forms[formId];
// const formFields = {
// enumeratorName: form.enumerator_name,
// formData: form.form_data,
// site: form.site,
// date: form.date,
// latitude: form.latitude,
//       longitude: form.longitude,
//       numBats: form.numBats,
//       questionOneAnswer: form.data_question_one_answer || form.data__question_one_answer,
//       questionTwoAnswer: form.data_question_two_answer || form.data__question_two_answer,
//       questionThreeAnswer: form.data_question_three_answer || form.data__question_three_answer,
//       clusters: form.clusters
//     };
    
//     formValues.push(form);
//   });
// });

// console.log(formValues);

//     //     for(i of childNodes.val()
    //     childNodes.val()
    //   }
    
// for (let i=0; i<=(childNodes.keys.length); i++) {

//     console.log(childNodes[childNodes.keys[i]])


// }
    });
// });

// const options = {
//     method: 'GET',
//     mode: 'no-cors'
//   };
// const bat_data=document.getElementById('bat_data')
// console.log(bat_data)
// const bat=document.getElementById('bats').addEventListener('click',(e)=>{
//     alert(`you clicked ${e.target.innerHTML}`)
    // var bat_data=document.querySelector('#bat_data')
    // console.log(bat_data)
// fetch('https://cat-fact.herokuapp.com/facts').then(res=>res.json()).then(data=>{


// console.log(data)
// bat_data.append(JSON.stringify(data))


// })

// })
// create Bat
// data={
// 
// }
// fetch('https://cat-fact.herokuapp.com/facts').then(res=>res.json()).then(dat=>console.log(data))
// 
// 
// 
// 
// 




// enumerators-CRUD

// Clusters-CRUD-clust

// Sites-CRUD-sites