const mysql = require("mysql");

const db = mysql.createConnection({
  hostname: "localhost",
  user: "root",
  // masukkin password MySql kalian
  password: "passwordSONYA",
  database: "tesbootcamp",
  port: 3306,
  multipleStatements: true,
});

db.connect((err) => {
  if (err) {
    return console.log(`Error: ${err.message}`);
  }
  console.log(`CONNECTED TO MYSQL SERVER`);
});

module.exports = { db };
