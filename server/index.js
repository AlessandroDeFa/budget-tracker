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

// GET

app.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM transactions";
  db.query(sqlGet, (err, result) => {
    res.send(result);
  });
});

// POST

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

// PUT

app.put("/api/update", (req, res) => {
  const id = req.body.id;
  const newAmount = req.body.newAmount;
  const newCategory = req.body.newCategory;
  const newName = req.body.newName;
  const newNote = req.body.newNote;

  const sqlUpdate =
    "UPDATE transactions SET amount = ?, category = ?, name = ?, note = ? WHERE id = ?;";

  try {
    db.query(
      sqlUpdate,
      [newAmount, newCategory, newName, newNote, id],
      (err, result) => {
        if (err) {
          throw err;
        }
        res.status(200).send({ message: "Transaction updated successfully." });
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Failed to update transaction." });
  }
});

// DELETE

app.delete("/api/delete/:id", (req, res) => {
  const id = req.params.id;
  const sqlDelete = "DELETE FROM transactions WHERE id = ?;";
  try {
    db.query(sqlDelete, id, (err, result) => {
      if (err) {
        throw err;
      }
      console.log(result);
      res.status(200).send({ message: "Transaction deleted successfully." });
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Failed to delete the transaction." });
  }
});

app.listen(3001, () => console.log("server running on port 3001"));
