const express = require("express");
const connectDB = require("./config/database.js");
const User = require("./models/user");
const app = express();
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user");


app.use(express.json());
app.use(cookieParser());

app.use("/",authRouter);
app.use("/",profileRouter);
app.use("/",requestRouter);
app.use("/",userRouter);






// to get some data from the database, to get single user using emailid
// app.get("/user", async (req, res) => {
//   const userEmail = req.body.email;
//   try {
//     const user = await User.findOne({ email: userEmail });
//     if (!user) {
//       return res.status(404).send("User not found");
//     }
//     res.status(200).send(user);
//   } catch (err) {
//     console.log(err);
//     res.status(500).send("User not found");
//   }
// });

// // to get data from database, to get all users
// app.get("/feed", async (req, res) => {
//   try {
//     const users = await User.find({});
//     res.status(200).send(users);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Users not found");
//   }
// });

// //to delete data from DB
// app.delete("/user", async (req, res) => {
//   const userId = req.body.userId;
//   try {
//     const user = await User.findByIdAndDelete(userId);
//     res.send("user deleted successfully");
//   } catch (error) {
//     console.log(error);
//     res.send("user not deleted");
//   }
// });

// // update data of user
// app.patch("/user/:userId", async (req, res) => {
//   const userId = req.params?.userId;
//   const data = req.body;

//   try {
//     // Add "userId" to allowedUpdates since it's being sent in the req.body
//     const allowedUpdates = ["age", "gender", "about", "skills"];

//     const isUpdateAllowed = Object.keys(data).every((key) =>
//       allowedUpdates.includes(key),
//     );
//     if (!isUpdateAllowed) {
//       throw new Error("Updates not allowed");
//     }
//     if (data.skills.length > 10) {
//       throw new Error("Skills should not be more than 10");
//     }
//     const user = await User.findByIdAndUpdate(userId, data, {
//       runValidators: true,
//     });
//     res.send("User updated successfully");
//   } catch (err) {
//     res.send("something went wrong " + err);
//   }
// });

connectDB()
  .then(() => {
    console.log("Database connected");
    app.listen(3000, () => {
      console.log("Server started on port 3000");
    });
  })
  .catch((err) => {
    console.log("db not connected", err);
  });
