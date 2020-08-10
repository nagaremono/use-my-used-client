import React, { useState, useEffect } from 'react';
import SlideImage from './SlideImage';
import prev from '../assets/images/prev.png';
import next from '../assets/images/next.png';
import furni from '../assets/images/furni.jpg';
import laptop from '../assets/images/laptop.jpg';
import phone from '../assets/images/phone.jpg';
import screw from '../assets/images/screwdriver.jpg';

export default function Carousel() {
  const [currentIndex, setcurrentIndex] = useState(0);
  const [isPlaying, setisPlaying] = useState(true);

  const slides = [
    {
      title: 'Computers',
      image: laptop,
    },
    {
      title: 'Furniture',
      image: furni,
    },
    {
      title: 'Phones',
      image: phone,
    },
    {
      title: 'Tools',
      image: screw,
    },
  ];

  useEffect(() => {
    if (isPlaying) {
      let timeout = setTimeout(() => {
        setcurrentIndex((currentIndex + 1) % slides.length);
      }, 3000);

      return () => clearTimeout(timeout);
    }

    if (!isPlaying) {
      let timeout = setTimeout(() => {
        setisPlaying(true);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isPlaying, slides]);

  function prevSlide() {
    setcurrentIndex((currentIndex - 1 + slides.length) % slides.length);
    setisPlaying(false);
  }

  function nextSlide() {
    setcurrentIndex((currentIndex + 1) % slides.length);
    setisPlaying(false);
  }

  function goToSlide(index) {
    setcurrentIndex(index);
    setisPlaying(false);
  }

  return (
    <div className="w-3/5 mt-8 mx-auto relative flex">
      {slides.map((slide, index) => {
        return (
          <SlideImage
            active={index === currentIndex}
            image={slide.image}
            title={slide.title}
            key={index}
          />
        );
      })}
      <button onClick={prevSlide}>
        <img
          src={prev}
          className="bg-opacity-50 bg-gray-400 hover:bg-gray-600 hover:bg-opacity-50 py-4 block w-1/12 h-auto absolute inset-y-2/5 left-0"
          alt="previous"
        ></img>
      </button>
      <button onClick={nextSlide}>
        <img
          src={next}
          className="bg-opacity-50 bg-gray-400 hover:bg-gray-600 hover:bg-opacity-50 py-4 block w-1/12 h-auto absolute inset-y-2/5 right-0"
          alt="previous"
        ></img>
      </button>
      <div className="h-4 absolute inset-x-0 bottom-1/8 mx-auto flex justify-evenly w-3/5">
        {slides.map((slide, index) => {
          let classes =
            'w-1/5 border-2 border-black bg-gray-100 bg-opacity-25 hover:bg-gray-400';

          if (index === currentIndex) {
            classes = 'w-1/5 bg-gray-400';
          }
          return (
            <button
              onClick={() => goToSlide(index)}
              className={classes}
              key={index}
            ></button>
          );
        })}
      </div>
    </div>
  );
}
