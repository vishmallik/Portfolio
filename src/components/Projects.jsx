import projects from "../projects";
import SingleProject from "./SingleProject";

function Projects() {
  return (
    <>
      <div
        className="text-center py-64 bg-no-repeat bg-cover relative"
        id="hero"
        style={{ background: `url("/hero.jpg")` }}
      >
        <div className="container mx-auto">
          <h1 className="font-extrabold  text-6xl tracking-widest">PROJECTS</h1>

          <p className="w-3/4  mx-auto text-xl py-8 tracking-wide">
            This page consists of all the projects I have made until now and
            details about them.
          </p>
        </div>
      </div>
      <div className="container mx-auto">
        {projects.map((project) => (
          <SingleProject
            key={project.name}
            name={project.name}
            details={project.details}
            link={project.link}
            image={project.image}
            tools={project.tools}
          />
        ))}
      </div>
    </>
  );
}
export default Projects;
