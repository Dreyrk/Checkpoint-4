import mongoose from "mongoose";

mongoose.Promise = global.Promise;

export const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
});

const Products =
  mongoose.models.Products || mongoose.model("Products", ProductSchema);

export default Products;
