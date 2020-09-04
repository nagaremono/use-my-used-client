import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  token: '',
};

export const GlobalContext = createContext(initialState);

export function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function login(username, password) {
    fetch(`${process.env.REACT_APP_API_URL}/login`, {
      mode: 'cors',
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((token) => {
        console.log(token);
        dispatch({
          type: 'LOGIN',
          payload: {
            token: token.user,
          },
        });
      });
  }

  return (
    <GlobalContext.Provider value={{ token: state.token, login }}>
      {children}
    </GlobalContext.Provider>
  );
}
