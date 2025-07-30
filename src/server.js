const express = require("express");
const app = express();
const PORT = 3000;
const notesRoutes = require("./routes/notesRoutes");
const { connectDB } = require('./config/db')
require('dotenv').config();

connectDB();
app.use(express.json());

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
