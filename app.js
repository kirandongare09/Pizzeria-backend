const express=require('express');

const path=require('path');

const PORT=3000;

const ingredientsRouter=require('./routes/ingredientsRouter');
const pizzaRouter=require('./routes/pizzaRouter');
var cors=require('cors');
const app=express();

app.use(cors());

 app.use(express.static(path.join(__dirname,'/public/')));


app.set('views','./src/views');
app.set('view engine','ejs');



app.use('/ingredients',ingredientsRouter)
app.use('/pizza',pizzaRouter)
app.get('/',(req,res)=>{
    res.render('index',{title:'Globomantics',data:['a','b','c']});
});
// app.get('/',(req,res)=>{
//     res.send('Hello from my app');
// });
app.listen(PORT,()=>{
    console.log(`express app listening to port ${PORT}`)
})
