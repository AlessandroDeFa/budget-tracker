import React, { useState } from "react";
import "./addTransaction.css";
import { Fab } from "@mui/material";
import { CgMathPlus } from "react-icons/cg";
import { FormTransaction } from "../FormTransaction/FormTransaction";

export const AddTransaction = () => {
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
      />
    </div>
  );
};
