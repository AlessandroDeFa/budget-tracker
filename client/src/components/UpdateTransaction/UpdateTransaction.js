import React from "react";
import "./updateTransaction.css";
import { TextField, Autocomplete, Button } from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { useContext } from "react";
import { ContextApp } from "../../App";
import data from "../FormTransaction/FormTransaction";

export const UpdateTransaction = ({
  newAmount,
  setNewAmount,
  newCategory,
  setNewCategory,
  newName,
  setNewName,
  newNote,
  setNewNote,
  expenses,
  setExpenses,
  income,
  setIncome,
  handleSubmitUpdate,
  idUpdate,
}) => {
  const { formUpdate, setFormUpdate } = useContext(ContextApp);
  const incomeAmount = () => {
    setIncome(true);
    setExpenses(false);
  };

  const expensesAmount = () => {
    setExpenses(true);
    setIncome(false);
  };
  return (
    <div
      className={`form-update-transaction ${formUpdate ? "open" : "closed"}`}
    >
      <form action="" className="form">
        <div className="exit-form">
          <Button
            onClick={() => setFormUpdate(!formUpdate)}
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
              value={newAmount}
              inputProps={{
                className: `amount-form ${
                  income ? "income-form" : "expenses-form"
                }`,
              }}
              onChange={(e) => setNewAmount(e.target.value)}
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
                  onChange={(event, value) => setNewCategory(value)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Category *"
                      variant="filled"
                      value={newCategory}
                      InputLabelProps={{ className: "textfield" }}
                      onChange={(e) => setNewCategory(e.target.value)}
                    />
                  )}
                />
              </span>
            </div>
            <div className="input">
              <span>
                <TextField
                  id="filled-basic"
                  label="Name *"
                  variant="filled"
                  className="textfield-1"
                  InputLabelProps={{ className: "textfield" }}
                  inputProps={{ className: "textfield-1", maxLength: 12 }}
                  onChange={(e) => setNewName(e.target.value)}
                  value={newName}
                />
              </span>{" "}
            </div>
            <div className="input">
              <span>
                <TextField
                  label="Note"
                  variant="filled"
                  className="textfield-1"
                  InputLabelProps={{ className: "textfield" }}
                  inputProps={{ className: "textfield-1", maxLength: 40 }}
                  multiline
                  maxRows={4}
                  onChange={(e) => setNewNote(e.target.value)}
                  value={newNote}
                />
              </span>{" "}
            </div>
          </div>
        </div>
        <div className="btn-form">
          <Button
            type="submit"
            onClick={(e) => handleSubmitUpdate(e, idUpdate)}
            variant="contained"
          >
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
};
