const initialState = {
  balance: 0,
  isSavingsAccount: true
};

export const bankingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DEPOSIT":
      return {
        ...state,
        balance: state.balance + action.amount
      };
    case "WITHDRAW":
      return {
        ...state,
        balance: state.balance - action.amount
      };
    case "COLLECT_INTEREST":
      return {
        ...state,
        balance: state.balance * 1.03
      };
    case "DELETE_ACCOUNT":
      return {
        ...state,
        balance: 0
      };
    case "TOGGLE_ACCOUNT_TYPE":
      return {
        ...state,
        isSavingsAccount: !state.isSavingsAccount
      };
    default:
      return state;
  }
};

// ACTIONS

// // deposit
// const deposit = {
//   type: "DEPOSIT",
//   amount: 20
// };

// // withdraw
// const withdraw = {
//   type: "WITHDRAW",
//   amount: 5
// };

// // collect interest

// const collectInterest = {
//   type: "COLLECT_INTEREST"
// };

// // delete account

// const deleteAccount = {
//   type: "DELETE_ACCOUNT"
// };
