const mongoose = require("mongoose");
const dbConnection = () => {
  try {
    mongoose
      .connect("mongodb://localhost:27017/test")
      .then(() => {
        console.log("connection is successfully!");
      })
      .catch((e) => {
        console.log("connection failed!");
      });
  } catch (error) {
    res.status(400).json({
      sucess: false,
      message: "Db connection is failed!",
    });
  }
};
module.exports = dbConnection;
