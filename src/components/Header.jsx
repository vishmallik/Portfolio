import { NavHashLink } from "react-router-hash-link";
function Header() {
  return (
    <div className=" drop-shadow-2xl bg-white fixed left-0 right-0 z-10">
      <header className="container mx-auto flex justify-between items-center py-6 ">
        <a href="/" className="flex justify-between items-center">
          <img
            src="/pic.jpg"
            alt="vishmallik"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="font-extrabold px-4">VISAWJEET MALLIK</h1>
        </a>
        <nav className="w-1/4">
          <ul className="flex justify-between items-center basis-1/2 text-lg font-bold ">
            <li className="hover:text-lime-400 tracking-wide">
              <NavHashLink
                to="/#hero"
                smooth
                activeClassName="border-b-2 border-solid border-lime-400 "
                className="pb-2"
              >
                HOME
              </NavHashLink>
            </li>
            <li className="hover:text-lime-400 tracking-wide">
              <NavHashLink
                to="/#about"
                smooth
                activeClassName="border-b-2 border-solid border-lime-400 "
                className="pb-2"
              >
                ABOUT
              </NavHashLink>
            </li>
            <li className="hover:text-lime-400 tracking-wide">
              <NavHashLink
                to="/#projects"
                smooth
                activeClassName="border-b-2 border-solid border-lime-400 "
                className="pb-2"
              >
                PROJECTS
              </NavHashLink>
            </li>
            <li className="hover:text-lime-400 tracking-wide">
              <NavHashLink
                to="/#contact"
                smooth
                activeClassName="border-b-2 border-solid border-lime-400 "
                className="pb-2"
              >
                CONTACT
              </NavHashLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
