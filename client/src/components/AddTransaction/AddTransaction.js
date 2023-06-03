import React, { useState, useEffect } from "react";
import "./addTransaction.css";
import { Fab } from "@mui/material";
import { CgMathPlus } from "react-icons/cg";
import { FormTransaction } from "../FormTransaction/FormTransaction";
import { UpdateTransaction } from "../UpdateTransaction/UpdateTransaction";
import { useContext } from "react";
import { ContextApp } from "../../App";
import { AlertMessage } from "../AlertMessage/AlertMessage";

export const AddTransaction = () => {
  const { setFormSubmitted, form, setForm, setErrorAdd, setSuccessAdd } =
    useContext(ContextApp);
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [note, setNote] = useState("");

  const activeForm = () => {
    setForm(!form);
    setAmount(0);
    setCategory("");
    setName("");
    setNote("");
  };

  const [expenses, setExpenses] = useState(true);
  const [income, setIncome] = useState(false);

  //fetch post data from form to server
  function handleSubmit(e) {
    e.preventDefault();
    let error = false;
    if (amount === 0 || amount === "" || !category || !name) {
      error = true;
      setErrorAdd(true);
    }

    if (!error) {
      let updatedAmount = expenses ? -amount : Math.abs(amount);

      setFormSubmitted(true);
      fetch("https://budget-tracker-server.onrender.com/api/insert", {
        method: "POST",
        body: JSON.stringify({
          amount: updatedAmount,
          category: category,
          name: name,
          note: note,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          setAmount(0);
          setCategory("");
          setName("");
          setNote("");
          setSuccessAdd(response);
        })
        .catch((error) => {
          setErrorAdd(error);
          console.error("There was a problem with the fetch operation:", error);
        });
    }
  }

  return (
    <div className="container-add-transaction">
      <div className="text-add-transaction">Add Transaction</div>
      <div className="btn-container">
        <Fab
          onClick={activeForm}
          className="btn-add-transaction"
          color="primary"
          aria-label="add"
        >
          <CgMathPlus className="icon-btn" />
        </Fab>
      </div>
      <FormTransaction
        form={form}
        setForm={setForm}
        amount={amount}
        setAmount={setAmount}
        category={category}
        setCategory={setCategory}
        name={name}
        setName={setName}
        note={note}
        setNote={setNote}
        handleSubmit={(e) => handleSubmit(e)}
        expenses={expenses}
        setExpenses={setExpenses}
        income={income}
        setIncome={setIncome}
      />
      <AlertMessage />
    </div>
  );
};
