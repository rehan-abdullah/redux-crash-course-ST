import React from "react";

import Auth from "./components/Auth";
import Balance from "./components/Balance";
import Banking from "./components/Banking";
import AccountStatus from "./components/AccountStatus";

import "./styles.css";

export default function App() {
  return (
    <div className="App container">
      <Auth />
      <Balance />
      <Banking />
      <AccountStatus />
    </div>
  );
}
