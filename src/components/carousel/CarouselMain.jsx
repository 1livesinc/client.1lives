import React from 'react';

const CarouselMain = () => {
  return (
    <div className="flex items-center justify-center from-slate-700 to-slate-900 bg-gradient-to-br h-screen w-screen">

        <div className="bg-slate-50 w-72 h-auto flex flex-col items-center p-8 rounded-lg shadow-lg group">

                <div className="bg-cover bg-Service aspect-square w-full -mt-24 bg-center rounded-lg shadow-sm grayscale group-hover:grayscale-0 transition-all duration-500 z-20"></div>
                <div id="content-wrapper" 
                className="flex flex-col opacity-0 group-hover:opacity-100 invisible group-hover:visible h-0 group-hover:h-full delay-200 z-10"
                >

                            <div id="content" 
                            className="flex flex-col items-ceter -mt-28 group-hover:mt-2 transition-all duration-300 delay-600"
                            >
                                <h2 className="font-bold font-serif text-2xl tracking-wide text-slate-900">Google</h2>
                                <p className="text-center font-sans font-light text-slate-700">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dicta molestias rem quasi esse cupiditate iste, dolores nihil a incidunt similique neque asperiores quia veniam maiores fugit, dolorem eaque. Autem!
                                </p>
                            </div>
                </div>
        </div>
    </div>
  );
};

export default CarouselMain;
