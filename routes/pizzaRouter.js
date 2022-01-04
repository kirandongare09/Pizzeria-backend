var express=require('express');
var pizzaRouter=express.Router();
var mongoClient=require('mongodb').MongoClient;
const url="mongodb://localhost:27017";
const dbName="Pizzeria";

mongoClient.connect(url,(err,connection)=>
{
    if(err)
        console.log("Failed to connecet");
    else{
        db=connection.db(dbName);
    }
})


pizzaRouter.get('/',(req,res)=>
{
    db.collection('Pizza').find().toArray((err,data)=>
    {
        if(err)
            console.log("Can not find book data");
        else{
            res.send(data);
        }
    })
})



module.exports = pizzaRouter;