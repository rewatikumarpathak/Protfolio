import React from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { data } from "../page/interface/about";
import "animate.css";

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
});

const servicedata: data[] = [
  {
    photoUrl: "./services/graphicdesign.png",
    Alt: "Graphic Design",
    heading:
      "I specialize in graphic design, creating eye-catching social media ad posts, YouTube thumbnails, and more. My designs are not only unique but also clean, professional, and tailored to capture attention.",
  },
  {
    photoUrl: "./services/videoedit.png",
    Alt: "Video Editing",
    heading:
     "I offer professional video editing services using Adobe Premiere Pro, delivering both short-form and long-form content. I craft smooth, engaging, and visually appealing edits that bring your vision to life.",
  },
  {
    photoUrl: "./services/webdevelopment.webp",
    Alt: "Web Development",
    heading:
      "I build responsive and user-friendly websites using WordPress and its powerful plugins.I deliver clean, functional, and easy-to-manage websites tailored to your needs.",
  },
];

export default function Services() {
  return (
    <>
      <section className={`${poppins.className} md:h-[100vh] pb-7 bg-[#cecbcb] `}>
        <h1 className="font-bold text-[2.4rem] pt-5 text-center">My Service</h1>
        <div className=" animate__animated animate__zoomIn flex flex-wrap gap-12 justify-center">
          {servicedata.map((data, index) => (
            <div className="bg-white shadow-2xl mt-5 px-12 py-7 w-[18rem] h-[28rem] rounded-2xl flex flex-col gap-2 justify-center items-center text-center">
              <img
                className="w-38  text-center"
                src={data.photoUrl}
                alt={data.Alt}
              />
              <h1 className="font-bold text-[1.3rem]  ">{data.Alt}</h1>
              <p className="text-[0.8rem] text-[#5a5959]">{data.heading}</p>
              <Link href="/contact">
                <button className="px-12  border-2 border-black border-solid py-2 mt-6 rounded-[13px] transition-colors duration-300  ease-in-out  hover:bg-black hover:text-white cursor-pointer">
                  Hire Me
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
