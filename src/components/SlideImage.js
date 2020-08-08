import React from 'react';
import laptop from '../assets/images/laptop.jpg';

export default function SlideImage() {
  return (
    <div className="w-full border-gray border-2">
      <img className="w-full" src={laptop} alt={laptop}></img>
      <h2 className="text-gray-700 font-semibold bg-gray-300 text-center text-4xl object-top">
        Title
      </h2>
    </div>
  );
}
