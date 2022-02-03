// express router
const router = require("express").Router();
const fs = require("fs");

// imports notes
let notes = require("../data/db.json");
let id = notes.length + 1;

//GET notes
router.get("/notes", (req, res) => {
  res.json(notes);
});

//create notes
router.post("/notes", (req, res) => {
  req.body.id = id;
  notes.push(req.body);

  fs.writeFileSync("./data/db.json", JSON.stringify(notes));
  res.json(notes);
});

//DELETE notes
router.delete("/notes/:id", (req, res) => {
  let newNotes = notes.filter((note) => note.id !== id);
  notes = newNotes;
  fs.writeFileSync("./data/db.json", JSON.stringify(newNotes));
  res.json(true);
});

module.exports = router;
