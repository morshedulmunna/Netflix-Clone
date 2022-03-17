const express = require("express");
const app = express();
const PORT = 8800;

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connect");
  })
  .catch((err) => {
    console.log("DB Error Find", err);
  });

app.use(express.json());

app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log("Backend Server is running", PORT);
});
