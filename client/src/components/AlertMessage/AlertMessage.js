import React, { useEffect, useState } from "react";
import "./alertMessage.css";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

import { useContext } from "react";
import { ContextApp } from "../../App";

export const AlertMessage = () => {
  const {
    errorAdd,
    successAdd,
    setErrorAdd,
    setSuccessAdd,
    successAddBudget,
    setSuccessAddBudget,
    setSuccessAddExpenseBudget,
    successAddExpenseBudget,
  } = useContext(ContextApp);

  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    if (
      errorAdd ||
      successAdd.ok ||
      successAddBudget.ok ||
      successAddExpenseBudget.ok
    ) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        setErrorAdd(false);
        setSuccessAdd(false);
        setSuccessAddBudget(false);
        setSuccessAddExpenseBudget(false);
      }, 3000);
    }
  }, [
    errorAdd,
    successAdd.ok,
    successAddBudget.ok,
    successAddExpenseBudget.ok,
  ]);

  if (!showAlert) {
    return null;
  }

  if (errorAdd) {
    return (
      <Alert className="message" severity="error">
        <AlertTitle>Error</AlertTitle>
        Please fill out all the required <strong>fields</strong> or check that
        you have entered the data correctly.
      </Alert>
    );
  }

  if (successAdd.ok) {
    return (
      <Alert className="message" severity="success">
        <AlertTitle>Success</AlertTitle>
        <strong>Transaction</strong> inserted successfully!
      </Alert>
    );
  }

  if (successAddBudget.ok) {
    return (
      <Alert className="message" severity="success">
        <AlertTitle>Success</AlertTitle>
        <strong>Budget</strong> inserted successfully!
      </Alert>
    );
  }

  if (successAddExpenseBudget.ok) {
    return (
      <Alert className="message" severity="success">
        <AlertTitle>Success</AlertTitle>
        <strong>Expense</strong> inserted successfully!
      </Alert>
    );
  }
};
