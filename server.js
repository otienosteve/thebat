const http=require('http');
const fs=require('fs')
const server=http.createServer((req,res)=>{
    console.log("a request was made...",req.url, req.method)
    // res.write("This is node")
    res.setHeader("Content-Type","text/html")
    // res.end()
    fs.readFile('./views/index.html',(err, data)=>{
console.log(data)
if(err){
console.log(err)
res.end()
}else{
    res.write(data)
}
    })

})
server.listen(3000,'localhost',()=>{
    console.log("Server Running on port 3000....")
})