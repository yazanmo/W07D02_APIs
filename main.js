const express = require("express");

const app = express();
const port = 3000;


const todos = [{ todo: " wake up", isCompleted: false },
 { todo: "Eat Breakfast", isCompleted: false }];

 app.use(express.json());

app.get("/todos",(req,res)=>{

    res.status(201);

    res.json(todos);
})


app.post("/create/todo",(req,res)=>{

    const newtodo = { todo: req.body.todo,
         isCompleted: req.body.isCompleted };

    todo.push(newtodo)
    res.status(201)
    res.json("todos") 
})


app.listen(port,()=>{

    console.log(`the server run on http://localhost:${port}`)
})