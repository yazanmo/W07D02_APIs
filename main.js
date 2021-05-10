const express = require("express");

const app = express();
const port = 3000;


const todos = [{ todo: " wake up", isCompleted: false },
 { todo: "Eat Breakfast", isCompleted: false }];

 app.use(express.json());

app.get("/todos",(req,res)=>{

    res.json(todos)
})


app.post("/create/todo",(req,res)=>{

    const todo = req.query.todo
    const isCompleted=req.query.isCompleted
    const todos={todo,isCompleted}

    todo.push()
    res.status(201)
    res.json("user added") 
})


app.listen(port,()=>{

    console.log(`the server run on http://localhost:${port}`)
})