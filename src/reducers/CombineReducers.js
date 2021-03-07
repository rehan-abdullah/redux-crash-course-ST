import { combineReducers } from "redux";

import { bankingReducer } from "./BankingReducers";
import { authReducer } from "./AuthReducers";

export const rootReducer = combineReducers({
  auth: authReducer,
  banking: bankingReducer
});
