import Users from "../Models/UserModel.js";

const loginController = {
  getUserByEmailWithPasswordAndPassToNext: async (req, res, next) => {
    const { email } = req.body;

    try {
      const userLogin = await Users.find({ email });
      if (userLogin != null) {
        req.user = userLogin[0];
        console.log(userLogin[0]);
        next();
      } else {
        res.sendStatus(401);
      }
    } catch (e) {
      console.error(e);
      res.status(500).send("Error retrieving data from database");
    }
  },
};

export default loginController;
