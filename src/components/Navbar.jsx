//rafc
import React, { useEffect, useState } from "react";
import { FcMenu } from "react-icons/fc";
import { motion } from "motion/react";

const Navbar = () => {
  const [isopen, setopen] = useState(false);
  const [activeSection, setactiveSection] = useState("home");
  const headleToggle = () => {
    setopen(!isopen);
  };
  const handlecloseMenu = () => {
    setopen(false);
  };
  const handleScroll = () => {
    const sections = ["home", "services", "about", "pricing", "testimpnial"];
    const scrollPosition = window.scrollY + 100;
    sections.forEach((sections) => {
      const element = document.getElementById(sections);
      if (element) {
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;
        if (scrollPosition >= offsetTop && scrollPosition < height) {
          setactiveSection(sections);
        }
      }
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const navLinks = (
    <ul className="font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-x-8 space-y-2 md:space-y-0 p-4 md:p-0">
      <li>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo("home");
            handlecloseMenu();
          }}
          className={`text-white  hover:text-primary/90 ${
            activeSection === "home" ? "isActive" : " "
          }`}
        >
          Home
        </motion.a>
      </li>
      <li>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="#Services"
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo("Services");
            handlecloseMenu();
          }}
          className={`text-white  hover:text-primary/90 ${
            activeSection === "Services" ? "isActive" : " "
          }`}
        >
          Services
        </motion.a>
      </li>
      <li>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="#About"
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo("About");
            handlecloseMenu();
          }}
          className={`text-white  hover:text-primary/90${
            activeSection === "About" ? "isActive" : " "
          }`}
        >
          About us
        </motion.a>
      </li>
      <li>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="#Picing"
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo("Picing");
            handlecloseMenu();
          }}
          className={`text-white  hover:text-primary/90 ${
            activeSection === "Picing" ? "isActive" : " "
          }`}
        >
          Picing
        </motion.a>
      </li>
      <li>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="#Testimonial"
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo("Testimonial");
            handlecloseMenu();
          }}
          className={`text-white  hover:text-primary/90  ${
            activeSection === "Testimonial" ? "isActive" : " "
          }`}
        >
          Testimonial
        </motion.a>
      </li>
    </ul>
  );
  return (
    <header className="bg-heroBg text-white py-6 px-4 fixed top-0 left-0 right-0 z-10">
      <div className="container md:w-4/5 mx-auto flex justify-between items-center h-full ">
        {/* Logo */}
        <div className=" text-lg font-semibold">
          <a href="/">
            <h1 className="font-primary">Logo</h1>
          </a>
        </div>
        {/* Nav */}
        <div className="hidden md:flex flex-grow justify-center">
          <nav>{navLinks}</nav>
        </div>
        {/* contact */}
        <div className="hidden md:block">
          <a
            className="text-white bg-primary px-4 py-2 hover:bg-primary/90 "
            href="#contact"
          >
            Contact Us
          </a>
        </div>

        {/* hamburger menu */}
        <div className="">
          <button
            onClick={headleToggle}
            className={`text-white focus:outline-none md:hidden ${
              isopen ? "border border-white" : " "
            }`}
          >
            <FcMenu className="size-6 " />
          </button>
        </div>
      </div>

      {/* Mobile nav items */}
      {isopen && (
        <nav>
          <ul className="flex flex-col py-5 space-y-3">
            {navLinks.props.children}
            <li className="py-2">
              <a
                href="#contact Us"
                onClick={(e) => {
                  // e.preventDefault();
                  handlecloseMenu();
                }}
                className="text-white bg-primary px-4 py-2 hover:bg-primary/90 rounded"
              >
                Contact us
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
