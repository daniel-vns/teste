const mongoose = require("mongoose");

const { Schema } = mongoose;

const colorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestramps: true }
);

const Color = mongoose.model("Color", colorSchema);

module.exports = {
  Color,
  colorSchema,
};
