const express = require("express");
const app = express();
const mysql = require("mysql");
const mysql2 = require("mysql2");
const sequelize = require("sequelize");
const db = require("./models");






const PORT = process.env.PORT || 8080;
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

db.sequelize.sync({}).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
})



