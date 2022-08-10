const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

const generateToken = (id) => {
  const token = jwt.sign({ id }, process.env.SECRET, { expiresIn: "2d" });
  return token;
};

module.exports = {
  registerUser: (data) => {
    return new Promise(async (resolve, reject) => {
      const { name, username, email, password } = data;

      if (!name || !username || !email || !password) {
        reject("Please add all fields");
      }

      //   check if userExits
      const userExists = await User.findOne({ email });
      if (userExists) {
        reject("User already exists");
      }

      const salt = await bcrypt.genSalt(10);

      const HashedPassword = await bcrypt.hash(password, salt);

      const user = await User.create({
        name,
        username,
        email,
        password: HashedPassword,
      });

      if (user) {
        resolve({
          id: user._id,
          name: user.name,
          username: user.username,
          token: generateToken(user._id),
        });
      } else {
        reject("Server error");
      }
    });
  },

  loginUser: (data) => {
    return new Promise(async (resolve, reject) => {
      const { email, password } = data;

      const user = await User.findOne({ email });

      if (user && (await bcrypt.compare(password, user.password))) {
        resolve({
          id: user._id,
          name: user.name,
          username: user.username,
          token: generateToken(user._id),
        });
      } else {
        reject("Incorrect email or password");
      }
    });
  },
};
