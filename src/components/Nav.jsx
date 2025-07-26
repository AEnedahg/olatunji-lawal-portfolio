import React from 'react'
import { gsap } from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);
function Nav() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: el, offsetY: 70 },
        ease: "power2.inOut",
      });
    }
  };
  return (
    <header
      id="header"
      className="flex items-center justify-between h-16 lg:px-50 px-5"
    >
      <a onClick={() => handleScroll("hero")}>
        <h5 className="text-xl text-black font-medium">OL</h5>
      </a>

      <div className="lg:hidden space-y-1 cursor-pointer *:w-6 *:h-[2px] *:bg-[#6B7280] z-150 absolute right-5 top-7">
        <div id="line1"></div>
        <div id="line2"></div>
        <div id="line3"></div>
      </div>
      <nav
        id="nav"
        className="lg:hidden *:opacity-0 w-0 absolute z-100 flex flex-col items-center gap-y-5 text-2xl text-white overflow-hidden h-[100vh] top-0 right-0 bg-[#0C4521] *:hover:underline *:transition-all *:duration-300"
      >
        <a onClick={() => handleScroll("hero")}>Home</a>
        <a id="nav-item" onClick={() => handleScroll("services")}>
          Services
        </a>
        <a id="nav-item" onClick={() => handleScroll("contact")}>
          Contact
        </a>
      </nav>
      <nav className="hidden lg:flex lg:items-center lg:justify-between">
        <div className="text-[#2B2C34] lg:w-3/5 flex justify-end gap-x-15 cursor-pointer *:hover:underline *:transition-all *:duration-300">
          <a onClick={() => handleScroll("hero")}>Home</a>
          <a onClick={() => handleScroll("services")}>Services</a>
          <a onClick={() => handleScroll("contact")}>Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default Nav