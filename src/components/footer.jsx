import React from "react";
import { FaFacebookF, FaInbox, FaInstagram, FaYoutube } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
const footer = () => {
  return (
    <div className="bg-slate-100 py-20 pl-11">
      <div className=" md:w-4/6 mx-auto grid grid-col-1 md:grid-cols-4 md:gap-12 gap-3">
        <div data-aos="fade-right" className=" space-y-3 ">
          <h1 className="text-2xl mt-5 font-semibold">LOGO</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          </p>
          <div className="flex gap-3">
            <div className="text-primary bg-slate-300 rounded-full p-2 ">
              <FaFacebookF />
            </div>
            <div className="text-primary bg-slate-300 rounded-full p-2 ">
              <FaInstagram />
            </div>
            <div className="text-primary bg-slate-300 rounded-full p-2 ">
              <FaInbox />
            </div>
            <div className="text-primary bg-slate-300 rounded-full p-2 ">
              <FaYoutube />
            </div>
          </div>
        </div>

        <div data-aos="fade-down-right" className=" space-y-3">
          <h3 className="mt-5 font-semibold text-xl">Quick Links</h3>
          <ul className="space-y-2 text-stone-400  hover:text-primary">
            <li>Home</li>
            <li>About us</li>
            <li>services</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div data-aos="fade-up-left" className=" space-y-3">
          <h3 className="mt-5 font-semibold text-xl">Support</h3>
          <ul className="space-y-2  hover:text-primary text-stone-400">
            <li>Home</li>
            <li>About us</li>
            <li>services</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div data-aos="fade-left" className=" space-y-3">
          <h3 className="mt-5 font-semibold text-xl">Contact info</h3>
          <div className="flex items-center gap-3">
            <div className="">
              <FaLocationDot className="text-primary" />
            </div>
            <p className="text-stone-400">123 street,city,country</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="">
              <FaLocationDot className="text-primary" />
            </div>
            <p className="text-stone-400">123 street,city,country</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="">
              <FaLocationDot className="text-primary" />
            </div>
            <p className="text-stone-400">123 street,city,country</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
