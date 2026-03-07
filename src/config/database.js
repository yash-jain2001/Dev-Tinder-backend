const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://jainjainpriyanshu2001:Chet%407370@namaste-node.a4dmlnm.mongodb.net/devTinder",
  );
};

connectDB()
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("db not connected", err));

// const dns = require("dns");
// dns.setServers(["8.8.8.8", "8.8.4.4"]);
// const { MongoClient } = require("mongodb");
// const url =
//   "mongodb+srv://jainjainpriyanshu2001:Chet%407370@namaste-node.a4dmlnm.mongodb.net/";
// const client = new MongoClient(url);

// const dbName = "helloWorld";

// async function main() {
//   await client.connect();
//   console.log("Connected to MongoDB");
//   const db = client.db(dbName);
//   const collection = db.collection("user");

// const data = {
//   id:2,
//   name: "yash",
//   city: "dehradun",
//   country: "India"
// }
// // insert data
// const insertResult = await collection.insertMany([data])
// console.log(insertResult)

//   // read data
// const findResult= await collection.find({}).toArray();
// console.log(findResult);

//   return "done";
// }
// main()
//   .then(() => console.log("done"))
//   .catch((err) => console.log(err));
