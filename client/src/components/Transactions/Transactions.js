import React from "react";
import "./transactions.css";

export const Transactions = () => {
  return (
    <div className="container-transaction">
      <div>
        <div>
          <span className="title-transactions">Transactions</span>
          <div></div>
        </div>
        <div className="option-transactions">
          <div className="left-info">
            <div>Category</div>
            <div>Date</div>
            <div>Name</div>
          </div>
          <div className="right-info">
            <div>Amount</div>
            <div>Note</div>
          </div>
        </div>
        {/* component transaction */}
      </div>
    </div>
  );
};
