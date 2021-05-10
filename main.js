const express = require("express");

const app = express();
const port = 3000;


/*app.get("/",(req,res)=>{
    res.send("hello")
})

app.get("/home",(req,res)=>{
    res.send("home page")
})*/

const todos = [{ todo: " wake up", isCompleted: false },
 { todo: "Eat Breakfast", isCompleted: false }];

app.get("/todos",(req,res)=>{

    res.
})


app.listen(port,()=>{

    console.log(`the server run on http://localhost:${port}`)
})