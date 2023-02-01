import React from "react";
import "./transaction.css";

export const Transaction = () => {
  return (
    <li>
      <div className="container-transaction">
        <div className="left-info-transaction">
          <div>Calio</div>
          <div>19-02-2002</div>
          <div>Football</div>
        </div>
        <div className="right-info-transaction">
          <div className="amount-transaction income-transaction">3.000,00</div>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,
          </div>
        </div>
      </div>
    </li>
  );
};
