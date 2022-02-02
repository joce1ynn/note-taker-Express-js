// express router
const router = require("express").Router();
const fs = require("fs");

// 'uuid' npm package for unique id:
const { v4: uuidv4 } = require("uuid");

// imports notes
let notes = require("../data/db.json");

//GET notes
router.get("/notes", (req, res) => {
  res.json(notes);
});

//create notes
router.post("/notes", (req, res) => {
  req.body.id = uuidv4();
  notes.push(req.body);

  fs.writeFileSync("./db/db.json", JSON.stringify(notes));
  res.json(notes);
});

//DELETE notes
router.delete("/notes/:id", (req, res) => {
  let id = req.params.idl;
  let newNotes = notes.filter((note) => note.id !== id);
  fs.writeFileSync("./db/db.json", JSON.stringify(newNotes));
  res.json(newNotes);
});

module.exports = router;
