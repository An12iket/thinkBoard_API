const express = require("express");
const app = express();
const PORT = 3000;
const notesRoutes = require("./routes/notesRoutes");
const { connectDB } = require("./config/db");
const { default: rateLimit } = require("./middleware/rateLimiter");
require("dotenv").config();

app.use(express.json());
app.use(rateLimit);

app.use("/api/notes", notesRoutes);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
    process.exit(1);
  });
