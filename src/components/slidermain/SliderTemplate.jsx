import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import slidedata from './sliderdata';

let count = 0;
let slideInterval;
let prodlength = slidedata.length;

const Slider = () => {
  const [swipeSlide, setSwipeSlide] = useState(0);

  const slideRef = useRef();
  const removeAnimation = () => {
    slideRef.current.classList.remove('fade-anim');
  };

  useEffect(() => {
    slideRef.current.addEventListener('animationend', removeAnimation);
    slideRef.current.addEventListener('mouseenter', pauseSlider);
    slideRef.current.addEventListener('mouseleave', startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleNextClicked();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleNextClicked = () => {
    count = (count + 1) % prodlength;
    setSwipeSlide(count);
    slideRef.current.classList.add('fade-anim');
  };
  const handlePrevClicked = () => {
    count = (swipeSlide + prodlength - 1) % prodlength;
    setSwipeSlide(count);
    slideRef.current.classList.add('fade-anim');
  };
  return (
    <div ref={slideRef} className="w-full select-none relative">
      
      
      <div className="aspect-w-16 aspect-h-9">
        <img src={slidedata[swipeSlide]} alt="" />
      </div>
     

        <div className="absolute w-full top-1/2 transform -translate-y-1/2  px-3 flex justify-between items-center ">
          <button
            className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
            onClick={handlePrevClicked}
          >
            <AiOutlineLeft size={30} />
          </button>

          <button
            className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
            onClick={handleNextClicked}
          >
            <AiOutlineRight size={30} />
          </button>
        </div>
      
      
    </div>
  );
};

export default Slider;
