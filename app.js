const express = require("express");
const bodyParser = require("body-parser");

const indexRoutes = require("./routes/index");
const undeadRoutes = require("./routes/undead");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.use(indexRoutes);
app.use(undeadRoutes);






app.listen(3000, "", () => {
    console.log("Pathfinder started.")
});