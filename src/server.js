
const express=require('express')
const app= express()
const  { Parser } =require('json2csv') ;
// const serverless=require('serverless-http')
// const router=express.Router()

var admin = require("firebase-admin");
var serviceAccount = require("./conservation-programme-firebase-adminsdk-s1tmf-7e9429afa6.json");




// console.log(Parser)
app.set('view engine', 'ejs')
app.listen(3000,'0.0.0.0',()=>{
    console.log("Server running")
})
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    //   The database URL depends on the location of the database
    databaseURL: "https://conservation-programme-default-rtdb.firebaseio.com/"
});

let datafound=false

var db = admin.database();
var ref = db.ref("/data/");
const  clusters=[],bats=[],sites=[],enumarators=[],geoloc=[],allData=[]

ref.once("value",function(snap) {
     snap.forEach(function(childNodes){
        let  keys=Object.keys(childNodes.val())
        let  cord=[]
        datafound=true
        console.log("Data avilable") 
        for( let i of keys){
            // console.log(childNodes.val())
            allData.push(childNodes.val()[i])
            clusters.push(childNodes.val()[i]['clusters'])
            // pr(childNodes.val()[i]['clusters'].map(n=>+n).reduce((a,v)=>a+=v)) //numBats:
            bats.push(childNodes.val()[i]['numBats'])
            sites.push(childNodes.val()[i]['site'])
            cord.push({
                latitude:childNodes.val()[i]['latitude'],
                longitude:childNodes.val()[i]['longitude']
            })
            enumarators.push(childNodes.val()[i]["enumerator_name"])
            
        }
        let site=[...new Set(sites)]
        // bats=bats.map(n=>+n).reduce((a,v)=>a+=v)
        geoloc.push(cord)
        // pr(bats)
        // pr(cord)
        
        bat=bats.map(n=>+n).reduce((a,v)=>a+=v)
        app.get('/',(req,res)=>{
            
            res.render('index',{site:site,enumarators:enumarators,bats:bat,allData:allData})
            
        })
        app.get('/bats',(req,res)=>{
            bat=bats.map(n=>+n).reduce((a,v)=>a+=v)
            res.render('bats',{bats:bat})
        })
        app.get('/clusters',(req,res)=>{
            
            res.render('clusters')
        })
        app.get('/enumarators',(req,res)=>{
            let enums=new Set(enumarators)
            enums=[...enums]
            res.render('enumarators',{enumarators:enums})
            
            
        })
        app.get('/sites',(req,res)=>{
            
            res.render('sites',{sites:site})
            
        })
        app.get('/csvdata',(req,res)=>{
            const csvdata= new Parser()
            const parsed=csvdata.parse(allData)
            res.setHeader("Content-Type", "text/csv");
            res.setHeader("Content-Disposition", "attachment; filename=data.csv");
            res.status(200).end(parsed);
        })
        app.use(function(req,res,next){ 
            res.status(404).render('404'); 
        }); 
    
})
})


if(datafound){
    app.use(function(req,res,next){ 
        res.status(404).render('404'); 
    }); 
}











































































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