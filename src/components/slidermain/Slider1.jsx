import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { sliderData } from './sliderdata';
import './Slider.scss';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 6000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log('next');
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log('prev');
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="slider">
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? 'slide current' : 'slide'}
            key={index}
          >
            {index === currentSlide && (
              <div >
                <img src={slide.image} alt="slide" className="image" />
                <div className="content">
                  <h2 className="text-3xl font-extrabold text-skin-base sm:text-4xl">
                    <span className="block">{slide.heading}</span>
                  </h2>
                  <p className="mt-4 text-lg leading-6 text-skin-muted">
                    {slide.desc}
                  </p>

                  <div className="flex items-center justify-between">
                    <Link to="/quote">
                      <button className="font-medium border-white bg-white px-4 py-2 text-[#b91c1c] rounded-sm">
                        Request A Quote
                      </button>
                    </Link>
                    <Link to="/demo">
                      <button className="border-2 border-solid border-white font-mediume bg-[#b91c1cb3] px-4 py-2 text-white rounded-sm">
                        Live demo
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
