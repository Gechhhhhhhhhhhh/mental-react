import React from "react";

const workingStep = () => {
  return (
    <div className=" relative bg-work_img py-12 bg-center bg-cover">
      <div className="bg-heroBg absolute inset-0 bg-opacity-70"></div>
      <div className="relative container px-4 py-20 mx-auto">
        <div className="text-white text-center mb-10" data-aos="fade-up">
          <h3 className="text-white font-secondary text-center text-4xl font-semi mb-4 bold">
            How it woks
          </h3>
          <p className="md:w-1/2 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            recusandae quis cum alias quidem dolore delectus laudantium sed
            fugiat eum?
          </p>
        </div>

        <div
          data-aos="fade-up"
          className="flex flex-col md:w-4/5 mx-auto md:flex-row gap-8"
        >
          <div className="bg-white mt-10 relative rounded-lg p-5 text-center flex-1">
            <div className="absolute transfrom -translate-x-1/2 -translate-y-1/2 top-0 left-1/2 bg-primary rounded-full size-12 items-center flex justify-center text-white">
              1
            </div>
            <h3 className="mt-6 font-semibold mb-3">Fill Aform</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              laboriosam distinctio enim .
            </p>
          </div>
          <div className="bg-white mt-10 relative rounded-lg p-5 text-center flex-1">
            <div className="absolute transfrom -translate-x-1/2 -translate-y-1/2 top-0 left-1/2 bg-primary rounded-full size-12 items-center flex justify-center text-white">
              2
            </div>
            <h3 className="mt-6 font-semibold mb-3">Fill Aform</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              laboriosam distinctio enim .
            </p>
          </div>
          <div className="bg-white mt-10 relative rounded-lg p-5 text-center flex-1">
            <div className="absolute transfrom -translate-x-1/2 -translate-y-1/2 top-0 left-1/2 bg-primary rounded-full size-12 items-center flex justify-center text-white">
              3
            </div>
            <h3 className="mt-6 font-semibold mb-3">Fill Aform</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              laboriosam distinctio enim .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default workingStep;
