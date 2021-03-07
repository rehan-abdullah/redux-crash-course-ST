import React from "react";
import { useSelector } from "react-redux";

const AccountStatus = () => {
  const store = useSelector((state) => state);

  return (
    <div className="mt-5">
      <h1>
        {store.banking.isSavingsAccount
          ? "Savings Account"
          : "Checking Account"}
      </h1>
    </div>
  );
};

export default AccountStatus;
