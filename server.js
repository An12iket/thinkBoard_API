const express = require("express");
const app = express();
const PORT = 3000;

app.get("/api/notes", (req, res) => {
  res.status(200).json({ message: "Notes fetched successfully" });
});

app.post("/api/notes", (req, res) => {
  res.status(201).json({ message: "Note created successfully" });
});

app.put("/api/notes/:id", (req, res) => {
  res.status(200).json({ message: "Note updated successfully" });
});

app.delete("/api/notes/:id", (req, res) => {
  res.status(200).json({ message: "Note deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
