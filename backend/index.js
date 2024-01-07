const express = require("express");
const app = express();
const cors = require("cors");
const dbConnection = require("./dbconnect/index");
const routes = require("./routes/index");
const port = 5000;
app.use(express.json());
app.use("/api/configurations", routes);
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["PUT", "POST"],
    credentials: true,
  })
);
// app.use(
//   cors({
//     origin: "",
//     methods: "GET,PUT,",
//     credentials: true,
//     optionsSuccessStatus: 204,
//   })
// );

dbConnection();
app.listen(port, () => {
  console.log(`port is running at ${port}`);
});
