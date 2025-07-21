"use client";
import { workdata } from "../interface/types";
import React from "react";
import "animate.css"

const Imgdata: workdata[] = [
  { photoUrl: "/moredesign/1.jpg", Alt: "work1" },
  { photoUrl: "/moredesign/2.jpg", Alt: "work2" },
  { photoUrl: "/moredesign/3.jpg", Alt: "work3" },
  { photoUrl: "/moredesign/4.jpg", Alt: "work4" },
  { photoUrl: "/moredesign/5.jpg", Alt: "work5" },
  { photoUrl: "/moredesign/6.jpg", Alt: "work6" },
];

export default function Moredesign() {


  return (
    <section>
      <div
        className="grid md:grid-cols-3  grid-cols-2 justify-center items-center gap-6"
      >
        {Imgdata.map((data, index) => (
          <img
            
            key={index}
            className="animate__animated animate__fadeInUp md:w-[26rem] md:h-[18rem] w-[23rem]  rounded-[1rem] border-solid border-4 border-white "
            src={data.photoUrl}
            alt={data.Alt}
          />
        ))}
      </div>
    </section>
  );
}
