const express = require("express");
const requestRouter = express.Router();
const {userAuth} = require("../middlewares/auth.js");

requestRouter.post("/sendConnectionRequest",userAuth, async (req,res)=>{
  console.log("sending request")
  const user = req.user

  res.send("request sent by "+ user.firstName)
})



module.exports = requestRouter