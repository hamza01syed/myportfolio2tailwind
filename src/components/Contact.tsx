// components/Contact.tsx
const Contact = () => {
    return (
      <section id="contact" className="py-16 px-8 bg-gray-50 text-gray-800">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Me</h2>
          <p className="text-lg text-gray-600 mb-8">
            I would love to hear from you! Please fill out the form below and I will get back to you as soon as possible.
          </p>
          <form className="space-y-6">
            <div className="flex flex-col text-left">
              <label htmlFor="name" className="text-gray-700 mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                className="p-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500 transition duration-300"
              />
            </div>
            <div className="flex flex-col text-left">
              <label htmlFor="email" className="text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="p-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500 transition duration-300"
              />
            </div>
            <div className="flex flex-col text-left">
              <label htmlFor="message" className="text-gray-700 mb-1">Message</label>
              <textarea 
                id="message" 
                name="message" 
                required 
                className="p-2 text-gray-800 border border-gray-300 rounded-md resize-vertical focus:outline-none focus:border-yellow-500 transition duration-300 h-32"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="py-2 px-4 text-lg font-semibold text-white bg-yellow-500 rounded-md hover:bg-yellow-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;
  