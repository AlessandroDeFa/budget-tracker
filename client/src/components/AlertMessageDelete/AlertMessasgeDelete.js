import React, { useEffect, useState } from "react";
import "./alertMessageDelete.css";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

import { useContext } from "react";
import { ContextApp } from "../../App";

export const AlertMessasgeDelete = () => {
  const { errorDel, successDel, setErrorDel, setSuccessDel } =
    useContext(ContextApp);
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    if (errorDel || successDel.ok) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        setErrorDel(false);
        setSuccessDel(false);
      }, 3000);
    }
  }, [errorDel, successDel.ok]);

  if (!showAlert) {
    return null;
  }

  if (errorDel) {
    return (
      <Alert className="messageDelete" severity="error">
        <AlertTitle>Error</AlertTitle>
        DELETEEEE <strong>fields</strong> or check that you have entered the
        data correctly
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
};
