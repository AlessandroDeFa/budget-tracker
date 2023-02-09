import React from "react";
import "./infoBudget.css";
import { Button } from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { IoMdTrash } from "react-icons/io";

export const InfoBudget = ({ infoBudget, setInfoBudget, categoryBudget }) => {
  return (
    <div className={`info-budget ${infoBudget ? "open" : "closed"}`}>
      <div className="info-container">
        <div className="title-info">
          <div>
            <div>
              Expenses - <span>{categoryBudget}</span>
            </div>
          </div>
          <div className="exit-info-budget">
            <Button
              onClick={() => setInfoBudget(!infoBudget)}
              variant="text"
              className="btn-exit-info"
            >
              <RxCross2 className="icon-exit-info" />
            </Button>
          </div>
        </div>
        <div className="container-expenses">
          <ul className="container-list-expenses">
            <li className="list-expenses">
              <div>nome expenses</div>
              <div>
                <span>100 eur</span>
                <Button variant="text" className="btn-exit-info">
                  <IoMdTrash className="icon-del" />
                </Button>
              </div>
            </li>
          </ul>
        </div>
        <div className="container-btn-delete">
          <Button color="error" variant="outlined">
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};
