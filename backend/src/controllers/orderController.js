import Orders from "../models/orderModel.js";
import Products from "../models/productModel.js";

const orderController = {
  getAllOrders: async (req, res) => {
    try {
      const allOrders = await Orders.find({});

      res
        .status(200)
        .send({ results: allOrders, totalOrders: allOrders.length });
    } catch (e) {
      console.error(e);
      res.sendStatus(500);
    }
  },
  getOrderById: async (req, res) => {
    const { id } = req.params;
    try {
      const order = await Orders.findById(id);

      res.status(200).send(order);
    } catch (e) {
      console.error(e);
      res.sendStatus(500);
    }
  },
  getOrderByUserId: async (req, res) => {
    const { user_id } = req.params;
    try {
      const orders = await Orders.find({ user_id });

      res.status(200).send({ results: orders, totalOrders: orders.length });
    } catch (e) {
      console.error(e);
      res.sendStatus(500);
    }
  },
  createOrder: async (req, res) => {
    const { address, items, total, user_id } = req.body;
    try {
      const itemstopush = await Products.find({ _id: items._id });

      const order = await Orders.create({
        address,
        total,
        user_id,
        items: itemstopush,
      });

      res.status(201).send(order);
    } catch (e) {
      console.error(e);
      res.sendStatus(500);
    }
  },
};

export default orderController;
