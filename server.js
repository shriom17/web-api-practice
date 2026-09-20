const express = require("express");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.json({message: "Welcome!"});
});
app.listen(3000, () =>{
    console.log("Server is running on Port 3000");
});

//GET
const users = [
    {id: 1, name: "John Doe"},  
    {id: 2, name: "Jane Doe"},
    {id: 3, name: "Bob Smith"},
    {id: 4, name: "Alice Johnson"},
    {id: 5, name: "Charlie Brown"}
]

app.get("/users", (req,res) => {
    res.json(users);
})
app.get("/users/:id", (req,res) =>{
    res.json(users.find(user => user.id === parseInt(req.params.id)));
})