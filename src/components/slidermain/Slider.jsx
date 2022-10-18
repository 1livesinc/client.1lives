import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';





const Slider = ({sliderdata}) => {
  let count = 0;
  let slideInterval;
  let prodlength = sliderdata.length;

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
    }, 2000);
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
      
      
      <div className="aspect-w-16 aspect-h-9 relative">
      

            


                  <img src={sliderdata[swipeSlide].image} alt={sliderdata[swipeSlide].id} />
                  <div className="w-2/5 absolute top-7 left-0 right-0 m-auto p-4 pr-6 border-1-8 border-transparent rounded-md shadow-md space-y-2 bg-[#00b0f075]">
                    <h2 className="text-lg font-semibold leading-6 text-white">{sliderdata[swipeSlide].title}</h2>
                    <p className="text-white">{sliderdata[swipeSlide].desc}</p>
                  </div>

                
                    
       
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
