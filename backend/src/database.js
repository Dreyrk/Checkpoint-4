import mongoose from "mongoose";

async function main() {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/checkpoint4")
    .then(() => console.log("MongoDB is connected"));
}
main().catch((err) => console.log(err));

export default main;
