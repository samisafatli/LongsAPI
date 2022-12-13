const mongoose = require("mongoose");

async function startDB() {
  await mongoose.connect(
    "mongodb+srv://admin:admin@clusterlongs.upraqsa.mongodb.net/test"
  );
}

module.exports = startDB;
