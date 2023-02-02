import argon2 from "argon2";

const changePassword = async (req, res, next) => {
  const { id } = req.params;

  if (req.body.password && id) {
    const { password } = req.body;
    try {
      argon2
        .hash(password, hashingOptions)
        .then((hashedPassword) => {
          console.log(user.password);
          delete user.password;
          user.hashedPassword = hashedPassword;
          console.log(user.hashedPassword);

          next();
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(500);
        });
    } catch (e) {
      res.sendStatus(500);
      console.error(e);
    }
  } else {
    next();
  }
};

export default changePassword;
