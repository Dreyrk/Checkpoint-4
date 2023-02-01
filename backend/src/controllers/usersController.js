import Users from "../models/userModel.js";

const usersController = {
  getAllUsers: async (req, res) => {
    try {
      const allUsers = await Users.find({});

      res.status(200).send({ results: allUsers, totalItems: allUsers.length });
    } catch (e) {
      res.sendStatus(500);
      console.error(e);
    }
  },
  getUserById: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await Users.findById(id);
      res.status(200).send(user);
    } catch (e) {
      res.sendStatus(500);
      console.error(e);
    }
  },
  postUser: async (req, res) => {
    if (req.body) {
      const {
        firstname,
        lastname,
        email,
        avatar_url,
        address,
        hashedPassword,
      } = req.body;

      try {
        const newUser = await Users.create({
          firstname,
          lastname,
          email,
          hashedPassword,
          avatar_url,
          address,
        });

        res.sendStatus(201);
      } catch (e) {
        res.sendStatus(500);
        console.error(e);
      }
    } else {
      res.sendStatus(400);
    }
  },
  updateUser: async (req, res) => {
    const { id } = req.params;

    if (req.body && id) {
      const { firstname, lastname, email, avatar_url, address, favs } =
        req.body;

      try {
        const userUpdated = await Users.findByIdAndUpdate(id, {
          firstname,
          lastname,
          email,
          avatar_url,
          address,
          favs,
        });

        res.sendStatus(204);
      } catch (e) {
        res.sendStatus(500);
        console.error(e);
      }
    } else {
      res.sendStatus(400);
    }
  },
  deleteUser: async (req, res) => {
    const { id } = req.params;

    if (id) {
      try {
        const userToDelete = await Users.findByIdAndDelete(id);

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

export default usersController;
