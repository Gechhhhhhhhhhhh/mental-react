import React, { useState } from "react";

import img from "../assets/w5.jpg";
import { FaGooglePlay } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { FaArrowCircleRight } from "react-icons/fa";

const About = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };
  const handleCloseVideo = () => {
    setIsVideoPlaying(false);
  };
  return (
    <div id="About" className="bg-[#f7f8fc] pb-24  pt-24">
      <div className="container  mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 py-12 px-4 md:w-4/6 mx-auto">
          <div className="md:w-1/2  w-full" data-aos="fade-right">
            {!isVideoPlaying ? (
              <div className="relative">
                <img
                  src={img}
                  alt=""
                  className="w-full md:h-[446px] h-auto rounded-lg object-cover"
                />
                <button
                  onClick={handleVideoPlay}
                  className=" absolute top-48 left-1/2 transform -translate-x-1/2 bg-primary p-3 rounded-full shadow-lg items-center"
                >
                  <FaGooglePlay className="size-12 text-white" />
                </button>
              </div>
            ) : null}
          </div>

          <div className="md:w-1/2 w-full" data-aos="fade-left">
            <h3 className="text-2xl font-secondary mb-4 text-black font-bold">
              Start Your Journey to Mental Wellness
            </h3>
            <p className="text-lg mb-8 pr-8 text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              cumque molestiae earum soluta exercitationem dolorum laborum
              dolorem cupiditate, animi minus similique quis error doloremque.
            </p>

            <button className="bg-primary px-6 py-3 flex items-center text-white rounded">
              <a href="#">Get Started</a>
              <FaArrowCircleRight className="ml-3 size-5" />
            </button>
          </div>
        </div>

        {isVideoPlaying && (
          <div className="fixed  inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div
              className="relative w-full h-full flex items-center justify-center
            "
            >
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/rHNC43uTjO4?si=-1nHRqjFn_hnLsSe"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <button
                onClick={handleCloseVideo}
                className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
              >
                <IoIosCloseCircle />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
