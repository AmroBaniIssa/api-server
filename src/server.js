'use strict'
const express = require("express");
const app=express();
// const notFoundHandler=require('./handlers/404');
// const errorHandler=require('./handlers/500');


app.get('/',(req,res)=>{
 res.send("hello worlled");

})


// app.use('*',notFoundHandler);
// app.use(errorHandler);


// function sendRes(req,res){
//     res.send({
//         id:1,
//         name:"amro",
//         email:"aaaaaaaaaaa",
//         time: req.timestamp,
//     });
// }
function start(port){

    app.listen(port,()=>{
        console.log(`server is listen on ${port}`)
    })

}

module.exports={
    start:start,
    app:app,
}