import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Link } from 'react-router-dom';

export default function AppHeader() {
  const { token, isLoggedIn, username } = useContext(GlobalContext);

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <header className="h-24 flex justify-between p-6 bg-bgSecondary">
      <div>
        <span className="font-title text-3xl">Use My Used</span>
      </div>
      {token ? (
        <span className="text-xl font-bold align-middle text-center">
          {username}
        </span>
      ) : (
        <ul className="flex flex-grow-1 min-w-1/4 justify-evenly">
          <li className="flex justify-center min-w-1/3">
            <Link
              to="/login"
              className="w-full font-semibold bg-bgSecondary hover:bg-bgPrimary border-2 border-black flex justify-center items-center"
            >
              Login
            </Link>
          </li>
          <li className="flex justify-center min-w-1/3">
            <Link
              to="/register"
              className="w-full font-semibold text-white bg-linePrimary hover:text-black hover:bg-lineSecondary border-2 border-black flex justify-center items-center"
            >
              Register
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}
