"use client";
import { workdata } from "../interface/types";
import React from "react";
import "animate.css"

const Imgdata: workdata[] = [
  { photoUrl: "/thumbnail/1.jpg", Alt: "work1" },
  { photoUrl: "/thumbnail/2.jpg", Alt: "work2" },
  { photoUrl: "/thumbnail/3.jpg", Alt: "work3" },
  { photoUrl: "/thumbnail/4.jpg", Alt: "work4" },
  { photoUrl: "/thumbnail/5.jpg", Alt: "work5" },
  { photoUrl: "/thumbnail/6.jpg", Alt: "work6" },
];

export default function Thumbnail() {


  return (
    <section>
      <div
        className="grid md:grid-cols-3 grid-cols-2 justify-center items-center gap-6"
      >
        {Imgdata.map((data, index) => (
          <img
            
            key={index}
            className="animate__animated animate__fadeInUp md:w-[46rem] md:h-[12rem] w-[23rem]  rounded-[1rem] border-solid border-4 border-white "
            src={data.photoUrl}
            alt={data.Alt}
          />
        ))}
      </div>
    </section>
  );
}
