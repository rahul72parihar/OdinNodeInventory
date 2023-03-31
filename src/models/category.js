const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Category = new Schema({
  category: [String],
});

module.exports = mongoose.model("Category", Category);
