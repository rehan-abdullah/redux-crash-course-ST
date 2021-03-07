import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
  deposit,
  withdraw,
  collectInterest,
  deleteAccount,
  toggleAccountType
} from "../actions/bankingActions";

const Banking = () => {
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();

  // const handleDeposit = () => {
  //   dispatch({ type: "DEPOSIT", amount: parseInt(amount, 10) });
  //   setAmount("");
  // };

  const handleDeposit = () => {
    dispatch(deposit(amount));
    setAmount("");
  };

  const handleWithdraw = () => {
    dispatch(withdraw(amount));
    setAmount("");
  };

  const handleCollectInterest = () => {
    dispatch(collectInterest());
  };

  const handleDeleteAccount = () => {
    dispatch(deleteAccount());
  };

  const handleChangeAccount = () => {
    dispatch(toggleAccountType());
  };

  return (
    <div className="form-group my-2">
      <input
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        type="text"
        className="form-control mb-2"
      />
      <button onClick={handleDeposit} className="btn btn-success mr-2">
        Deposit
      </button>
      <button onClick={handleWithdraw} className="btn btn-primary mx-2 my-2">
        Withdraw
      </button>
      <button
        onClick={handleCollectInterest}
        className="btn btn-warning mx-2 my-2"
      >
        Collect Interest
      </button>
      <button
        onClick={handleDeleteAccount}
        className="btn btn-danger mx-2 my-2"
      >
        Delete Account
      </button>
      <button onClick={handleChangeAccount} className="btn btn-secondary my-2">
        Change Account Type
      </button>
    </div>
  );
};

export default Banking;
