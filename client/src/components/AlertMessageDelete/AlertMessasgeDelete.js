import React, { useEffect, useState } from "react";
import "./alertMessageDelete.css";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

import { useContext } from "react";
import { ContextApp } from "../../App";

export const AlertMessasgeDelete = () => {
  const {
    errorDel,
    successDel,
    setErrorDel,
    setSuccessDel,
    setSuccesDelBudget,
    successDelBudget,
    successDelExpenseBudget,
  } = useContext(ContextApp);
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    if (
      errorDel ||
      successDel.ok ||
      successDelBudget.ok ||
      successDelExpenseBudget.ok
    ) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        setErrorDel(false);
        setSuccessDel(false);
        setSuccesDelBudget(false);
      }, 3000);
    }
  }, [
    errorDel,
    successDel.ok,
    successDelBudget.ok,
    successDelExpenseBudget.ok,
  ]);

  if (!showAlert) {
    return null;
  }

  if (errorDel) {
    return (
      <Alert className="messageDelete" severity="error">
        <AlertTitle>Error</AlertTitle>
        Something went <strong>wrong.</strong>Please try again later.
      </Alert>
    );
  }

  if (successDel.ok) {
    return (
      <Alert className="messageDelete" severity="success">
        <AlertTitle>Success</AlertTitle>
        <strong>Transaction</strong> deleted successfully!
      </Alert>
    );
  }

  if (successDelBudget.ok) {
    return (
      <Alert className="messageDelete" severity="success">
        <AlertTitle>Success</AlertTitle>
        <strong>Budget</strong> deleted successfully!
      </Alert>
    );
  }

  if (successDelExpenseBudget.ok) {
    return (
      <Alert className="messageDelete" severity="success">
        <AlertTitle>Success</AlertTitle>
        <strong>Expense</strong> deleted successfully!
      </Alert>
    );
  }
};
