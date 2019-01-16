const express = require("express");
const app = express();
const mysql = require("mysql");
const mysql2 = require("mysql2");
const sequelize = require("sequelize");
const db = require("./models");


// For jawsDB
var connection;
if (process.env.JAWSDB_URL) {
    // DB is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // DB is local on localhost
    connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'office'
    });
}

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;


const PORT = process.env.PORT || 8080;
app.use(express.static("public"))

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./routes/html-routes.js")(app);

db.sequelize.sync({}).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });




module.exports = connection;