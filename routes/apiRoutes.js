// express router
const router = require("express").Router();
const fs = require("fs");

// 'uuid' npm package for unique id:
// const { v4: uuidv4 } = require("uuid");

// imports notes
// let notes = require("../data/db.json"); REQUIRE ONLY READ ONCE

//GET notes
router.get("/notes", (req, res) => {
  let notes = JSON.parse(fs.readFileSync("./data/db.json", "utf8"));
  res.json(notes);
});

//create notes
router.post("/notes", (req, res) => {
  let notes = JSON.parse(fs.readFileSync("./data/db.json", "utf8"));
  let id = notes.length + 1;
  req.body.id = id;
  // req.body.id = uuidv4();
  notes.push(req.body);

  fs.writeFileSync("./data/db.json", JSON.stringify(notes));
  res.json(notes);
});

//DELETE notes
router.delete("/notes/:id", (req, res) => {
  let id = req.params.id;
  let notes = JSON.parse(fs.readFileSync("./data/db.json", "utf8"));
  let newNotes = notes.filter((note) => note.id !== id);

  fs.writeFileSync("./data/db.json", JSON.stringify(newNotes));
  res.end();
});

module.exports = router;
