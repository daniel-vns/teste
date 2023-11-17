const mongoose = require("mongoose");

const { serviceSchemaSchema } = require("./Service");

const partySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
    services: {
      type: [serviceSchema],
    },
  },
  { timestramps: true }
);

const Party = mongoose.model("Party", partySchema);

module.exports = Party;
