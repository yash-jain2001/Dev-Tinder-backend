const express = require("express");
const app = express();

app.use("/about",(req, res)=>{
    res.send("response made from about ")
})
app.use("/contact",(req, res)=>{
    res.send("response made from contact ")
})
app.use("/login",(req, res)=>{
    res.send("response made from login ")
})

app.use("/",(req, res)=>{
    res.send("response made from me ")
})




app.listen(3000,()=>{
    console.log("Server started on port 3000");
});