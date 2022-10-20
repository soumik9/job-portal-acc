const jwt = require("jsonwebtoken");

const generateToken = (data) => {
  const payload = { email: data.email, role: data.role, id: data._id };
  const token = jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: "7d" });
  return token;
};

module.exports = generateToken