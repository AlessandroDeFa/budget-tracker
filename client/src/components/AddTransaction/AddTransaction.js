import React, { useState } from "react";
import "./addTransaction.css";
import { Fab } from "@mui/material";
import { CgMathPlus } from "react-icons/cg";
import { FormTransaction } from "../FormTransaction/FormTransaction";

export const AddTransaction = ({ setTransactions, transactions }) => {
  const [form, setForm] = useState(false);
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

  //fetch post data from form to server
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3001/api/insert", {
      method: "POST",
      body: JSON.stringify({
        amount: amount,
        category: category,
        name: name,
        note: note,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <div className="container-add-transaction">
      <div className="text-add-transaction">Add Transaction</div>
      <div className="btn-container">
        <Fab onClick={activeForm} color="primary" aria-label="add">
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
      />
    </div>
  );
};
