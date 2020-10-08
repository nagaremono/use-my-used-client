import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  token: null,
  username: null,
  userId: null,
};

export const GlobalContext = createContext(initialState);

export function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  async function isLoggedIn() {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
      mode: 'cors',
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    const { user, token } = await response.json();

    if (user) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: user.username,
          userId: user.id,
          token,
        },
      });
    }
  }

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
      .then((responseJson) => {
        dispatch({
          type: 'LOGIN',
          payload: {
            token: responseJson.token,
            userId: responseJson.user.id,
            username: responseJson.user.username,
          },
        });
      });
  }

  async function register(username, password, confirmpassword) {
    const user = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
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
        confirmpassword,
      }),
    });

    if (user) login(username, password);
  }

  return (
    <GlobalContext.Provider
      value={{
        token: state.token,
        username: state.username,
        userId: state.userId,
        login,
        register,
        isLoggedIn,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
