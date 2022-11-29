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
      <header className="container mx-auto flex justify-between  items-center py-5 lg:py-6 px-4  ">
        <a href="/" className="">
          <img
            src="/pic.jpg"
            alt="vishmallik"
            className="w-10 h-10 rounded-full inline-block"
          />
          <h1 className="font-extrabold px-4 text-sm lg:text-md inline-block align-middle">
            VISAWJEET MALLIK
          </h1>
        </a>
        <nav className="lg:basis-1/3">
          {menu ? (
            <i
              className="fas fa-xmark lg:hidden text-left"
              onClick={() => setMenu(false)}
            ></i>
          ) : (
            <i
              className="fas fa-bars lg:hidden text-left"
              onClick={() => setMenu(true)}
            ></i>
          )}
          <ul
            className={`lg:flex lg:justify-between items-center basis-1/2 text-lg font-bold ${
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
            <li className={`${menu && "text-lg py-6 pb-10"}`}>
              {darkMode ? (
                <i
                  className="fas fa-sun w-10 cursor-pointer hover:text-violet-600 text-center block"
                  onClick={() => {
                    setDarkMode(false);
                    setMenu(false);
                  }}
                ></i>
              ) : (
                <i
                  className="fas fa-moon w-10 cursor-pointer hover:text-lime-400 text-center block"
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
