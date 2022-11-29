import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import ThemeContext from "../context/ThemeContext";
function Header() {
  let [menu, setMenu] = useState(false);
  let { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={`drop-shadow-2xl ${
        darkMode ? "dark" : "bg-white "
      } fixed left-0 right-0 z-10`}
    >
      <header className="container mx-auto flex justify-between  items-center py-4 px-4  ">
        <a href="/" className="">
          <img
            src="/pic.jpg"
            alt="vishmallik"
            className="w-14 h-14 rounded-full inline-block"
          />
          <h1 className="font-extrabold px-4 text-sm lg:text-lg inline-block align-middle tracking-widest">
            VISAWJEET MALLIK
          </h1>
        </a>
        <nav className="lg:basis-2/5">
          {menu ? (
            <i
              className="fas fa-xmark lg:hidden text-left text-2xl"
              onClick={() => setMenu(false)}
            ></i>
          ) : (
            <i
              className="fas fa-bars lg:hidden text-left text-2xl"
              onClick={() => setMenu(true)}
            ></i>
          )}
          <ul
            className={`lg:flex lg:justify-between items-center text-lg font-bold ${
              menu
                ? `flex flex-col ${
                    darkMode ? "bg-gray-900" : "bg-lime-100"
                  }  justify-start absolute left-0 right-0 top-20`
                : "hidden"
            }`}
          >
            <li
              className={`${
                darkMode ? "hover:text-violet-600" : "hover:text-lime-400"
              } tracking-wide ${menu && "text-lg py-6"}`}
              onClick={() => setMenu(false)}
            >
              <NavHashLink
                to="/#hero"
                smooth
                activeClassName={`border-b-2 border-solid ${
                  darkMode ? "border-violet-600" : "border-lime-400"
                }`}
                className="pb-2"
              >
                HOME
              </NavHashLink>
            </li>
            <li
              className={`${
                darkMode ? "hover:text-violet-600" : "hover:text-lime-400"
              } tracking-wide ${menu && "text-lg py-6"}`}
              onClick={() => setMenu(false)}
            >
              <NavHashLink
                to="/#about"
                smooth
                activeClassName={`border-b-2 border-solid ${
                  darkMode ? "border-violet-600" : "border-lime-400"
                }`}
                className="pb-2"
              >
                ABOUT
              </NavHashLink>
            </li>
            <li
              className={`${
                darkMode ? "hover:text-violet-600" : "hover:text-lime-400"
              } tracking-wide ${menu && "text-lg py-6"}`}
              onClick={() => setMenu(false)}
            >
              <NavLink
                to="/projects"
                activeClassName={`border-b-2 border-solid ${
                  darkMode ? "border-violet-600" : "border-lime-400"
                }`}
                className="pb-2"
              >
                PROJECTS
              </NavLink>
            </li>
            <li
              className={`${
                darkMode ? "hover:text-violet-invert" : "hover:text-lime-400"
              } tracking-wide ${menu && "text-lg py-6"}`}
              onClick={() => setMenu(false)}
            >
              <NavHashLink
                to="/#contact"
                smooth
                activeClassName={`border-b-2 border-solid ${
                  darkMode ? "border-violet-600" : "border-lime-400"
                }`}
                className="pb-2"
              >
                CONTACT
              </NavHashLink>
            </li>
            <li
              className={`${
                darkMode ? "hover:text-violet-600" : "hover:text-lime-400"
              } tracking-wide ${menu && "text-lg py-6"}`}
            >
              <a href="/resume.pdf" download>
                RESUME <i className="fa-solid fa-download"></i>
              </a>
            </li>
            <li className={`${menu && "text-lg py-6 pb-10"}`}>
              {darkMode ? (
                <i
                  className="fas fa-sun w-5 cursor-pointer hover:text-violet-600 text-center block"
                  onClick={() => {
                    setDarkMode(false);
                    setMenu(false);
                  }}
                ></i>
              ) : (
                <i
                  className="fas fa-moon w-5 cursor-pointer hover:text-lime-400 text-center block"
                  onClick={() => {
                    setDarkMode(true);
                    setMenu(false);
                  }}
                ></i>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
