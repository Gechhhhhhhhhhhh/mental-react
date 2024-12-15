import React from "react";
import img from "../assets/p1.jpeg";
import { AiFillMessage } from "react-icons/ai";

const Picing = () => {
  const price = [
    {
      price: 123,
      name: "Bronze Package",
    },
    {
      price: 133,
      name: "siliver Package",
    },
    {
      price: 153,
      name: "Golg Package",
    },
  ];
  return (
    <div id="Picing" className=" bg-[#f7f8fc] ">
      <div className="">
        <div
          data-aos="fade-up"
          className="py-20 px-4 md:w-4/6 mx-auto text-center "
        >
          <h1 className="font-bold text-4xl">
            PeFect For Small & Large Brands
          </h1>
          <p className="text-center mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            sequi nesciunt veniam pariatur similique nulla fugit quo totam
            debitis tempore.
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="flex flex-col mx-auto md:w-5/6 md:flex-row gap-8 p-5 "
        >
          {price.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white flex-1 rounded-lg pb-20 p-10 mb-10 shadow-md"
              >
                <h3 className="font-bold text-2xl mb-5">{item.name}</h3>
                <hr className="w-24 border-primary border text-primary" />
                <p className="font-bold text-3xl mb-3">
                  $99 <span className="font-light text-lg mr-20">/mo</span>
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                  quaerat?Lorem ipsum dolor sit amet.
                </p>
                <ul className="list-disc list-inside mt-5 space-y-2">
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                </ul>
                <button className="rounded px-3 py-2 text-white mt-5 bg-primary">
                  Get Started
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className=" py-28">
        <div className="" data-aos="fade-up">
          <h1 className=" text-center font-bold text-4xl">
            What Our Clients Say
          </h1>
          <p className="text-center mt-5 mb-10 md:w-4/5 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            sequi nesciunt veniam pariatur similique nulla
          </p>
        </div>

        <div
          data-aos="fade-up"
          className="flex md:flex-row md:w-4/6 mx-auto gap-8 flex-col p-10 "
        >
          <div className="bg-white md:w-5/6 mx-auto flex-1 relative rounded-lg shadow-md p-6">
            <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2">
              <AiFillMessage className="size-12 text-primary" />
            </div>

            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              labore ullam veritatis accusamus suscipit voluptatem dolores
              dolorem velit sed odit! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Est, consequatur.
            </p>
            <div className="flex ">
              <div className="">
                <img src={img} className="w-16 rounded-full" alt="" />
              </div>
              <div className="ml-5">
                <p className="font-bold"> Jane Doe</p>
                <p className="font-light">New York,Ny</p>
              </div>
            </div>
          </div>
          <div className="bg-white md:w-5/6 mx-auto flex-1 relative rounded-lg shadow-md p-6">
            <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2">
              <AiFillMessage className="size-12 text-primary" />
            </div>

            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              labore ullam veritatis accusamus suscipit voluptatem dolores
              dolorem velit sed odit! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Est, consequatur.
            </p>
            <div className="flex ">
              <div className="">
                <img src={img} className="w-16 rounded-full" alt="" />
              </div>
              <div className="ml-5">
                <p className="font-bold"> Jane Doe</p>
                <p className="font-light">New York,Ny</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Picing;
