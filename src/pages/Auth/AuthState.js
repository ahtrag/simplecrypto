import React, { useReducer } from "react";
import { Redirect } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
  name: "",
  auth: "login",
  defaultEmail: "admin@admin.com",
  defaultPassword: "admin"
};

const reducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_CHANGE_INPUT":
      return { ...state, [action.name]: action.value };
    case "HANDLE_CHANGE_AUTH":
      return { ...state, auth: action.value };
    default:
      throw new Error("Invalid Action");
  }
};

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChangeInput = e => {
    dispatch({
      type: "HANDLE_CHANGE_INPUT",
      name: e.currentTarget.name,
      value: e.currentTarget.value
    });
  };

  const handleSubmitLogin = e => {
    e.preventDefault();
    if (
      state.email === state.defaultEmail &&
      state.password === state.defaultPassword
    ) {
      localStorage.setItem("loginSession", state.email);
      window.location.href = "/todo";
    } else {
      alert("Email or Password Inccorect. Please try again!");
    }
  };

  const handleSubmitResetPassword = e => {
    e.preventDefault();
    if (state.email === state.defaultEmail) {
      alert("Your password :  admin");
    } else {
      alert("Email Incorrect");
    }
  };

  return localStorage.getItem("loginSession") ? (
    <Redirect to="/todo" />
  ) : (
    <Context.Provider
      value={{
        state,
        dispatch,
        handleChangeInput,
        handleSubmitLogin,
        handleSubmitResetPassword
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
