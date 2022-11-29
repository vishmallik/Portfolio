import { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import projects from "../projects";
import SingleProject from "./SingleProject";

function ProjectSection() {
  let { darkMode } = useContext(ThemeContext);
  return (
    <div className={` text-center py-24 ${darkMode && "dark"}`} id="projects">
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold pb-4 tracking-widest">
          PROJECTS
        </h2>
        <hr
          className={`border-2 border-solid ${
            darkMode ? "border-violet-invert" : "border-lime-400"
          } rounded-full w-16 mx-auto`}
        />
        <p
          className={`${
            darkMode ? "text-gray-200" : "text-gray-500"
          } text-lg lg:text-xl lg:w-1/2 px-6 mx-auto py-6`}
        >
          Here you will find some of the my personal projects that I have
          created during my learning.
        </p>
        <div className="container">
          {/* eslint-disable-next-line array-callback-return*/}
          {projects.map((project, index) => {
            if (index < 3) {
              return <SingleProject key={project.name} {...project} />;
            }
          })}
        </div>
        <Link to="/projects">
          <button
            className={`rounded-md py-4 px-12  ${
              darkMode ? "bg-violet-invert" : "bg-lime-300"
            } text-lg font-extrabold mt-24 tracking-widest drop-shadow-xl`}
          >
            VIEW ALL PROJECTS
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectSection;
