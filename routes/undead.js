const express = require("express");
const router = express.Router();

router.get("/undead", (req, res) => {
    res.render("undead.ejs");
});

module.exports = router;