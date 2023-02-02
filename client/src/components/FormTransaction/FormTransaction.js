import React, { useState } from "react";
import "./formtransaction.css";
import { TextField, Autocomplete, Button } from "@mui/material";
import { RxCross2 } from "react-icons/rx";

export const FormTransaction = ({
  form,
  setForm,
  amount,
  setAmount,
  category,
  setCategory,
  name,
  setName,
  note,
  setNote,
}) => {
  const data = ["ciao", "prova"];

  const [expenses, setExpenses] = useState(false);
  const [income, setIncome] = useState(false);

  const incomeAmount = () => {
    setIncome(true);
    setExpenses(false);
  };

  const expensesAmount = () => {
    setExpenses(true);
    setIncome(false);
  };

  return (
    <div className={`form-transaction ${form ? "open" : "closed"}`}>
      <form action="" className="form">
        <div className="exit-form">
          <Button
            onClick={() => setForm(!form)}
            variant="text"
            className="btn-exit-form"
          >
            <RxCross2 className="icon-exit-form" />
          </Button>
        </div>
        <div>
          <div className="form-exp-inc">
            <Button
              variant={`${expenses ? "contained" : "outlined"}`}
              onClick={expensesAmount}
            >
              Expenses
            </Button>
            <Button
              variant={`${income ? "contained" : "outlined"}`}
              onClick={incomeAmount}
            >
              Income
            </Button>
          </div>
          <div className="form-space-btw">
            <span className="eur-form">EUR</span>
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="number"
              value={amount}
              inputProps={{
                className: `amount-form ${
                  income ? "income-form" : "expenses-form"
                }`,
              }}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>
        <div className="container-input">
          <div className="text-general">general</div>
          <div>
            <div className="input">
              <span>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={data}
                  onChange={(event, value) => setCategory(value)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Category"
                      variant="filled"
                      value={category}
                      InputLabelProps={{ className: "textfield" }}
                      onChange={(e) => setCategory(e.target.value)}
                    />
                  )}
                />
              </span>
            </div>
            <div className="input">
              <span>
                <TextField
                  id="filled-basic"
                  label="Name"
                  variant="filled"
                  className="textfield-1"
                  InputLabelProps={{ className: "textfield" }}
                  inputProps={{ className: "textfield-1" }}
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </span>{" "}
            </div>
            <div className="input">
              <span>
                <TextField
                  // id="filled-basic"
                  label="Note"
                  variant="filled"
                  className="textfield-1"
                  InputLabelProps={{ className: "textfield" }}
                  inputProps={{ className: "textfield-1" }}
                  multiline
                  maxRows={4}
                  onChange={(e) => setNote(e.target.value)}
                  value={note}
                />
              </span>{" "}
            </div>
          </div>
        </div>
        <div className="btn-form">
          <Button variant="contained">Save</Button>
        </div>
      </form>
    </div>
  );
};
