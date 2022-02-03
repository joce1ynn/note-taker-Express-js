// direct to html page
const path = require("path");
const router = require("express").Router();

//respond with the HTML
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// if no matching routes then return home page
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
