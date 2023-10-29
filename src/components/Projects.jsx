import React from "react";
import dataProjects from "../assets/projects/pro";

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-light duration-700 dark:bg-[#03001C]"
    >
      <h2 className="text-6xl text-center text-black dark:text-white font-bold">
        Projects
        <hr className="w-24 h-1 mx-auto my-6 bg-name rounded border-0"></hr>
      </h2>

      {/* <div className="flex justify-end">
        <div className="circle md:w-[450px] md:h-[450px] w-[200px] h-[250px]"></div>
      </div> */}
      <div className="py-24">
        <div className="flex mx-10 md:flex-row flex-col flex-wrap">
          {dataProjects.map((project) => {
            return (
              <div
                data-aos="fade-up"
                key={project.id}
                className="dark:text-light m-3 rounded-lg text-dark text-center mx-auto p-4"
              >
                <img
                  className="rounded-lg drop-shadow-2xl project-image"
                  src={project.image}
                  alt={project.name}
                  width="300"
                  height="200"
                />
                <div className="p-2">
                  <h1 className="text-xl py-2 font-bold">{project.name}</h1>
                  <button>
                    <a
                      className={project.status}
                      href={project.link}
                      target="_blank"
                    >
                      <h6 className="dark:text-dark rounded-md px-3 py-1 dark:bg-light text-light bg-dark font-bold">
                        {project.desc}
                      </h6>
                    </a>
                  </button>
                  {/* <button className="px-1 mx-5 rounded-md">
                    <a href={project.link}>
                      <h6 className="dark:text-dark text-light dark:bg-light p-1 rounded-md bg-dark font-bold">
                        LIVE
                      </h6>{" "}
                    </a>
                  </button> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>

     <div className="mx-5">
        <h2 className="dark:text-light text-dark text-xl font-bold text-center pb-8">
          HERE ARE MY GITHUB STATS
        </h2>
        <img
          className="mx-auto"
          src="https://camo.githubusercontent.com/74a034defb06bd849d23324c1fecd03c95799305245f47eb133ce86c776b5d74/68747470733a2f2f73747265616b2d73746174732e64656d6f6c61622e636f6d2f3f757365723d416268692d61726368323436267468656d653d746f6b796f6e6967687426686964655f626f726465723d74727565"
          alt="Github Stats"
        />
     {/*     <img
          className="mx-auto py-6"
          src="https://raw.githubusercontent.com/Abhi-arch246/Abhi-arch246/571abad838f32f51f574e8b29d0a4ec577e753da/github-contribution-grid-snake.svg"
          alt="Snake game using github contribution"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
