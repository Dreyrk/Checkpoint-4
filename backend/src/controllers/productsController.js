import Products from "../models/productModel.js";

const productsController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Products.find({});

      res.status(200).send({ results: products, totalItems: products.length });
    } catch (e) {
      res.sendStatus(500);
      console.error(e);
    }
  },
  getProductById: async (req, res) => {
    const { id } = req.params;
    try {
      const products = await Products.findById(id);
      res.status(200).send(products);
    } catch (e) {
      res.sendStatus(500);
      console.error(e);
    }
  },
  postProduct: async (req, res) => {
    if (req.body) {
      const {
        name,
        price,
        description,
        note = [1, 2, 3, 4],
        category,
        image_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png",
      } = req.body;
      try {
        const newProduct = await Products.create({
          name,
          price,
          description,
          note,
          category,
          image_url,
        });

        res.sendStatus(201);
        console.log(newProduct);
      } catch (e) {
        res.sendStatus(500);
        console.error(e);
      }
    } else {
      res.sendStatus(400);
    }
  },
  updateProduct: async (req, res) => {
    const { id } = req.params;

    if (req.body && id) {
      const { name, price, description } = req.body;

      try {
        const productUpdated = await Products.findByIdAndUpdate(id, {
          name,
          price,
          description,
          password,
        });

        res.sendStatus(204);
        console.log(productUpdated);
      } catch (e) {
        res.sendStatus(500);
        console.error(e);
      }
    } else {
      res.sendStatus(400);
    }
  },
  deleteProduct: async (req, res) => {
    const { id } = req.params;

    if (id) {
      try {
        const productToDelete = await Products.findByIdAndDelete(id);

        res.sendStatus(204);
      } catch (e) {
        res.sendStatus(500);
        console.error(e);
      }
    } else {
      res.sendStatus(400);
    }
  },
};

export default productsController;
