import React from 'react';

const Contacts = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      <div className="flex-grow flex flex-col justify-center max-w-6xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4 text-center">Contact Me</h1>
        <p className="text-lg leading-relaxed mb-12 text-center">
          I would love to hear from you! Whether you have a question, want to discuss a project, 
          or just want to connect, feel free to reach out to me.
        </p>

        <div className="flex flex-col md:flex-row gap-8">
        
          <div className="md:w-1/2 bg-white shadow-md rounded-lg p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-4">Contact Details</h2>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                Email: <a href="mailto:shalangcharmain@gmail.com" className="text-blue-600 hover:underline">shalangcharmain@gmail.com</a>
              </li>
              <li>
                Phone: <a href="tel:+27646258512" className="text-blue-600 hover:underline">+27 64 625 8512</a>
              </li>
              <li>
                LinkedIn: <a href="https://www.linkedin.com/in/shalangleago" target="_blank" className="text-blue-600 hover:underline">linkedin.com/in/shalangleago</a>
              </li>
              <li>
                GitHub: <a href="https://github.com/shalang" target="_blank" className="text-blue-600 hover:underline">github.com/shalang</a>
              </li>
            </ul>
          </div>

          <div className="md:w-1/2 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Your name" className="w-full border border-gray-300 p-2 rounded"/>
              <input type="email" placeholder="Your email" className="w-full border border-gray-300 p-2 rounded"/>
              <textarea placeholder="Your message" className="w-full border border-gray-300 p-2 rounded" rows="6"></textarea>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
