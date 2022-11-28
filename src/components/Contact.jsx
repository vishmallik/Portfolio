import { useReducer } from "react";

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

  return (
    <div
      style={{ background: "url('contact.jpg')" }}
      className="bg-no-repeat bg-cover "
      id="contact"
    >
      <div className="container mx-auto text-center py-24">
        <h2 className="text-3xl lg:text-4xl font-extrabold pb-4 tracking-widest">
          CONTACT
        </h2>
        <hr className="border-2 border-solid border-lime-400 rounded-full w-16 mx-auto" />
        <p className="text-gray-500 text-lg lg:text-xl lg:w-1/2 mx-6 lg:mx-auto py-6 lg:mb-16 mb-4">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
        <form
          action="https://formsubmit.co/vishmallik@gmail.com"
          method="POST"
          className="flex flex-col lg:w-1/2  mx-6 lg:mx-auto bg-white p-6 rounded-lg text-left"
        >
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
            onChange={({ target }) =>
              dispatch({ type: "name", payload: target.value })
            }
          />
          <label htmlFor="name" className="mb-2 mt-6 font-bold">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            value={state.email}
            placeholder="Your Email"
            className="bg-gray-200 rounded-md p-4"
            onChange={({ target }) =>
              dispatch({ type: "email", payload: target.value })
            }
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
            onChange={({ target }) =>
              dispatch({ type: "message", payload: target.value })
            }
          />
          <input
            type="submit"
            value="SUBMIT"
            className="rounded-md py-4 px-12  bg-lime-300 text-md lg:text-lg font-extrabold my-6 tracking-widest drop-shadow-xl"
          />
        </form>
      </div>
    </div>
  );
}
export default Contact;
