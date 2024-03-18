import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer.jsx";

const initialState = {
  transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 }
  ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Define actions
const deleteTransaction = (dispatch, id) => {
  dispatch({
    type: "DELETE_TRANSACTION",
    payload: id
  });
}

const addTransaction = (dispatch, transaction) => { // Pass dispatch as an argument
  dispatch({
    type: "ADD_TRANSACTION",
    payload: transaction,
  });
}

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction: id => deleteTransaction(dispatch, id),
      addTransaction: transaction => addTransaction(dispatch, transaction) // Pass dispatch to addTransaction
    }}>
      {children}
    </GlobalContext.Provider>
  );
}
