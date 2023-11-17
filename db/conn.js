const mongoose = require("mongoose");

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://daniel:daniel123@clusterjalasoft.pur72kf.mongodb.net/?retryWrites=true&w=majority"
    );
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

module.exports = main;
