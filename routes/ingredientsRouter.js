var express=require('express');
var ingredientsRouter=express.Router();
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

// localhost:3000/books/allbooks
ingredientsRouter.get('/',(req,res)=>
{
    db.collection('Ingredients').find().toArray((err,data)=>
    {
        if(err)
            console.log("Can not find book data");
        else{
            res.send(data);
        }
    })
})
ingredientsRouter.post('/',(req,res)=>
{
     db.collection("Ingredients").insertOne(req.body,(err,result)=>
     {
         if(err)
         {
             //While sending the response to Angular app we must send it in the json format
             res.status(500).send({error:err})
             console.log("Inside add book on the server.. error page")
         }
         else{
             console.log("Inside add book on the server.. success page")
             res.send({message:"Book added succesfully..."})
         }
     })
 })

module.exports = ingredientsRouter;