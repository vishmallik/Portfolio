import projects from "../projects";
import SingleProject from "./SingleProject";

function Projects() {
  return (
    <>
      <div
        className="text-center lg:py-48 pt-32 pb-24 bg-no-repeat bg-cover relative"
        id="hero"
        style={{ background: `url("/hero.jpg")` }}
      >
        <div className="container mx-auto">
          <h1 className="font-extrabold  text-4xl lg:text-6xl tracking-widest">
            PROJECTS
          </h1>

          <p className="lg:w-3/4 px-4 text-justify lg:text-center  mx-auto text-xl py-8 tracking-wide">
            This page consists of all the projects I have made until now and
            details about them. Each Project is listed with its description
            along with its features and tech used. Also Live link and Github
            Repo link is also provided. Feel free to check my Repo and view Live
            Deployment of the apps.
          </p>
        </div>
      </div>
      <div className="container mx-auto">
        {projects.map((project) => (
          <SingleProject key={project.name} {...project} />
        ))}
      </div>
    </>
  );
}
export default Projects;
