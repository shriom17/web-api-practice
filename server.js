const express = require("express");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.json({message: "Welcome!"});
});
app.listen(3000, () =>{
    console.log("Server is running on Port 3000");
});