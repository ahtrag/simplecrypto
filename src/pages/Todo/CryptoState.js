import React, { useReducer } from "react";
import { Redirect } from "react-router-dom";

const initialState = {
  filter: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_CHANGE_INPUT":
    case "HANDLE_CHANGE_FILTER":
      return {
        ...state,
        [action.name]: action.value
      };
    default:
      throw new Error("Invalid Action");
  }
};

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleLogOut = () => {
    localStorage.removeItem("loginSession");

    window.location.href = "/";
  };

  const handleChangeFilter = e => {
    dispatch({
      type: "HANDLE_CHANGE_FILTER",
      name: e.currentTarget.name,
      value: e.currentTarget.value.toLowerCase().substr(0, 20)
    });
  };

  const apiCall = () => {
    fetch(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      {
        method: "GET",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "X-CMC_PRO_API_KEY": "3bdc61a4-b647-4663-87ff-8ee18a81dde4",
          "Content-Type": "application/json",
          "Accept-Encoding": "deflate, gzip"
        }
      }
    )
      .then(res => res.text())
      .then(json => console.log("JSON", json))
      .catch(err => console.error("Error GET API", err));
  };

  return !localStorage.getItem("loginSession") ? (
    <Redirect to="/" />
  ) : (
    <Context.Provider
      value={{
        state,
        dispatch,
        handleLogOut,
        handleChangeFilter,
        apiCall
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
