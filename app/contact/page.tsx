import React, { JSX } from "react";
import 'animate.css';

const Contact = () : JSX.Element => {
  return (
    <div className="min-h-screen py-10 px-6 bg-gradient-to-br from-[#fff7f9] to-[#ffeef3]">
      <div
        className= "animate__animated animate__fadeInDown max-w-5xl mx-auto text-center"
      >
        <h1 className="text-[#000000] text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg text-[#000000] mb-12">
         I am here to help and answer any question you might have.📨
        </p>
      </div>

      <div 
        className="max-w-4xl animate__animated  animate__fadeInUp mx-auto bg-white text-black rounded-3xl shadow-2xl overflow-hidden md:flex"
      >
        <div className="md:w-1/2 bg-[#000000] text-white p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
          <p className="mb-2">Available all day</p>
          {/* <p className="mb-4">9am - 6pm</p> */}
          <p>Email: rabinpathak001@gmail.com</p>
          <p>Whatsapp:  +977-9862132932</p>
        </div>

        <form className="md:w-1/2 p-8 md:p-12 space-y-6">
          <div>
            <label className="block text-sm font-semibold text-[#000000]">Name</label>
            <input type="text" placeholder="John Doe" className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#000000]" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#000000]">Email</label>
            <input type="email" placeholder="john@example.com" className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#000000]" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#000000]">Message</label>
            <textarea rows={4} placeholder="Your message..." className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#000000]"></textarea>
          </div>
          <button className="bg-[#000000] text-white px-6 py-3 rounded-xl hover:bg-[#4b4b4b] transition-all duration-300 w-full font-semibold">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
