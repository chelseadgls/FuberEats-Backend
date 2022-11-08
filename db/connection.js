import mongoose from "mongoose";
import chalk from "chalk";

const URL =
  process.env.MONGO_URL || "mongodb://127.0.0.1:27017/fubar-eats-store";

let mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.set("returnOriginal", false);

// mongoose.connection.on("connected", () => {
//   console.log(chalk.bold("connected from MongoDB!"));
// });

mongoose.connect(URL, mongooseConfig).catch((err) => {
  console.log(`Error connection go MongoDB: ${err.message}`);
});

mongoose.connection.on("disconnected", () => {
  console.log(chalk.bold("Disconnected from MongoDB!"));
});

mongoose.connection.on("error", (err) => {
  console.log(chalk.red(`MongoDB connection error: ${err}`));
});

export default mongoose.connection;
