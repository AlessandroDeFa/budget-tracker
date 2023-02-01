import React from "react";
import "./balance.css";
import { RiBankFill } from "react-icons/ri";

export const Balance = () => {
  return (
    <div className="balance">
      <div className="title-balance">Balance</div>
      <div className="amount">
        <span>18.700,00</span>
        <span>EUR</span>
      </div>
      <div className="text-available">Available</div>
      <div className="container-icon">
        <RiBankFill className="icon-balance" />
      </div>
    </div>
  );
};
