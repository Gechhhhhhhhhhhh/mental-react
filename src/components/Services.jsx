import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import img from "../assets/w1.jpg";
import img1 from "../assets/w4.jpg";
import img2 from "../assets/w3.jpg";
import img3 from "../assets/w4.jpg";
const Services = () => {
  return (
    <div id="Services" className=" bg-[#f7f8fc]">
      <div className="pt-20 container px-4 mx-auto">
        <div className="text-center space-y-5" data-aos="fade-up">
          <h1 className="text-4xl font-secondary font-bold text-black">
            What can We Do Together
          </h1>
          <p className="md:w-1/2 mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque modi
            hic provident delectus eaque quisquam adipisci? Autem,
            exercitationem dolores modi minus reprehenderit tempore itaque iste
          </p>
        </div>
        <div className="py-12 md:w-4/5 mx-auto ">
          <Tabs>
            <TabList
              data-aos="fade-up"
              className="flex justify-between flex-wrap md:gap-8 gap-4"
            >
              <Tab>Couple Counseling</Tab>
              <Tab>Parenting Skills</Tab>
              <Tab>Feeling Stuck</Tab>
              <Tab>Self-Confidence</Tab>
            </TabList>
            <div className="" data-aos="fade-up">
              <TabPanel>
                <div
                  data-aos="fade-up"
                  className="flex flex-col md:flex-row gap-8 mt-8"
                >
                  <div
                    className="bg-white md:w-1/2 p-12 rounded-lg
              "
                  >
                    <h1 className="font-secondary text-4xl text-primary font-semibold mb-4">
                      Couple Counseling
                    </h1>
                    <p className="mb-8">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Repellendus reprehenderit nobis voluptas placeat
                      distinctio magnam. Tenetur error quos molestias neque!
                    </p>
                    <h3 className="font-semibold text-1xl mb-3">Benefits</h3>
                    <ul className="list-disc list-inside space-y-3">
                      <li>Understanding Relationship</li>
                      <li>Effective Communication Techniques</li>
                      <li>Conflict Resolution Strategies</li>
                    </ul>
                  </div>
                  <div className="md:w-1/2">
                    <img
                      src={img}
                      alt=""
                      className="w-full h-auto rounded-2xl object-cover"
                    />
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div
                  data-aos="fade-up"
                  className="flex flex-col md:flex-row gap-8 mt-8"
                >
                  <div
                    className="bg-white md:w-1/2 p-12 rounded-lg
              "
                  >
                    <h1 className="font-secondary text-4xl text-primary font-semibold mb-4">
                      Couple Counseling
                    </h1>
                    <p className="mb-8">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Repellendus reprehenderit nobis voluptas placeat
                      distinctio magnam. Tenetur error quos molestias neque!
                    </p>
                    <h3 className="font-semibold text-1xl mb-3">Benefits</h3>
                    <ul className="list-disc list-inside space-y-3">
                      <li>Understanding Relationship</li>
                      <li>Effective Communication Techniques</li>
                      <li>Conflict Resolution Strategies</li>
                    </ul>
                  </div>
                  <div className="md:w-1/2">
                    <img
                      src={img1}
                      alt=""
                      className="w-full h-auto rounded-2xl object-cover"
                    />
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div
                  data-aos="fade-up"
                  className="flex flex-col md:flex-row gap-8 mt-8"
                >
                  <div
                    className="bg-white md:w-1/2 p-12 rounded-lg
              "
                  >
                    <h1 className="font-secondary text-4xl text-primary font-semibold mb-4">
                      Couple Counseling
                    </h1>
                    <p className="mb-8">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Repellendus reprehenderit nobis voluptas placeat
                      distinctio magnam. Tenetur error quos molestias neque!
                    </p>
                    <h3 className="font-semibold text-1xl mb-3">Benefits</h3>
                    <ul className="list-disc list-inside space-y-3">
                      <li>Understanding Relationship</li>
                      <li>Effective Communication Techniques</li>
                      <li>Conflict Resolution Strategies</li>
                    </ul>
                  </div>
                  <div className="md:w-1/2">
                    <img
                      src={img2}
                      alt=""
                      className="w-full h-auto rounded-2xl object-cover"
                    />
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div
                  data-aos="fade-up"
                  className="flex flex-col md:flex-row gap-8 mt-8"
                >
                  <div
                    className="bg-white md:w-1/2 p-12 rounded-lg
              "
                  >
                    <h1 className="font-secondary text-4xl text-primary font-semibold mb-4">
                      Couple Counseling
                    </h1>
                    <p className="mb-8">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Repellendus reprehenderit nobis voluptas placeat
                      distinctio magnam. Tenetur error quos molestias neque!
                    </p>
                    <h3 className="font-semibold text-1xl mb-3">Benefits</h3>
                    <ul className="list-disc list-inside space-y-3">
                      <li>Understanding Relationship</li>
                      <li>Effective Communication Techniques</li>
                      <li>Conflict Resolution Strategies</li>
                    </ul>
                  </div>
                  <div className="md:w-1/2">
                    <img
                      src={img3}
                      alt=""
                      className="w-full h-auto rounded-2xl object-cover"
                    />
                  </div>
                </div>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Services;
