import mongoose from "mongoose";

mongoose.Promise = global.Promise;

export const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  note: Array,
  category: String,
  image_url: String,
});

const Products =
  mongoose.models.Products || mongoose.model("Products", ProductSchema);

export default Products;
