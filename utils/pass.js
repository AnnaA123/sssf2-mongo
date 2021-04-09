"use strict";
const passport = require("passport");
const Strategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const userModel = require("../models/userModel.js");
const passportJWT = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJWT;

passport.use(
  new Strategy(async (username, password, done) => {
    try {
      const user = userModel.findOne({ username });
      if (user === null) {
        return done(null, false, { message: "Incorrect email" });
      }
      const validate = await bcrypt.compare(password, user.password);
      if (!validate) {
        return done(null, false, { message: "Incorrect password" });
      }

      const strippedUser = user.toObject();
      delete strippedUser.password;
      return done(null, strippedUser, { message: "Logged in succesfully" });
    } catch (err) {
      return done(err);
    }
  })
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: "asd123",
    },
    async (jwtPayload, done) => {
      try {
        const user = await userModel.findById(jwtPayLoad._id, "password -__v");
        if (user !== null) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      } catch (err) {}
    }
  )
);
