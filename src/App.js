const express = require("express");
const app = express();
const adminAuth = require("./middlewares/auth");

app.get("/admin/getuser",(req, res)=>{
  throw new Error("Something went wrong");
  res.send("get user data")
})

app.use("/",(err, req,res,next)=>{
  if(err){
    res.status(500).send("Internal Server Error")
  }
})

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
