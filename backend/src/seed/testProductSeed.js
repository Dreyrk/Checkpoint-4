import mongoose from "mongoose";
import Products from "../models/productModel.js";
import items from "../data/test.json" assert { type: "json" };

mongoose
  .connect("mongodb://127.0.0.1:27017/checkpoint4", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => Products.deleteMany({}))
  .then(() => Products.insertMany(items.products.data))
  .then(() => {
    mongoose.connection.close();
  });
