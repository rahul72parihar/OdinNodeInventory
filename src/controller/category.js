var express = require("express");
var router = express.Router();

const Category = require("../models/category");
const Item = require("../models/item");

router.get("/addData", async (req, res) => {
  const temp = await Category.find({ _id: "6425a43eecc267b791955d47" });
  res.render("addData", { categoryArray: temp[0].category });
});

router.post("/addCategory", async (req, res) => {
  try {
    const category = req.body.category;

    const query = { _id: "6425a43eecc267b791955d47" };

    const doc = await Category.findByIdAndUpdate(
      "6425a43eecc267b791955d47",
      { $push: { category: category } },
      { new: true, upsert: true }
    );
    res.status(201).send("Category Added Successfully");
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

router.post("/deleteCategory", async (req, res, next) => {
  try {
    const category = req.body.category;

    const query = { _id: "6425a43eecc267b791955d47" };

    const doc = await Category.findByIdAndUpdate(
      "6425a43eecc267b791955d47",
      { $pull: { category: category } },
      { new: true, upsert: true }
    );
    res.status(201).send("Category Deleted Successfully");
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

module.exports = router;
