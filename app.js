const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req, res) => {
  res.send("Hello I am Server");
});

app.post("/", async (req, res) => {
  const { msg, names, email } = req.body;
  const data = {
    msg: msg,
    name: names,
    email: email,
  };

  await collection.insertMany([data]);
});

app.listen(3000, (err) => {
  if (err) {
    throw err;
  } else {
    console.log("Server Running on Port::3000");
  }
});
