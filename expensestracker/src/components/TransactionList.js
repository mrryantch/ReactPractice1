import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transactions } from "./Transactions";
export const TransactionList = () => {
    
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transactions) => (
          <Transactions key={transactions.id} transactions={transactions} /> //prop
        ))}
      </ul>
    </>
  );
};
