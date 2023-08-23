
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Sign-up-data")
  .then(() => {
    console.log("connected");
  })
  .catch((error) => {
    console.log(error);
  });

const newSchema = new mongoose.Schema({
  msg: {
    type: String,
    required: true,
  },
  names: {
    type: String,
  },
  email: {
    type: String,
  },
});

const collection = mongoose.model("collection", newSchema);

module.exports = collection;
