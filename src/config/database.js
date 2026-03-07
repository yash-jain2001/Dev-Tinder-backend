const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://jainjainpriyanshu2001:Chet%407370@namaste-node.a4dmlnm.mongodb.net/devTinder",
  );
  // console.log("db connected");
};

module.exports = connectDB;
