const fs = require("fs");
// 'uuid' npm package for unique id:
const { v4: uuidv4 } = require("uuid");

// express router
const router = require("express").Router();

// imports notes
let notes = require("../data/db.json");

//GET notes
router.get("/notes", (req, res) => {
  res.json(notes).catch((err) => res.status(500).json(err));
});

//create notes
router.post("/notes", (req, res) => {
  req.body.id = uuidv4();
  notes.push(req.body);

  fs.writeFileSync("../db/db.json", JSON.stringify(notes));
  res.json(notes);
});

//DELETE notes

module.exports = router;

// write notes, read notes, removing notes
// fs funtion, fs.readfile , fs.writefile,
// makes normal function to a promise: util.promisify

// write a method to remove db.json file,
// create a class called STORE: read write get add removeb (5 methods)
