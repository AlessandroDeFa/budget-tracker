import React from "react";
import "./addTransaction.css";
import { Fab } from "@mui/material";
import { CgMathPlus } from "react-icons/cg";
import { FormTransaction } from "../FormTransaction/FormTransaction";

export const AddTransaction = () => {
  return (
    <div className="container-add-transaction">
      <div className="text-add-transaction">Add Transaction</div>
      <div>
        <Fab color="primary" aria-label="add">
          <CgMathPlus className="icon-btn" />
        </Fab>
      </div>
      <FormTransaction />
    </div>
  );
};
