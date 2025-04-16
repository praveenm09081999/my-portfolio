const Contacts = (): JSX.Element => {
  return (
    <section className="px-8 py-20">
      <h2 className="text-4xl font-semibold text-center mb-6">Get in Touch</h2>
      <div className="flex flex-col items-center">
        <form className="flex flex-col w-full md:w-1/2 gap-4">
          <input className="p-3 border rounded-xl" placeholder="Your Name" />
          <input
            className="p-3 border rounded-xl"
            placeholder="Email"
            type="email"
          />
          <textarea
            className="p-3 border rounded-xl"
            placeholder="Message"
            rows={4}
          ></textarea>
          <button className="bg-indigo-600 text-white p-3 rounded-xl hover:bg-indigo-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
