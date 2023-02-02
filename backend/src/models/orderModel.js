import mongoose from "mongoose";
import { ProductSchema } from "./productModel.js";

const OrderSchema = new mongoose.Schema({
  address: {
    street: String,
    town: String,
    postalCode: Number,
  },
  items: [ProductSchema],
  total: Number,
  user_id: String,
});

const Orders = mongoose.models.Orders || mongoose.model("Orders", OrderSchema);

export default Orders;
