const router = require("express").Router();
const { getAllNotes, getNoteById, createNote, updateNote, deleteNote } = require("../controllers/notesController.js");

router.get("/", getAllNotes);

router.get("/:id", getNoteById);

router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

module.exports = router;