import React from "react";
import { useSelector } from "react-redux";

const Balance = () => {
  const banking = useSelector((state) => state.banking);

  console.log(banking);

  return (
    <div className="my-4">
      <h1>${banking.balance}</h1>
    </div>
  );
};

export default Balance;
