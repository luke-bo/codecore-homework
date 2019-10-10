// add the request handlers for "sign_in" and "/" maybe "/welcome" if you have it
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("root");
});

module.exports = router;