import express from "express";
import productsController from "./controllers/productsController.js";
import usersController from "./controllers/usersController.js";
import auth from "./auth/auth.js";
import loginController from "./auth/login.js";

const router = express.Router();

const {
  getAllProducts,
  getProductById,
  postProduct,
  updateProduct,
  deleteProduct,
} = productsController;

const { getAllUsers, getUserById, postUser, updateUser, deleteUser } =
  usersController;

const { hashPassword, verifyPassword, verifyToken } = auth;
const { getUserByEmailWithPasswordAndPassToNext } = loginController;

router.get("/", (req, res, next) => {
  res.status(200).send("Welcome !");
});

//GET

//PRODUCTS
router.get("/api/products", getAllProducts);
router.get("/api/products/:id", getProductById);

//USERS
router.get("/api/users", getAllUsers);
router.get("/api/users/:id", getUserById);

//POST

router.post("/api/products", verifyToken, postProduct);

//REGISTER
router.post("/api/users", hashPassword, postUser);
//LOGIN
router.post(
  "/api/login",
  getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

//PUT

router.put("/api/products/:id", updateProduct);
router.put("/api/users/:id", verifyToken, hashPassword, updateUser);

//DELETE

router.delete("/api/products", verifyToken, deleteProduct);
router.delete("/api/users", deleteUser);

export default router;
