const express = require("express");
const app = express();

app.use(
  "/admin",
  (req, res, next) => {
    const token = "abc"
    const isAuthorized = token==='abc'
    if(isAuthorized){
      next();
    }else{
      res.status(403).send("Unauthorized");
    }  
  }
);

app.get("/admin/getuser",(req,res)=>{
  res.send("get user data")
})
app.get("/admin/deleteuser",(req,res)=>{
  res.send("delete user data")
})

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
