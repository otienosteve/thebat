
const express=require('express')
const app= express()
var admin = require("firebase-admin");
var clusters=[],bats=[],sites=[],enumarators=[],geoloc=[]
var serviceAccount = require("./conservation-programme-firebase-adminsdk-s1tmf-7e9429afa6.json");
app.set('view engine', 'ejs')
                app.listen(3000)
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
     //   The database URL depends on the location of the database
    databaseURL: "https://conservation-programme-default-rtdb.firebaseio.com/"
  });
  pr=console.log
  var db = admin.database();
  var ref = db.ref("/data/");
  ref.once("value",function(snap) {
     snap.forEach(function(childNodes){
        var keys=Object.keys(childNodes.val())
         
        var cord=[]
        for( let i of keys){
            console.log(childNodes.val())
            clusters.push(childNodes.val()[i]['clusters'])
                pr(childNodes.val()[i]['clusters'].map(n=>+n).reduce((a,v)=>a+=v)) //numBats:
                bats.push(childNodes.val()[i]['numBats'])
                sites.push(childNodes.val()[i]['site'])
                cord.push({
                        latitude:childNodes.val()[i]['latitude'],
                        longitude:childNodes.val()[i]['longitude']
                    })
                enumarators.push(childNodes.val()[i]["enumerator_name"])
                
                }
                let site=[...new Set(sites)]
                
                geoloc.push(cord)
                pr(bats)
                pr(cord)
                
                app.get('/',(req,res)=>{
                  
                    res.render('index',{site:site,enumarators:enumarators,bats:bats})
                
                })
                app.get('/bats/',(req,res)=>{
                bats=bats.map(n=>+n).reduce((a,v)=>a+=v)
                    res.render('bats',{bats:bats})
                })
                app.get('/clusters',(req,res)=>{
                
                res.render('clusters')
                })
                app.get('/enumarators',(req,res)=>{
                res.render('enumarators',{enumerator:enumarator})
                
                
                })
                app.get('/sites',(req,res)=>{
                
                res.render('sites',{site:site})

                })
            
        })
    })











































































// const http=require('http');
// const fs=require('fs')
// const server=http.createServer((req,res)=>{
//     console.log("a request was made...",req.url, req.method)
//     // res.write("This is node")
//     res.setHeader("Content-Type","text/html")
//     // res.end()
//     fs.readFile('./views/index.html',(err, data)=>{
// console.log(data)
// if(err){
// console.log(err)
// res.end()
// }else{
//     res.write(data)
// }
//     })

// })
// server.listen(3000,'localhost',()=>{
//     console.log("Server Running on port 3000....")
// })