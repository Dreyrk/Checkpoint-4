import mongoose from "mongoose";
import { ProductSchema } from "./productModel";

const OrderSchema = new mongoose.Schema({
  address: String,
  items: [ProductSchema],
  total: Number,
  user_id: String,
});

const Orders = mongoose.models.Orders || mongoose.model("Orders", OrderSchema);

export default Orders;
