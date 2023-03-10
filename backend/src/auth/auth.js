import argon2 from "argon2";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const auth = {
  hashPassword: (req, res, next) => {
    const user = req.body;
    if (user.password) {
      argon2
        .hash(user.password, hashingOptions)
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
    } else {
      next();
    }
  },
  verifyPassword: (req, res) => {
    console.log(req.user);

    argon2
      .verify(req.user.hashedPassword, req.body.password, hashingOptions)
      .then((isVerified) => {
        const _id = req.user._id.toString();
        console.log(_id.toString());
        if (isVerified) {
          console.log(JWT_SECRET);
          const token = jwt.sign({ sub: _id }, JWT_SECRET, {
            algorithm: "HS512",
          });
          delete req.user.hashedPassword;
          res.send({ token, user: req.user });
        } else {
          res.sendStatus(401);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },
  verifyToken: (req, res, next) => {
    try {
      const [type, token] = req.headers.authHeader.split(" ");
      if (type !== "Bearer") throw new Error("Only Bearer token allowed");
      req.payload = jwt.verify(token, JWT_SECRET);
      next();
    } catch (err) {
      console.error(err);
      res.sendStatus(401);
    }
  },
};

export default auth;
