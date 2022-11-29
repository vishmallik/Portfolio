import { useContext, useReducer, useState } from "react";
import ThemeContext from "../context/ThemeContext";

function reducer(state, action) {
  switch (action.type) {
    case "name":
      return {
        ...state,
        name: action.payload,
      };
    case "email":
      return {
        ...state,
        email: action.payload,
      };
    case "message":
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
}

function Contact() {
  let [state, dispatch] = useReducer(reducer, {
    name: "",
    email: "",
    message: "",
  });
  let { darkMode } = useContext(ThemeContext);
  let [successMessage, setSuccessMessage] = useState("");
  let [errorMessage, setErrorMessage] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    let data = {
      name: state.name,
      email: state.email,
      message: state.message,
    };
    if (state.name && state.email && state.message) {
      fetch("https://getform.io/f/41413b57-2739-4fb5-bd90-8854b997d3c5", {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          data.success
            ? setSuccessMessage("Form Submitted Successfully!!!")
            : setErrorMessage("Oops! Something Went Wrong...");
          dispatch({ type: "name", payload: "" });
          dispatch({ type: "email", payload: "" });
          dispatch({ type: "message", payload: "" });
        });
    } else {
      setErrorMessage("All field are required");
    }
  }
  return (
    <div
      style={{ background: "url('contact.jpg')" }}
      className={`bg-no-repeat bg-cover ${darkMode && "invert"}`}
      id="contact"
    >
      <div className="container mx-auto text-center py-24">
        <h2 className="text-3xl lg:text-4xl font-extrabold pb-4 tracking-widest">
          CONTACT
        </h2>
        <hr className="border-2 border-solid border-lime-400 rounded-full w-16 mx-auto" />
        <p
          className={`${
            darkMode ? "teat-gray-200" : "text-gray-500"
          } text-lg lg:text-xl lg:w-1/2 mx-6 lg:mx-auto py-6 lg:mb-16 mb-4`}
        >
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
        <form
          className="flex flex-col lg:w-1/2  mx-6 lg:mx-auto bg-white p-6 rounded-lg text-left"
          onSubmit={handleSubmit}
        >
          {errorMessage && (
            <center className="text-red-500">{errorMessage}</center>
          )}
          {successMessage && (
            <center className="text-green-500">{successMessage}</center>
          )}

          <label htmlFor="name" className="mb-2 font-bold">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={state.name}
            placeholder="Your Name"
            className="bg-gray-200 rounded-md p-4"
            onChange={({ target }) => {
              dispatch({ type: "name", payload: target.value });
              setErrorMessage("");
              setSuccessMessage("");
            }}
          />
          <label htmlFor="name" className="mb-2 mt-6 font-bold">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={state.email}
            placeholder="Your Email"
            className="bg-gray-200 rounded-md p-4"
            onChange={({ target }) => {
              dispatch({ type: "email", payload: target.value });
              setErrorMessage("");
              setSuccessMessage("");
            }}
          />
          <label htmlFor="name" className="mb-2 mt-6 font-bold">
            Message
          </label>
          <textarea
            className="bg-gray-200 rounded-md p-4"
            rows="5"
            type="text"
            name="message"
            value={state.message}
            id="message"
            placeholder="Your Message"
            onChange={({ target }) => {
              dispatch({ type: "message", payload: target.value });
              setErrorMessage("");
              setSuccessMessage("");
            }}
          />
          <input
            type="submit"
            value="SUBMIT"
            className={`rounded-md py-4 px-12  bg-lime-300 text-md lg:text-lg font-extrabold my-6 tracking-widest cursor-pointer ${
              darkMode ? "shadow-none" : "drop-shadow-xl"
            }`}
          />
        </form>
      </div>
    </div>
  );
}
export default Contact;
