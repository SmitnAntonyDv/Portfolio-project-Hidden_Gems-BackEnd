const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET

function toJWT(data) {
  console.log("what is data?", data)
  console.log("what is jwtSecret", jwtSecret)
  return jwt.sign(data, jwtSecret, { expiresIn: "2h" });
}

function toData(token) {
  return jwt.verify(token, jwtSecret);
}

module.exports = { toJWT, toData };
