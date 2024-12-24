const mongoose = require("mongoose");

function connetToDb() {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log("db connection established successfully"))
    .catch((err) => console.log("db connection error:", err));
}

module.exports = connetToDb;
