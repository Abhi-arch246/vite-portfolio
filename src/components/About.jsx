import React, { useEffect } from "react";
import html from "../assets/about/html.png";
import css from "../assets/about/css3.png";
import figma from "../assets/about/figma.png";
import javascript from "../assets/about/javascript.png";
import github from "../assets/about/github.png";
import react from "../assets/about/react.png";
import bootstrap from "../assets/about/bootstrap.png";
import tailwind from "../assets/about/tailwind.png";
import nodejs from "../assets/about/node.png";
import vscode from "../assets/about/vscode.png";
import xd from "../assets/about/xd.png";
import about from "../assets/about/about.png";
import AOS from "aos";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });
  return (
    <section
      id="about"
      className="pb-20 dark:bg-[#03001C] bg-light duration-700"
    >
      <h2 className="mx-auto z-100 text-6xl pt-48  md:pt-24 text-center text-black dark:text-white font-bold">
        About
        <hr className="w-12 h-1 mx-auto my-6 bg-name rounded border-0"></hr>
      </h2>

      <h3 className="text-center dark:text-light text-dark mt-10 px-5 md:text-xl text-md font-bold">
        "Design is not just what it looks like and feels like. Design is how it
        works." - Steve Jobs
      </h3>
      {/* Gradient Bg */}
      {/* <div className="flex justify-center">
        <div className="circle md:w-[450px] md:h-[450px] w-[200px] h-[250px]"></div>
      </div> */}
      {/*  */}
      <div
        data-aos="flip-down"
        className="flex flex-col-reverse space-y-10 items-center justify-center mx-6 md:flex-row md:space-x-24 md:space-y-0 md:p-4"
      >
        <div className="rounded-2xl md:w-2/3 text-glass shadow-[#aea5a2] dark:shadow-[#020010] dark:bg-[#111928bf] bg-[#f2f3f4] p-4 md:m-3 m-1 shadow-2xl">
          <h2 className="text-center text-style text-name text-3xl font-bold py-6">
            Potula Abhishek
          </h2>
          <div className="dark:text-white text-black font-semibold py-6">
            <h3 className="">
              I'm a frontEnd Web Developer based in Hyderabad, India.
            </h3>
            <br />
            <h3 className="">
              I have a passion for creating intuitive and visually appealing
              user interfaces that enhance the overall user experience. I have a
              strong foundation in HTML, CSS, and JavaScript, as well as
              experience with popular front-end frameworks such as ReactJS
            </h3>
            <br />
            <h3 className="pb-1">
              I have worked on a variety of projects, ranging from simple
              brochure websites to complex e-commerce platforms, and have a
              proven track record of delivering high-quality results on time and
              within budget.
            </h3>
          </div>
        </div>
        <div data-aos="fade-up-right" className="text-center py-6 md:w-1/3">
          <img src={about} alt="coder image" width="484" height="516" />
        </div>
      </div>
      {/* Tech Icons */}
      <div
        data-aos="zoom-out"
        className="flex md:mx-6 mx-3 pt-8 flex-row justify-center flex-wrap"
      >
        <img src={html} width="120" height="80" alt="Html" />
        <img src={css} width="120" height="80" alt="Css" />
        <img src={javascript} width="120" height="80" alt="Javascript" />
        <img src={react} width="120" height="80" alt="React" />
        <img src={nodejs} width="120" height="40" alt="Node JS" />
        <img src={bootstrap} width="120" height="80" alt="Bootstrap" />
        <img src={tailwind} width="120" height="80" alt="Tailwind" />
        <img src={vscode} width="120" height="80" alt="VScode" />
        <img src={xd} width="120" height="80" alt="Adobe xd" />
        <img src={figma} width="120" height="80" alt="Figma" />
        <img src={github} width="120" height="80" alt="Github" />
      </div>
    </section>
  );
}

export default About;
