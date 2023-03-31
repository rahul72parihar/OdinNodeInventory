var express = require("express");
const http = require("http");

const Item = require("../models/item");
var router = express.Router();

router.get("/products", async (req, res) => {
  let productsArr = await Item.find({});
  res.render("products", { productsArr });
});

router.post("/addItem", async (req, res, next) => {
  try {
    const name = req.body.name;
    const category = req.body.category;
    const price = req.body.price;
    const image = req.body.image;

    const awesome_instance = await new Item({
      name: name,
      price: price,
      updated: Date.now(),
      category: category,
      image: image,
    });

    await awesome_instance.save();

    res.status(201).send("Item Added Successfully");
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

router.get("/deleteproduct*", async (req, res) => {
  const itemId = req._parsedUrl.query;
  await Item.deleteOne({ _id: itemId });
  res.redirect("/products");
});

module.exports = router;
