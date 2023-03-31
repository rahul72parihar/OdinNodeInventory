const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Item = new Schema({
  name: String,
  price: Number,
  updated: { type: Date, default: Date.now() },
  category: String,
  image: String,
});

module.exports = mongoose.model("Item", Item);
