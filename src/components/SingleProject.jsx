import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function SingleProject({
  name,
  details,
  link,
  image,
  tools,
  gh_link,
  features,
}) {
  let { darkMode } = useContext(ThemeContext);
  return (
    <div className=" flex flex-wrap justify-between lg:py-16 py-8">
      <div className="lg:basis-1/2 px-6">
        <img src={image} alt={name} className="w-full" />
      </div>
      <div className="self-center lg:px-16 px-8 text-center lg:text-left lg:basis-1/2 ">
        <h4 className="text-xl lg:text-2xl font-extrabold lg:pb-4 py-4">
          {name}
        </h4>
        <p
          className={`${
            darkMode ? "text-gray-200" : "text-gray-500"
          } text-lg lg:text-lg text-justify`}
        >
          {details}
        </p>

        <p
          className={`${
            darkMode ? "text-gray-200" : "text-gray-500"
          } font-semibold underline pt-2`}
        >
          Features:
        </p>
        <ul className="pb-2">
          {features.map((feature, i) => (
            <li
              key={i}
              className={`${
                darkMode ? "text-gray-200" : "text-gray-500"
              } list-disc text-left `}
            >
              {feature}
            </li>
          ))}
        </ul>

        <p
          className={`${
            darkMode ? "text-gray-200" : "text-gray-500"
          } font-semibold underline`}
        >
          Tech Used:
        </p>
        <ul className="flex my-2 items-center flex-wrap">
          {tools.map((tool) => (
            <li
              key={tool}
              className={`lg:px-2 lg:py-1 px-2 py-1 m-1 ${
                darkMode ? "bg-slate-700" : "bg-slate-300"
              } rounded-md text-xs lg:text-base lg:mr-2 `}
            >
              {tool}
            </li>
          ))}
        </ul>

        <div className="flex justify-between items-center">
          <a href={link} className="basis-2/5">
            <button
              className={`rounded-md py-4 lg:py-5 lg:px-12 px-6 ${
                darkMode ? "bg-violet-invert" : "bg-lime-300"
              } text-base font-extrabold my-4 lg:my-2 tracking-widest drop-shadow-xl`}
            >
              LIVE LINK
            </button>
          </a>
          <a href={gh_link} className="lg:basis-3/5 lg:mr-28 mr-8 ">
            <button
              className={`rounded-md py-3 flex items-center lg:px-6 px-4 text-white bg-black text-base font-extrabold my-4 lg:my-2 tracking-wide ${
                darkMode ? "hover:text-violet-invert" : "hover:text-lime-400"
              } drop-shadow-xl`}
            >
              <i className="fab fa-github pr-2 text-2xl lg:text-4xl"></i>
              GITHUB REPO
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default SingleProject;
