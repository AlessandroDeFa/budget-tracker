import React, { useEffect, useState } from "react";
import "./alertMessage.css";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

import { useContext } from "react";
import { ContextApp } from "../../App";

export const AlertMessage = () => {
  const { errorAdd, successAdd, setErrorAdd, setSuccessAdd } =
    useContext(ContextApp);

  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    if (errorAdd || successAdd.ok) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        setErrorAdd(false);
        setSuccessAdd(false);
      }, 3000);
    }
  }, [errorAdd, successAdd.ok]);

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
};
