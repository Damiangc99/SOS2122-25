const cool = require("cool-ascii-faces");
const express=require("express");
console.log(cool())
const app = express();
const port = process.env.PORT || 8080;

app.get("/cool",(req,res)=>{
    console.log("request /faces route");
    res.send("<html><body><h1>"+cool()+"<h1></h1></body></html>");
});

app.get("/",(req,res)=>{
    console.log("request /time route");
    res.send("<html><body><h1>"+new Date()+"<h1></h1></body></html>");
});


app.listen(port, () =>{
    console.log('Server ready at port {$port}');
});

