const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/mongodb");
const userRoutes = require("./routes/userRoute");

const cors = require("cors");

const app = express();
dotenv.config();
app.use(cors());

connectDB();

app.use(express.json());

app.use("/", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Api running on port ${PORT}`);
});
