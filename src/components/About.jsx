import skills from "../skill";
import { HashLink } from "react-router-hash-link";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
function About() {
  let { darkMode } = useContext(ThemeContext);
  return (
    <div className={`bg-lime-50 py-24 ${darkMode && "about-dark"}`} id="about">
      <div className="container mx-auto text-center ">
        <h2 className="text-3xl lg:text-4xl font-extrabold pb-4 tracking-widest">
          ABOUT ME
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
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
        <div className="flex justify-between items-stretch flex-wrap">
          <div className="lg:basis-1/2 lg:px-24 px-10 text-justify">
            <h4 className="text-2xl font-extrabold py-10 text-center lg:text-left">
              Get to know me!
            </h4>
            <p
              className={`text-md lg:text-lg tracking-wide py-2 ${
                darkMode ? "text-slate-200" : "text-slate-500"
              }`}
            >
              I'm a FullStack Web Developer who likes to build things for the
              web. I've been learning Full Stack Web development for about six
              months and during that period I've worked on many projects where
              I've implemented multiple web technologies to achieve responsive
              and adaptive websites. Check out some of my work in the Projects
              section.
            </p>
            <p
              className={`text-md lg:text-lg tracking-wide py-2 ${
                darkMode ? "text-slate-200" : "text-slate-500"
              }`}
            >
              Feel free to Connect or Follow me on my{" "}
              <a
                href="https://www.linkedin.com/in/vishmallik"
                className={`underline ${
                  darkMode ? "text-violet-600" : "text-lime-500"
                }`}
              >
                LinkedIn
              </a>{" "}
              and{" "}
              <a
                href="https://github.com/vishmallik"
                className={`underline ${
                  darkMode ? "text-violet-600" : "text-lime-500"
                }`}
              >
                Github
              </a>{" "}
              to know more about my projects.
            </p>
            <p
              className={`text-md lg:text-lg tracking-wide py-2 ${
                darkMode ? "text-slate-200" : "text-slate-500"
              }`}
            >
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
            </p>
            <HashLink to="/#contact" smooth>
              <button
                className={`rounded-md py-4 px-12 lg:text-left text-center block lg:inline-block mx-auto ${
                  darkMode ? "bg-violet-invert" : "bg-lime-300"
                }  text-md lg:text-lg font-extrabold my-10 tracking-widest drop-shadow-xl`}
              >
                CONTACT
              </button>
            </HashLink>
          </div>
          <div className="lg:basis-1/2 pl-4 text-center">
            <h4 className="text-2xl font-extrabold py-10">My Skills</h4>
            <ul className="">
              {skills.map((skill) => (
                <li
                  key={skill.name}
                  className={`${
                    darkMode
                      ? "bg-gray-600 text-slate-200"
                      : "bg-gray-200 text-gray-600"
                  }  rounded-lg text-center lg:m-4 m-2 p-3  flex-wrap  inline-flex justify-between items-center  font-bold text-md lg:text-lg`}
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="lg:h-12 pr-2 lg:pr-4 h-6"
                  />
                  <p>{skill.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
