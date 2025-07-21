import React from "react";
import {
  FaTiktok,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa"; 
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-black text-white py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 flex flex-col items-center">
          {/* Social Media Icons */}
          <div className="flex justify-center items-center space-x-7 mb-6">
            <a
              href="https://github.com/your-github-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110 text-3xl"
              aria-label="GitHub"
            >
              <FaTiktok />
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin-profile" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110 text-3xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com/your-facebook-profile" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110 text-3xl"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com/your-instagram-profile" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110 text-3xl"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>

          {/* Navigation/Important Links (Optional) */}
          <div className="flex flex-wrap justify-center space-x-6 sm:space-x-10 text-md mb-6">
            <Link
              href="/about"
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline"
            >
              About
            </Link>
            <Link
              href="/work"
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline"
            >
              Works
            </Link>
            <Link
              href="/contact"
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline"
            >
              Contact
            </Link>
          </div>

          {/* Copyright and Credits */}
          <div className="text-sm text-gray-500 text-center space-y-1">
            <p>
              &copy; {new Date().getFullYear()} Rewati Kumar Pathak. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
