import { Link } from "react-router-dom";

function SingleProject({ name, details, link, image, tools }) {
  return (
    <div className="flex justify-between py-16">
      <img src={image} alt={name} className="w-1/2" />
      <div className="self-center px-16 text-left">
        <h4 className="text-2xl font-extrabold py-6">{name}</h4>
        <p className="text-gray-500 text-xl">{details}</p>
        {tools && (
          <ul className="flex my-2">
            {tools.map((tool) => (
              <li key={tool} className="p-2 bg-slate-300 rounded-md mx-2">
                {tool}
              </li>
            ))}
          </ul>
        )}
        <Link to={link}>
          <button className="rounded-md py-4 px-12  bg-lime-300 text-lg font-extrabold my-10 tracking-widest drop-shadow-xl">
            LIVE LINK
          </button>
        </Link>
      </div>
    </div>
  );
}
export default SingleProject;
