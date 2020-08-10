import React from 'react';

export default function SlideImage({ image, title, active }) {
  let classes = 'w-full border-gray border-2';
  if (active === false) {
    classes = classes + ' hidden';
  }
  return (
    <div className={classes}>
      <img className="w-full" src={image} alt={title}></img>
      <h2 className="text-gray-700 font-semibold bg-gray-300 text-center text-4xl object-top">
        {title}
      </h2>
    </div>
  );
}
