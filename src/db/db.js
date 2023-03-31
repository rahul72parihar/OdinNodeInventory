const mongoose = require("mongoose");

const mongoDB = "mongodb://127.0.0.1/my_database";

main().catch((err) => console.log(err));
async function main() {
  console.log("connecting started");
  await mongoose.connect(mongoDB);
}
