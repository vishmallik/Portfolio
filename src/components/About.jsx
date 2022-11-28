import skills from "../skill";
import { HashLink } from "react-router-hash-link";
function About() {
  return (
    <div className="bg-lime-50 py-24 " id="about">
      <div className="container mx-auto text-center ">
        <h2 className="text-4xl font-extrabold pb-4 tracking-widest">
          ABOUT ME
        </h2>
        <hr className="border-2 border-solid border-lime-400 rounded-full w-16 mx-auto" />
        <p className="text-gray-500 text-xl w-1/2 mx-auto py-6">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
        <div className="flex justify-between items-stretch">
          <div className="basis-1/2 px-24 text-justify">
            <h4 className="text-2xl font-extrabold py-10">Get to know me!</h4>
            <p className="text-lg tracking-wide py-2 text-slate-500">
              I'm a Frontend Web Developer building the Front-end of Websites
              and Web Applications that leads to the success of the overall
              product. Check out some of my work in the Projects section.
            </p>
            <p className="text-lg tracking-wide py-2 text-slate-500">
              I also like sharing content related to the stuff that I have
              learned over the years in Web Development so it can help other
              people of the Dev Community. Feel free to Connect or Follow me on
              my Linkedin where I post useful content related to Web Development
              and Programming
            </p>
            <p className="text-lg tracking-wide py-2 text-slate-500">
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
            </p>
            <HashLink to="/#contact" smooth>
              <button className="rounded-md py-4 px-12  bg-lime-300 text-lg font-extrabold my-10 tracking-widest drop-shadow-xl">
                CONTACT
              </button>
            </HashLink>
          </div>
          <div className="basis-1/2 pl-4 text-center">
            <h4 className="text-2xl font-extrabold py-10">My Skills</h4>
            <ul className="">
              {skills.map((skill) => (
                <li
                  key={skill.name}
                  className=" bg-gray-200 rounded-lg text-center m-4 p-4 inline-flex justify-between items-center text-gray-600 font-bold text-lg "
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="h-12 pr-4"
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
