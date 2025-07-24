"use client";
import React, { JSX, useState } from "react";
import axios from "axios";
import "animate.css";

interface form {
  name: string;
  email: string;
  message: string;
}

const Contact = (): JSX.Element => {
  const [data, setdata] = useState<form>({
    name: "",
    email: "",
    message: "",
  });

  const handlesubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
    try {
      const response = await axios.post("api/contact/", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (e) {
      const result = (e as Error).message;
      alert("submit error:" + result)
    }
  };

  return (
    <div className="min-h-screen py-10 px-6 bg-gradient-to-br from-[#fff7f9] to-[#ffeef3]">
      <div className="animate__animated animate__fadeInDown max-w-5xl mx-auto text-center">
        <h1 className="text-[#000000] text-4xl md:text-5xl font-bold mb-4">
          Get in Touch
        </h1>
        <p className="text-lg text-[#000000] mb-12">
          I am here to help and answer any question you might have.📨
        </p>
      </div>

      <div className="max-w-4xl animate__animated  animate__fadeInUp mx-auto bg-white text-black rounded-3xl shadow-2xl overflow-hidden md:flex">
        <div className="md:w-1/2 bg-[#000000] text-white p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
          <p className="mb-2">Available all day</p>
          {/* <p className="mb-4">9am - 6pm</p> */}
          <p>Email: rabinpathak001@gmail.com</p>
          <p>Whatsapp: +977-9862132932</p>
        </div>

        <form
          onSubmit={handlesubmit}
          className="md:w-1/2 p-8 md:p-12 space-y-6"
        >
          <div>
            <label className="block text-sm font-semibold text-[#000000]">
              Name
            </label>
            <input
              onChange={(e) => {
                setdata((prev: form) => ({ ...prev, name: e.target.value }));
              }}
              value={data.name}
              type="text"
              placeholder="John Doe"
              className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#000000]"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#000000]">
              Email
            </label>
            <input
              onChange={(e) => {
                setdata((prev: form) => ({ ...prev, email: e.target.value }));
              }}
              value={data.email}
              type="email"
              placeholder="john@example.com"
              className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#000000]"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#000000]">
              Message
            </label>
            <textarea
              onChange={(e) => {
                setdata((prev: form) => ({ ...prev, message: e.target.value }));
              }}
              value={data.message}
              rows={4}
              placeholder="Your message..."
              className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#000000]"
            ></textarea>
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
