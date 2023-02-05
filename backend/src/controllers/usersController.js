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
  insertFavs: async (req, res) => {
    const items = req.body;
    const { user_id } = req.params;
    console.log(items);

    try {
      const user = await Users.findById(user_id);

      console.log(user);

      if (Array.isArray(items)) {
        items.map((item) => user.favs.push(item));
      } else {
        await user.favs.push(items);
      }

      res.status(201).send(user);
    } catch (e) {
      console.error(e);
      res.sendStatus(500);
    }
  },
  removeFavs: async (req, res) => {
    const items = req.body;
    const { user_id } = req.params;
    console.log(items);

    try {
      const user = Users.findById(user_id);
      console.log(user);

      if (Array.isArray(items)) {
        const newArrayOfFavs = items.map((item) =>
          user.favs.filter((favs) => favs !== item)
        );

        await Users.findOneAndUpdate(user_id, { favs: newArrayOfFavs });
      } else {
        const newFavs = await user.favs.filter((favs) => favs !== items);
        console.log(newFavs);

        await Users.findOneAndUpdate(user_id, { favs: newFavs });
      }

      res.sendStatus(204);
    } catch (e) {
      console.error(e);
      res.sendStatus(500);
    }
  },
};

export default usersController;
