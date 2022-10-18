import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../../assets/images/Slide1.png";
import project2 from "../../assets/images/Slide2.png";
import project3 from "../../assets/images/Slide3.png";
import project4 from "../../assets/images/Slide4.png";
import project5 from "../../assets/images/Slide5.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "IT Consulting",
      github_link: "https://amaratechit.com/aboutus.html",
      live_link: "https://amaratechit.com/aboutus.html",
    },
    {
      img: project2,
      name: "Cloud",
      github_link: "https://amaratechit.com/aboutus.html",
      live_link: "https://amaratechit.com/aboutus.html",
    },
    {
      img: project3,
      name: "Digital Services",
      github_link: "https://github.com/Sridhar-C-25/highking",
      live_link: "https://amaratechit.com/aboutus.html",
    },
    {
      img: project4,
      name: "Procurement",
      github_link:
        "https://amaratechit.com/aboutus.html",
      live_link: "https://amaratechit.com/aboutus.html",
    },
    {
      img: project5,
      name: "Training",
      github_link: "https://amaratechit.com/aboutus.html",
      live_link: "https://amaratechit.com/aboutus.html",
    },
  ];
  return (
    <section id="projects" className=" ">
      
      <div className="flex max-w-6xl gap-6 py-4 px-4 mx-auto w-full items-center relative">
      
          <Swiper
            slidesPerview={3}
            spaceBetween={15}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            loop={true}
            autoplay={{
              delay: 2000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Request A Quote
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
       
       
      </div>
    </section>
  );
};

export default Project;
