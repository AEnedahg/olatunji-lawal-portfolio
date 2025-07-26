import React from "react";
import { useEffect, useRef } from "react";
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const colorMoveOne = useRef(null);
  const colorMoveTwo = useRef(null);
  const colorMoveThree = useRef(null);
  const colorMoveFour = useRef(null);
  useEffect(() => {
    let tl = gsap.timeline();
    tl.to(
      colorMoveOne.current,
      {
        keyframes: [
          { x: 0, y: 0, percent: 0 },
          { x: 30, y: -25, percent: 100 },
        ],
        duration: 3,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0,
        ease: Power2.inOut,
      },
      0
    )
      .to(
        colorMoveTwo.current,
        {
          keyframes: [
            { x: 0, y: 0, percent: 0 },
            { x: -30, y: 25, percent: 100 },
          ],
          duration: 3,
          repeat: -1,
          yoyo: true,
          repeatDelay: 0,
          ease: Power2.inOut,
        },
        0
      )
      .to(
        colorMoveThree.current,
        {
          keyframes: [
            { x: 0, y: 0, percent: 0 },
            { x: 30, y: -25, percent: 100 },
          ],
          duration: 3,
          repeat: -1,
          yoyo: true,
          repeatDelay: 0,
          ease: Power2.inOut,
        },
        0
      )
      .to(
        colorMoveFour.current,
        {
          keyframes: [
            { x: 0, y: 0, percent: 0 },
            { x: -30, y: 25, percent: 100 },
          ],
          duration: 3,
          repeat: -1,
          yoyo: true,
          repeatDelay: 0,
          ease: Power2.inOut,
        },
        0
      );
  }, []);

  return (
    <section
      id="hero"
      className="mt-30 lg:mt-30 flex flex-col items-center max-w-[320px] mx-auto lg:max-w-screen lg:mx-auto lg:flex-row-reverse lg:justify-center lg:px-20"
    >
      <div className="flex justify-center mb-10 relative">
        <img
          src="/images/3d-cartoon-character (1).png"
          alt="hero-image"
          className="w-2/3 max-w-[320px] z-30"
        />
        <img
          src="/images/star-large.svg"
          alt="arrow"
          className="absolute top-0 right-5 size-6 z-10"
        />
        <img
          src="/images/star-small.svg"
          alt="arrow"
          className="absolute bottom-1/3 size-5 left-5 z-10"
        />
        <img
          src="/images/squares.svg"
          alt="arrow"
          className="absolute bottom-8 right-4 size-20 z-10"
        />
        <img
          ref={colorMoveOne}
          src="/images/color-1.svg"
          alt="arrow"
          className="absolute top-0 left-6 size-50 z-20"
        />
        <img
          ref={colorMoveTwo}
          src="/images/color-2.svg"
          alt="arrow"
          className="absolute top-10 right-10 size-50 z-40"
        />
        <img
          ref={colorMoveThree}
          src="/images/color-3.svg"
          alt="arrow"
          className="absolute -bottom-5 left-16 size-60 z-40"
        />
        <img
          ref={colorMoveFour}
          src="/images/color-4.svg"
          alt="arrow"
          className="absolute -bottom-8 right-0 size-40 z-20"
        />
      </div>
      <div className="relative px-4">
        <img
          src="/images/Vector.svg"
          alt="arrow"
          className="absolute -top-5 -left-2 size-20 z-5"
        />
        <h1 className="relative z-50 uppercase font-medium text-5xl z-50 sm:text-center lg:text-left lg:text-4xl">
          My name is <span className="font-bold">Olatunji Lawal...</span>
        </h1>
        <p className="text-xl mt-4 sm:text-center lg:text-left">
          <span className="italic font-semibold">Web Developer</span> based in
          Nigeria
        </p>
        <button className="text-white px-4 py-3 bg-black mt-7 sm:block sm:max-w-[300px] sm:mx-auto lg:mx-0">
          Let&apos;s talk with me
          <img
            src="/images/north_east.svg"
            alt="arrow"
            className="inline-block ml-2"
          />
        </button>
        <div className="*:flex *:gap-x-3 flex flex-col lg:flex-row *:items-center mt-10">
          <div>
            <img src="/images/phone-icon.svg" alt="phone" />
            <small className="font-bold">+20 11 43 63 73 41</small>
          </div>
          <div>
            <img src="/images/message-icon.svg" alt="message" />
            <small className="font-bold">fawzisayed1209@gmail.com</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
