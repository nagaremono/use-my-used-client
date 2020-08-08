import React from 'react';

export default function AppHeader() {
  return (
    <header className="h-24 flex justify-between p-6 bg-bgSecondary">
      <div>
        <span className="font-title text-3xl">Use My Used</span>
      </div>
      <ul className="flex flex-grow-1 min-w-1/4 justify-evenly">
        <li className="flex justify-center min-w-1/3">
          <button className="w-full font-semibold bg-bgSecondary hover:bg-bgPrimary border-2 border-black ">
            Login
          </button>
        </li>
        <li className="flex justify-center min-w-1/3">
          <button className="w-full font-semibold text-white bg-linePrimary hover:text-black hover:bg-lineSecondary border-2 border-black ">
            Register
          </button>
        </li>
      </ul>
    </header>
  );
}
