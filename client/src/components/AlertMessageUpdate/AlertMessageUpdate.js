import React, { useEffect, useState } from "react";
import "./alertMessageUpdate.css";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

import { useContext } from "react";
import { ContextApp } from "../../App";

export const AlertMessageUpdated = () => {
  const { errorUp, successUp, setErrorUp, setSuccessUp } =
    useContext(ContextApp);

  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    if (errorUp || successUp.ok) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        setErrorUp(false);
        setSuccessUp(false);
      }, 3000);
    }
  }, [errorUp, successUp.ok]);

  if (!showAlert) {
    return null;
  }

  if (errorUp) {
    return (
      <Alert className="messageUpdate" severity="error">
        <AlertTitle>Error</AlertTitle>
        Please fill out all the required <strong>fields</strong> or check that
        you have entered the data correctly.
      </Alert>
    );
  }

  if (successUp.ok) {
    return (
      <Alert className="messageUpdate" severity="success">
        <AlertTitle>Success</AlertTitle>
        <strong>Transaction</strong> updated successfully!
      </Alert>
    );
  }
};
