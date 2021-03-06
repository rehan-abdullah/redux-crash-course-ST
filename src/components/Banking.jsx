import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Banking = () => {
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();

  const handleDeposit = () => {
    dispatch({ type: "DEPOSIT", amount: parseInt(amount, 10) });
    setAmount("");
  };

  const handleWithdraw = () => {
    dispatch({ type: "WITHDRAW", amount: parseInt(amount, 10) });
    setAmount("");
  };

  const handleCollectInterest = () => {
    dispatch({
      type: "COLLECT_INTEREST"
    });
  };

  const handleDeleteAccount = () => {
    dispatch({
      type: "DELETE_ACCOUNT"
    });
  };

  const handleChangeAccount = () => {};

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
