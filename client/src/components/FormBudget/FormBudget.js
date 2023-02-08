import React from "react";
import "./formBudget.css";
import data from "../FormTransaction/FormTransaction";
import { TextField, Autocomplete, Button } from "@mui/material";
import { RxCross2 } from "react-icons/rx";

export const FormBudget = ({
  formBudget,
  setFormBudget,
  amountBudget,
  setAmountBudget,
  categoryBudget,
  setCategoryBudget,
  handleSubmitBudget,
}) => {
  return (
    <div className={`form-budget ${formBudget ? "open" : "closed"}`}>
      <form action="" className="form">
        <div className="exit-form-budget">
          <Button
            onClick={() => setFormBudget(!FormBudget)}
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
              value={amountBudget}
              inputProps={{
                className: `amount-form`,
              }}
              onChange={(e) => setAmountBudget(e.target.value)}
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
                  onChange={(event, value) => setCategoryBudget(value)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Category *"
                      variant="filled"
                      value={categoryBudget}
                      InputLabelProps={{ className: "textfield" }}
                      onChange={(e) => setCategoryBudget(e.target.value)}
                    />
                  )}
                />
              </span>
            </div>
          </div>
        </div>
        <div className="btn-form">
          <Button
            type="submit"
            onClick={(e) => handleSubmitBudget(e)}
            variant="contained"
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};
