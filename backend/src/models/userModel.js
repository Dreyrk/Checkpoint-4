import mongoose from "mongoose";
import { ProductSchema } from "./productModel.js";

const UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: { type: String, required: true },
  hashedPassword: { type: String, required: true },
  avatar_url: String,
  address: String,
  favs: [ProductSchema],
});

const Users = mongoose.models.Users || mongoose.model("Users", UserSchema);

export default Users;
