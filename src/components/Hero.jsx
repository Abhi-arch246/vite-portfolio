import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <section
      id="hero"
      className="dark:bg-dark bg-light duration-700 md:py-24 py-32"
    >
      {/* <div className="flex justify-start second-circle animate__animated animate__slideInRight animate__slower animate__infinite">
        <div className="circle md:w-[450px] md:h-[450px] w-[200px] h-[200px]"></div>
      </div>
      <div className="flex justify-end second-circle animate__animated animate__slideInLeft animate__slower animate__infinite	">
        <div className="circle md:w-[450px] md:h-[450px] w-[200px] h-[200px]"></div>
      </div> */}
      <div className="mx-auto w-[500px] md:w-[850px] md:mt-[-220px] mt-[-100px] md:ml-[320px] ml-[-60px]">
        <svg
          viewBox="0 0 200 200"
          className="blob"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* <linearGradient id="b">
              <stop offset="0%" stop-color="#42047e" />
              <stop offset="100%" stop-color="#07f49e" />
            </linearGradient> */}
            <linearGradient id="b">
              <stop offset="0%" stop-color="#0D25B9" />
              <stop offset="100%" stop-color="#FD6585" />
            </linearGradient>
          </defs>
          <path fill="url(#b)" transform="translate(100 100)">
            <animate
              attributeName="d"
              dur="10000ms"
              repeatCount="indefinite"
              values="M46.3,-62C57.1,-55.9,61,-38.5,60.8,-23.5C60.6,-8.4,56.2,4.2,52.4,17.3C48.6,30.4,45.2,44,36.6,54.7C27.9,65.3,14,73,-1.1,74.5C-16.1,76,-32.3,71.3,-40.3,60.5C-48.3,49.6,-48.3,32.6,-53.3,17.3C-58.3,1.9,-68.4,-11.8,-68.7,-25.8C-69,-39.9,-59.5,-54.4,-46.4,-59.7C-33.3,-65.1,-16.7,-61.4,0.6,-62.1C17.8,-62.9,35.5,-68.1,46.3,-62Z; M33.7,-40C48.9,-35.3,70.1,-32.5,80.3,-21.3C90.5,-10.1,89.8,9.4,83.1,26C76.3,42.6,63.6,56.3,48.7,60.2C33.9,64,16.9,58.1,1.6,55.8C-13.7,53.6,-27.3,55,-34.5,48.6C-41.7,42.3,-42.5,28.2,-48.5,14.6C-54.5,1.1,-65.6,-11.9,-64.7,-22.9C-63.7,-33.9,-50.7,-42.9,-37.9,-48.4C-25.1,-53.9,-12.6,-56,-1.7,-53.7C9.2,-51.5,18.5,-44.8,33.7,-40Z;
              M26.9,-37.1C32.1,-33.3,31.5,-21.7,40.7,-9.5C49.9,2.8,68.7,15.6,73.1,30.5C77.5,45.3,67.5,62.2,52.9,70.9C38.3,79.5,19.2,79.9,3.8,74.8C-11.6,69.6,-23.3,58.8,-34.4,49C-45.5,39.2,-56,30.4,-59.2,19.5C-62.4,8.6,-58.2,-4.5,-55.3,-19.4C-52.4,-34.3,-50.8,-51,-41.8,-53.6C-32.8,-56.2,-16.4,-44.6,-2.8,-40.7C10.9,-36.9,21.7,-40.9,26.9,-37.1Z;
              M26.5,-42C33.3,-31.6,36.9,-22.4,38.4,-13.5C39.9,-4.6,39.4,4,36.4,11.4C33.4,18.7,27.9,24.8,21.5,31.8C15,38.7,7.5,46.5,-2.1,49.3C-11.6,52.2,-23.3,50.1,-31.1,43.6C-38.9,37.1,-42.8,26.1,-43.5,16C-44.1,5.9,-41.5,-3.3,-37.2,-10.7C-32.8,-18,-26.8,-23.3,-20.4,-33.8C-13.9,-44.3,-6.9,-59.9,1.5,-61.9C9.9,-63.9,19.8,-52.4,26.5,-42Z;
              M46.3,-62C57.1,-55.9,61,-38.5,60.8,-23.5C60.6,-8.4,56.2,4.2,52.4,17.3C48.6,30.4,45.2,44,36.6,54.7C27.9,65.3,14,73,-1.1,74.5C-16.1,76,-32.3,71.3,-40.3,60.5C-48.3,49.6,-48.3,32.6,-53.3,17.3C-58.3,1.9,-68.4,-11.8,-68.7,-25.8C-69,-39.9,-59.5,-54.4,-46.4,-59.7C-33.3,-65.1,-16.7,-61.4,0.6,-62.1C17.8,-62.9,35.5,-68.1,46.3,-62Z"
            ></animate>
          </path>
        </svg>
      </div>

      <div className="absolute inset-0 pt-48 mt-20">
        {/* {theme === "dark" ? ( */}
        <h1 className="name md:text-8xl text-6xl text-center text-style font-bold">
          Abhishek
        </h1>
        {/* ) : (
          <h1 className="name-light md:text-8xl text-6xl text-center text-style font-bold">
            Abhishek
          </h1>
        )} */}

        <h3 className="md:text-2xl text-lg pt-10 text-center dark:text-light text-dark font-bold">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [
                "I'm a Web Developer . . .",
                "I'm a Tech Ethusiast . . .",
                "I ❤️ Building asthetic & interactive apps",
              ],
            }}
          />
        </h3>
        <div className="text-center pt-14 md:pb-20 pb-32">
          <a
            className="contact-btn md:px-12 md:mt-0 mt-60 rounded-lg bg-dark dark:bg-white cursor-pointer dark:text-dark text-white px-9 py-3 font-bold text-md"
            href="#contact"
          >
            Get in touch
          </a>
        </div>
        <div className="flex justify-center">
          <div className="scroll-icon border-4 dark:border-light border-dark ex-1">
            <span className="wheel bg-dark dark:bg-white"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
