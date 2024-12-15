import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
const Testimonial = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [country, setcountry] = useState("");
  const [message, setmessage] = useState("");
  const [play, setplay] = useState(false);
  const handsubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      number,
      country,
      message,
    };
    // console.log(data);
    if (!data) {
      alert("Please fill all fields");
      return;
    }
    setplay(true);
  };

  const removeplay = () => {
    setplay(false);
    setname("");
    setcountry("");
    setemail("");
    setmessage("");
    setnumber("");
  };
  return (
    <div
      id="Testimonial"
      className="bg-heroBg flex items-center justify-center  py-20 px-7"
    >
      <div className="container mx-auto ">
        <div className=" md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12">
          <div data-aos="fade-up-right" className="text-white">
            <h1 className="font-secondary text-4xl mb-10">
              Make An appointment
            </h1>
            <div className=" items-start text-white grid grid-cols-1 md:grid-cols-2 gap-5  ">
              <div className=" flex gap-2  justify-center">
                <div className="flex ">
                  <MdOutlineMail className="text-primary size-8 bg-slate-600 rounded-full p-1   " />
                </div>
                <div className=" ml-3">
                  <p className="font-semibold font-primary">
                    24 Hours Services
                  </p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                </div>
              </div>

              <div className=" flex gap-2  justify-center">
                <div className="flex-2">
                  <MdOutlineMail className="text-primary size-8 bg-slate-600 rounded-full p-1   " />
                </div>
                <div className=" ml-3">
                  <p className="font-semibold font-primary">
                    24 Hours Services
                  </p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                </div>
              </div>

              <div className=" flex gap-2  justify-center">
                <div className="flex-2">
                  <MdOutlineMail className="text-primary size-8 bg-slate-600 rounded-full p-1   " />
                </div>
                <div className=" ml-3">
                  <p className="font-semibold font-primary">
                    24 Hours Services
                  </p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                </div>
              </div>

              <div className=" flex gap-  justify-center">
                <div className="flex-2">
                  <MdOutlineMail className="text-primary size-8 bg-slate-600 rounded-full p-1   " />
                </div>
                <div className=" ml-3">
                  <p className="font-semibold font-primary">
                    24 Hours Services
                  </p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up-left"
            className="bg-white p-8 rounded-lg shadow-sm mt-6 "
          >
            <h1 className="text-xl font-semibold mb-4">Book Appointment</h1>
            <div className="">
              <form onSubmit={handsubmit} className="space-y-8 ">
                <div className="flex sm:flex-row flex-col gap-4">
                  <input
                    onChange={(e) => setname(e.target.value)}
                    type="text "
                    placeholder="Name"
                    className="p-4 focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
                  />
                  <input
                    onChange={(e) => setemail(e.target.value)}
                    type="text "
                    placeholder="Email"
                    className="p-4 focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
                  />
                </div>

                <div className="flex sm:flex-row flex-col gap-4">
                  <input
                    onChange={(e) => setnumber(e.target.value)}
                    type="text "
                    placeholder="Contact Number"
                    className="p-4 focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
                  />
                  <input
                    onChange={(e) => setcountry(e.target.value)}
                    type="text "
                    placeholder="Country"
                    className="p-4 focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
                  />
                </div>

                <textarea
                  onChange={(e) => setmessage(e.target.value)}
                  name=""
                  id=""
                  placeholder="Write your message.."
                  className="w-full p-4 focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
                ></textarea>

                <button
                  onClick={handsubmit}
                  className="bg-primary text-white w-full p-4 rounded-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {play && (
        <div className=" fixed inset-0 flex items-center justify-center bg-black opacity-90">
          <div className="bg-white p-8 rounded-sm shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p className=""> Thank,you,{name},for submiting your quert</p>
            <button
              onClick={removeplay}
              className="mt-4 px-4 ,py-2 bg-primary text-white rounded-md"
            >
              close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonial;
