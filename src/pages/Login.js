import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Redirect } from 'react-router-dom';

export default function Login() {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  const { token, login } = useContext(GlobalContext);

  useEffect(() => {
    console.log(token);
  }, [token]);

  function handleSubmit(event) {
    event.preventDefault();

    login(username, password);
  }

  return (
    <>
      {token ? (
        <Redirect to="/dashboard" />
      ) : (
        <div className="bg-gray-200 min-h-login mx-auto pt-8">
          <form
            onSubmit={handleSubmit}
            className="bg-white max-w-md mx-auto shadow-lg rounded px-8 py-6 mb-4"
          >
            <div className="mb-6">
              <label
                className="block text-gray-700 text-base font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                name="password"
                placeholder="Username"
                value={username}
                onChange={(e) => {
                  setusername(e.target.value);
                }}
              ></input>
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-base font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              ></input>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
