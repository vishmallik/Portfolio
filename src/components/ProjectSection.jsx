import { Link } from "react-router-dom";
import projects from "../projects";
import SingleProject from "./SingleProject";

function ProjectSection() {
  return (
    <div className="container mx-auto text-center py-24" id="projects">
      <h2 className="text-4xl font-extrabold pb-4 tracking-widest">PROJECTS</h2>
      <hr className="border-2 border-solid border-lime-400 rounded-full w-16 mx-auto" />
      <p className="text-gray-500 text-xl w-1/2 mx-auto py-6 mb-16">
        Here you will find some of the personal and clients projects that I
        created with each project containing its own case study
      </p>
      <div className="container">
        {projects.map((project, index) => {
          if (index < 3) {
            return (
              <SingleProject
                key={project.name}
                name={project.name}
                details={project.details}
                link={project.link}
                image={project.image}
              />
            );
          }
        })}
      </div>
      <Link to="/projects">
        <button className="rounded-md py-4 px-12  bg-lime-300 text-lg font-extrabold mt-24 tracking-widest drop-shadow-xl">
          VIEW ALL PROJECTS
        </button>
      </Link>
    </div>
  );
}

export default ProjectSection;
