const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "budget_tracker_db",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connect mysql");
});

app.use(cors());
app.use(express.json());

app.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM transactions";
  db.query(sqlGet, (err, result) => {
    res.send(result);
  });
});

app.post("/api/insert", (req, res) => {
  const amount = req.body.amount;
  const category = req.body.category;
  const name = req.body.name;
  const note = req.body.note;
  const sqlInsert =
    "INSERT INTO transactions (amount, category, name, note) VALUES (?,?,?,?);";
  try {
    db.query(sqlInsert, [amount, category, name, note], (err, result) => {
      if (err) {
        throw err;
      }
      res.status(200).send({ message: "Transaction inserted successfully." });
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Failed to insert transaction." });
  }
});

//put

//delete

app.listen(3001, () => console.log("server running on port 3001"));
