const mongoose = require("mongoose");

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://daniel:daniel123@cluster0.gkaec0a.mongodb.net/?retryWrites=true&w=majority"
    );
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

module.exports = main;
