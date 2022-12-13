const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const OngSchema = new Schema({
  id: ObjectId,
  title: String,
  description: String,
  email: String,
  category: String,
});

const OngModel = mongoose.model("ongs", OngSchema);

module.exports = OngModel;
