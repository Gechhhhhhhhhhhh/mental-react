import React, { useEffect } from "react";
import img from "../assets/girl.png";
import { FaArrowCircleRight } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section
      id="home"
      className="flex items-center bg-heroBg md:h-screen pt-28"
    >
      <div className="container md:w-4/5 mx-auto flex flex-col md:flex-row items-center justify-between gap-12 p-8 h-full overflow-y-hidden ">
        {/* left side */}
        <div className="md:w-1/2" data-aos="fade-right">
          <h1 className="text-3xl font-secondary mb-4 text-white font-bold md:w-3/5">
            Start Your Journey to Mental Wellness
          </h1>
          <p className="text-lg mb-12 pr-8 text-pink-300
            ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            cumque molestiae earum soluta exercitationem dolorum laborum dolorem
            cupiditate, animi minus similique quis error doloremque. Debitis ae?
          </p>
          <button className="bg-primary px-6 py-3 flex items-center text-white rounded">
            <a href="#">Get Started</a>
            <FaArrowCircleRight className="ml-3 size-5" />
          </button>
        </div>

        {/* right side */}
        <div className="md:w-1/2  " data-aos="fade-left">
          <img src={img} className=" md:w-full object-cover" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
