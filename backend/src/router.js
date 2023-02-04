import express from "express";
import productsController from "./controllers/productsController.js";
import usersController from "./controllers/usersController.js";
import orderController from "./controllers/orderController.js";
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

const {
  getAllUsers,
  getUserById,
  postUser,
  updateUser,
  deleteUser,
  insertFavs,
} = usersController;

const { getAllOrders, getOrderById, createOrder, getOrderByUserId } =
  orderController;

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

//ORDERS

router.get("/api/orders", getAllOrders);
router.get("/api/orders/:id", getOrderById);
router.get("/api/orders/user/:user_id", getOrderByUserId);
router.post("/api/orders", createOrder);

//POST

router.post("/api/products", postProduct);

//USER
router.post("/favs/insert/:user_id", insertFavs);
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
router.put("/api/users/:id", hashPassword, updateUser);

//DELETE

router.delete("/api/products", verifyToken, deleteProduct);
router.delete("/api/users", deleteUser);

export default router;
