const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

function connectWithRetry() {
  connection.connect((err) => {
    if (err) {
      console.log("MySQL no está listo, reintentando en 5 segundos...");
      setTimeout(connectWithRetry, 5000);
    } else {
      console.log("Conectado a MySQL");
    }
  });
}

connectWithRetry();

module.exports = connection;
