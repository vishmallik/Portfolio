function Contact() {
  return (
    <div
      style={{ background: "url('contact.jpg')" }}
      className="bg-no-repeat bg-cover "
      id="contact"
    >
      <div className="container mx-auto text-center py-24">
        <h2 className="text-4xl font-extrabold pb-4 tracking-widest">
          CONTACT
        </h2>
        <hr className="border-2 border-solid border-lime-400 rounded-full w-16 mx-auto" />
        <p className="text-gray-500 text-xl w-1/2 mx-auto py-6 mb-16">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
        <form
          action=""
          className="flex flex-col w-1/2 mx-auto bg-white p-6 rounded-lg text-left"
        >
          <label htmlFor="name" className="mb-2 font-bold">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            className="bg-gray-200 rounded-md p-4"
          />
          <label htmlFor="name" className="mb-2 mt-6 font-bold">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Your Email"
            className="bg-gray-200 rounded-md p-4"
          />
          <label htmlFor="name" className="mb-2 mt-6 font-bold">
            Message
          </label>
          <textarea
            className="bg-gray-200 rounded-md p-4"
            rows="10"
            type="text"
            name="message"
            id="message"
            placeholder="Your Message"
          />
          <input
            type="submit"
            value="SUBMIT"
            className="rounded-md py-4 px-12  bg-lime-300 text-lg font-extrabold my-6 tracking-widest drop-shadow-xl"
          />
        </form>
      </div>
    </div>
  );
}
export default Contact;
