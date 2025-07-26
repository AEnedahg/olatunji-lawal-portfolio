import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

function Nav() {
  const navRef = useRef(null);
  const hamRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const navItemsRef = useRef([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: el, offsetY: 70 },
        ease: "power2.inOut",
      });
      if (isOpen) toggleMenu();
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: "power3.inOut" },
    });

    if (isOpen) {
      tl.to(line1Ref.current, { y: 6, rotate: 45, backgroundColor: "white" })
        .to(line2Ref.current, { opacity: 0 }, "<")
        .to(
          line3Ref.current,
          { y: -6, rotate: -45, backgroundColor: "white" },
          "<"
        )
        .to(
          navRef.current,
          {
            width: "60%",
            pointerEvents: "auto",
            padding: "1rem",
          },
          "<"
        )
        .fromTo(
          navItemsRef.current,
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.1 },
          "<0.2"
        );
    } else {
      tl.to(navItemsRef.current, { x: -50, opacity: 0, stagger: 0.1 }, 0)
        .to(
          line1Ref.current,
          { y: 0, rotate: 0, backgroundColor: "#6B7280" },
          "<"
        )
        .to(line2Ref.current, { opacity: 1 }, "<")
        .to(
          line3Ref.current,
          { y: 0, rotate: 0, backgroundColor: "#6B7280" },
          "<"
        )
        .to(
          navRef.current,
          {
            width: 0,
            pointerEvents: "none",
            padding: "0",
          },
          "<"
        )
        .to(
          curvePathRef.current,
          {
            attr: { d: paths.closed },
            ease: "power2.in",
          },
          "<"
        );
    }
  };

  const addToRefs = (el) => {
    if (el && !navItemsRef.current.includes(el)) {
      navItemsRef.current.push(el);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between h-20 px-5 lg:px-12 bg-white shadow-md">
      <a
        onClick={() => handleScroll("hero")}
        className="cursor-pointer absolute left-1/2 -translate-x-1/2"
      >
        <h5 className="text-xl text-black font-bold">OL</h5>
      </a>

      <div
        ref={hamRef}
        onClick={toggleMenu}
        className="lg:hidden space-y-1 cursor-pointer *:w-6 *:h-[2px] *:bg-[#6B7280] z-150 relative"
      >
        <div ref={line1Ref}></div>
        <div ref={line2Ref}></div>
        <div ref={line3Ref}></div>
      </div>

      <nav
        ref={navRef}
        className="lg:hidden w-0 absolute z-100 flex flex-col items-start gap-y-5 text-lg text-white overflow-hidden h-screen top-0 left-0 bg-black"
      >
        <div className="ml-0 mt-20 flex flex-col gap-y-8 *:cursor-pointer">
          <a
            ref={addToRefs}
            onClick={() => {
              handleScroll("hero");
              toggleMenu();
            }}
            className="hover:text-gray-300 transition"
          >
            Home
          </a>
          <a
            ref={addToRefs}
            onClick={() => {
              handleScroll("services");
              toggleMenu();
            }}
            className="hover:text-gray-300 transition"
          >
            Services
          </a>
          <a
            ref={addToRefs}
            onClick={() => {
              handleScroll("contact");
              toggleMenu();
            }}
            className="hover:text-gray-300 transition"
          >
            Contact
          </a>
        </div>
      </nav>

      <nav className="hidden lg:block pl-20">
        <div className="text-[#2B2C34] flex gap-x-8 cursor-pointer">
          <a
            onClick={() => handleScroll("hero")}
            className="hover:underline transition-all duration-300"
          >
            Home
          </a>
          <a
            onClick={() => handleScroll("services")}
            className="hover:underline transition-all duration-300"
          >
            Services
          </a>
          <a
            onClick={() => handleScroll("contact")}
            className="hover:underline transition-all duration-300"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
