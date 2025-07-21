"use client";
import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { GrServices } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="sticky top-0 z-[1000] w-full">
      {/* Hamburger Icon (mobile only) */}
      <div className="md:hidden flex items-center px-4 py-3">
        {!open ? (
          <GiHamburgerMenu
            className="text-2xl cursor-pointer"
            onClick={() => setOpen(true)}
          />
        ) : (
          <GrClose
            className="text-2xl cursor-pointer"
            onClick={() => setOpen(false)}
          />
        )}
      </div>

      {/* Desktop Navbar */}
      <nav
        className={`${poppins.className} px-6 justify-center items-center gap-8 bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl mx-auto w-full sticky top-0 z-50 hidden md:flex`}
      >
        <Link href="/">
          <div className="flex flex-col items-center text-black cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#d4d3cf] hover:shadow-xl">
            <FaHome className="text-[1.3rem] mb-1" />
            <h2 className="text-sm">Home</h2>
          </div>
        </Link>
        <Link href="/about">
          <div className="flex flex-col items-center text-black cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#d4d3cf] hover:shadow-xl">
            <FaInfoCircle className="text-[1.3rem] mb-1" />
            <h2 className="text-sm">About</h2>
          </div>
        </Link>
        <Link href="/work">
          <div className="flex flex-col items-center text-black cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#d4d3cf] hover:shadow-xl">
            <MdWork className="text-[1.3rem] mb-1" />
            <h2 className="text-sm">Work</h2>
          </div>
        </Link>
        <Link href="/services">
          <div className="flex flex-col items-center text-black cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#d4d3cf] hover:shadow-xl">
            <GrServices className="text-[1.3rem] mb-1" />
            <h2 className="text-sm">Services</h2>
          </div>
        </Link>
        <Link href="/contact">
          <button className="border-2 border-black border-solid px-4 py-3 rounded-[13px] transition-colors duration-300 ease-in-out hover:bg-black hover:text-white cursor-pointer">
            Schedule a meeting
          </button>
        </Link>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[50vw] bg-white/10 backdrop-blur-lg shadow-2xl z-[1100] transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        } md:hidden flex flex-col text-center pt-16 px-8`}
      >
        <Link href="/" onClick={() => setOpen(false)}>
          <div className="flex flex-col items-center text-black cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#d4d3cf] hover:shadow-xl">
            <FaHome className="text-[1.3rem] mb-1" />
            <h2 className="text-sm">Home</h2>
          </div>
        </Link>
        <Link href="/about" onClick={() => setOpen(false)}>
          <div className="flex flex-col items-center text-black cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#d4d3cf] hover:shadow-xl">
            <FaInfoCircle className="text-[1.3rem] mb-1" />
            <h2 className="text-sm">About</h2>
          </div>
        </Link>
        <Link href="/work" onClick={() => setOpen(false)}>
          <div className="flex flex-col items-center text-black cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#d4d3cf] hover:shadow-xl">
            <MdWork className="text-[1.3rem] mb-1" />
            <h2 className="text-sm">Work</h2>
          </div>
        </Link>
        <Link href="/services" onClick={() => setOpen(false)}>
          <div className="flex flex-col items-center text-black cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#d4d3cf] hover:shadow-xl">
            <GrServices className="text-[1.3rem] mb-1" />
            <h2 className="text-sm">Services</h2>
          </div>
        </Link>
        <Link href="/contact" onClick={() => setOpen(false)}>
          <button className="border-2 border-black border-solid px-4 py-3 rounded-[13px] transition-colors duration-300 ease-in-out hover:bg-black hover:text-white cursor-pointer mt-4">
            Schedule a meeting
          </button>
        </Link>
      </div>
    </div>
  );
}