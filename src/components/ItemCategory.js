import React from 'react';

export default function ItemCategory({ image, title }) {
  return (
    <div className="max-w-md shadow-lg py-6 bg-gray-800">
      <h3 className="text-2xl text-white mb-2 font-bold text-center">
        {title}
      </h3>
      <img className="max-w-sm mx-auto" src={image} alt={title}></img>
    </div>
  );
}
