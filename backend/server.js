const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/mongodb");
const userRoutes = require("./routes/userRoute");
const path = require("path");

const cors = require("cors");

const app = express();
dotenv.config();
app.use(cors());

connectDB();

app.use(express.json());

app.use("/", userRoutes);

// --------------------------deployment------------------------------

__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

// --------------------------deployment------------------------------

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Api running on port ${PORT}`);
});
