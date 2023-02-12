import React from "react";
import "./addExpenseBudget.css";
import { TextField, Button } from "@mui/material";
import { RxCross2 } from "react-icons/rx";

export const AddExpenseBudget = ({
  formAddExpense,
  setFormAddExpense,
  setAmountExpense,
  setNameExpense,
  nameExpense,
  amountExpense,
  handleSubmitExpenseBudget,
}) => {
  return (
    <div className={`form-addexpense ${formAddExpense ? "open" : "closed"}`}>
      <form action="" className="form">
        <div className="title-new-expense">
          <div>New Expense</div>

          <Button
            onClick={() => setFormAddExpense(!formAddExpense)}
            variant="text"
            className="btn-exit-form"
          >
            <RxCross2 className="icon-exit-form" />
          </Button>
        </div>
        <div>
          <div className="form-space-btw">
            <span className="eur-form">EUR</span>
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="number"
              value={amountExpense}
              inputProps={{
                className: `amount-form`,
              }}
              onChange={(e) => setAmountExpense(e.target.value)}
            />
          </div>
        </div>
        <div className="container-input">
          <div className="text-general">general</div>
          <div>
            <div className="input">
              <span>
                <TextField
                  label="Name"
                  variant="filled"
                  className="textfield-1"
                  InputLabelProps={{ className: "textfield" }}
                  inputProps={{ className: "textfield-1", maxLength: 12 }}
                  multiline
                  maxRows={4}
                  onChange={(e) => setNameExpense(e.target.value)}
                  value={nameExpense}
                />
              </span>{" "}
            </div>
          </div>
        </div>
        <div className="btn-form">
          <Button
            type="submit"
            onClick={(e) => handleSubmitExpenseBudget(e)}
            variant="contained"
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};
