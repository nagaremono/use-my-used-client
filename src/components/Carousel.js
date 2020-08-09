import React from 'react';
import SlideImage from './SlideImage';
import prev from '../assets/images/prev.png';
import next from '../assets/images/next.png';

export default function Carousel() {
  return (
    <div className="w-4/5 relative flex">
      <SlideImage />
      <a href="/">
        <img
          src={prev}
          className="bg-opacity-50 bg-gray-400 hover:bg-gray-600 hover:bg-opacity-50 py-4 block w-1/12 h-auto absolute inset-y-2/5 left-0"
          alt="previous"
        ></img>
      </a>
      <a href="/">
        <img
          src={next}
          className="bg-opacity-50 bg-gray-400 hover:bg-gray-600 hover:bg-opacity-50 py-4 block w-1/12 h-auto absolute inset-y-2/5 right-0"
          alt="previous"
        ></img>
      </a>
      <div className="h-4 absolute inset-x-0 bottom-1/8 mx-auto flex justify-evenly w-3/5">
        <div className="w-1/5 bg-gray-100 bg-opacity-25 hover:bg-gray-400"></div>
        <div className="w-1/5 bg-gray-100 bg-opacity-25 hover:bg-gray-400"></div>
        <div className="w-1/5 bg-gray-100 bg-opacity-25 hover:bg-gray-400"></div>
        <div className="w-1/5 bg-gray-100 bg-opacity-25 hover:bg-gray-400"></div>
      </div>
    </div>
  );
}
