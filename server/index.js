const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
require("dotenv").config();
const PORT = 3001;

const db = mysql.createConnection({
  host: process.env.MYSQL_ADDON_HOST,
  user: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
  database: process.env.MYSQL_ADDON_DB,
});

function handleDisconnect() {
  db.connect((err) => {
    if (err) {
      console.log("error when connecting to db:", err);
      setTimeout(handleDisconnect, 2000);
    }
  });

  db.on("error", (err) => {
    console.log("db error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

handleDisconnect();

// db.connect((err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Connect mysql");
// });

app.use(cors());
app.use(express.json());

setInterval(function () {
  db.query("SELECT 1");
}, 5000);

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

      res.status(200).send({ message: "Transaction deleted successfully." });
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Failed to delete the transaction." });
  }
});

// GET BUDGETS

app.get("/api/get-budgets", (req, res) => {
  const sqlGet = "SELECT * FROM budgets";
  db.query(sqlGet, (err, result) => {
    res.send(result);
  });
});

// POST BUDGETS

app.post("/api/insert-budget", (req, res) => {
  const amountBudget = req.body.amountBudget;
  const categoryBudget = req.body.categoryBudget;

  const sqlInsert =
    "INSERT INTO budgets (amount_budgets, category_budgets) VALUES (?,?);";
  try {
    db.query(sqlInsert, [amountBudget, categoryBudget], (err, result) => {
      if (err) {
        throw err;
      }
      res.status(200).send({ message: "Budgets inserted successfully." });
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Failed to insert budgets." });
  }
});

// DELETE BUDGETS

app.delete("/api/delete-budget/:id", (req, res) => {
  const id = req.params.id;
  const sqlDelete = "DELETE FROM budgets WHERE id = ?;";
  const sqlDeleteExpenses = "DELETE FROM expenses WHERE budget_id = ?;";
  try {
    db.query(sqlDeleteExpenses, id, (err, result) => {
      if (err) {
        throw err;
      }
    });
    db.query(sqlDelete, id, (err, result) => {
      if (err) {
        throw err;
      }

      res.status(200).send({ message: "Budget deleted successfully." });
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Failed to delete the budget." });
  }
});

// GET EXPENSE-BUDGET

app.get("/api/get-expense-budget", (req, res) => {
  const sqlGet = "SELECT * FROM expenses";
  db.query(sqlGet, (err, result) => {
    res.send(result);
  });
});

// POST EXPENSE-BUDGET

app.post("/api/insert-expense-budget", (req, res) => {
  const getIdBudget = req.body.getIdBudget;
  const amountExpense = req.body.amountExpense;
  const nameExpense = req.body.nameExpense;

  const sqlInsert =
    "INSERT INTO expenses (budget_id, expense_amount, expense_name) VALUES (?,?,?);";
  try {
    db.query(
      sqlInsert,
      [getIdBudget, amountExpense, nameExpense],
      (err, result) => {
        if (err) {
          throw err;
        }
        res.status(200).send({ message: "Expense inserted successfully." });
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Failed to insert expense." });
  }
});

// DELETE EXPENSE BUDGET

app.delete("/api/delete-expense/:id", (req, res) => {
  const id = req.params.id;
  const sqlDelete = "DELETE FROM expenses WHERE expense_id = ?;";
  try {
    db.query(sqlDelete, id, (err, result) => {
      if (err) {
        throw err;
      }

      res.status(200).send({ message: "Expense deleted successfully." });
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Failed to delete the expense." });
  }
});

app.listen(process.env.MYSQL_ADDON_PORT || PORT, () =>
  console.log(`server running on ${PORT}`)
);
