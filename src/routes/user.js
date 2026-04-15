const express = require("express");
const userRouter = express.Router();
const {userAuth} = require("../middlewares/auth")
const ConnectionRequest = require("../models/connectionRequest")

//get all the pending requests for loggedin user
userRouter.get("/user/requests/recieved",userAuth, async(req,res)=>{
    try {
        const loggedinUser = req.user;
        const connectionRequests = await ConnectionRequest.find({
            toUserId: loggedinUser._id,
            status: "interested"
        }).populate("fromUserId",["firstName","lastName","profilePicture", "skills"])
        res.json({
            message:`Connection Requests of ${loggedinUser.firstName} fetched successfully`,
            data: connectionRequests
        })
    } catch (err) {
        res.status(400).sned("ERROR: "+ err.message)
    }
})

module.exports = userRouter;