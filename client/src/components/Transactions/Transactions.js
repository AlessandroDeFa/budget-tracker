import React, { useEffect, useState } from "react";
import "./transactions.css";
import { Transaction } from "../Transaction/Transaction";
import { UpdateTransaction } from "../UpdateTransaction/UpdateTransaction";
import { useContext } from "react";
import { ContextApp } from "../../App";

export const Transactions = () => {
  const { transactions, formUpdate, setFormUpdate, setFormSubmitted } =
    useContext(ContextApp);
  const [newAmount, setNewAmount] = useState(0);
  const [newCategory, setNewCategory] = useState("");
  const [newName, setNewName] = useState("");
  const [newNote, setNewNote] = useState("");
  const [idUpdate, setIdUpdate] = useState(0);

  const [expenses, setExpenses] = useState(true);
  const [income, setIncome] = useState(false);

  //fetch new data to server

  function handleSubmitUpdate(e, idUpdate) {
    e.preventDefault();
    let error = false;
    if (newAmount === 0 || newAmount === "" || !newCategory || !newName) {
      error = true;
      console.error("error: Empty field(s)");
    }
    if (!error) {
      let updatedAmount = expenses ? -newAmount : Math.abs(newAmount);

      setFormSubmitted(true);
      fetch("http://localhost:3001/api/update", {
        method: "PUT",
        body: JSON.stringify({
          newAmount: updatedAmount,
          newCategory: newCategory,
          newName: newName,
          newNote: newNote,
          id: idUpdate,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          setNewAmount(0);
          setNewCategory("");
          setNewName("");
          setNewNote("");
          return response.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    }
  }

  const activeFormUpdate = (id) => {
    setFormUpdate(!formUpdate);
    setIdUpdate(id);
  };

  return (
    <div className="container-transactions">
      <UpdateTransaction
        newAmount={newAmount}
        setNewAmount={setNewAmount}
        newCategory={newCategory}
        setNewCategory={setNewCategory}
        newName={newName}
        setNewName={setNewName}
        newNote={newNote}
        setNewNote={setNewNote}
        expenses={expenses}
        setExpenses={setExpenses}
        income={income}
        setIncome={setIncome}
        handleSubmitUpdate={(e) => handleSubmitUpdate(e, idUpdate)}
        idUpdate={idUpdate}
      />
      <div>
        <span className="title-transactions">Transactions</span>
        <div></div>
      </div>
      <div className="option-transactions">
        <div className="left-info">
          <div>Category</div>
          <div>Date</div>
          <div>Name</div>
        </div>
        <div className="right-info">
          <div>Amount</div>
          <div>Note</div>
        </div>
      </div>

      <ul className="ul-transaction">
        {transactions
          .sort((a, b) => b.id - a.id)
          .map((transaction) => (
            <Transaction
              key={transaction.id}
              transaction={transaction}
              activeFormUpdate={activeFormUpdate}
            />
          ))}
      </ul>
    </div>
  );
};
