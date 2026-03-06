const express = require("express");
const app = express();
const adminAuth = require("./middlewares/auth");

app.use(
  "/admin",
  adminAuth
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
