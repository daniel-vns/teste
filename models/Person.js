const mongoose = require("mongoose");

const { Schema } = mongoose;

const { serviceSchema } = require("./Service");

const { colorSchema } = require("./Color");

const personSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    colors: {
      type: [colorSchema],
      required: true,
    },
    services: {
      type: [serviceSchema],
    },
  },
  { timestramps: true }
);

const Person = mongoose.model("Person", personSchema);

module.exports = Person;
