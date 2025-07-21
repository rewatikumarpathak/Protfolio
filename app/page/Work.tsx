"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { workdata } from "./interface/work";
import { Poppins } from "next/font/google";
import Worktwo from "./worksubpage/Worktwo";

gsap.registerPlugin(ScrollTrigger);

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const Imgdata: workdata[] = [
  { photoUrl: "./thumbnail/1.jpg", Alt: "work1" },
  { photoUrl: "./thumbnail/2.jpg", Alt: "work2" },
  { photoUrl: "./thumbnail/3.jpg", Alt: "work3" },
  { photoUrl: "./thumbnail/4.jpg", Alt: "work4" },
  { photoUrl: "./thumbnail/5.jpg", Alt: "work5" },
  { photoUrl: "./thumbnail/6.jpg", Alt: "work6" },
];

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRefs = useRef<HTMLImageElement[]>([]);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    gsap.from(imgRefs.current, {
      opacity: 0,
      x: -40,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
        end: "top 0%",
        scrub: true,
        markers: false,
      },
    });
  }, []);

  return (
    <section className="h-auto min-h-[100vh]">
      <div className="ml-4 md:ml-20 text-center">
        <h1 className="font-bold text-[2rem] md:text-[3rem]">Works</h1>
      </div>
      <div className="text-center">
        <h3
          className={`${poppins.className} ml-4 underline md:ml-20 text-[1.1rem] md:text-[1.4rem] font-bold`}
        >
          Thumbnail design
        </h3>
      </div>
      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-4 items-center w-full max-w-full overflow-x-hidden"
        style={{ willChange: "transform" }}
      >
        {Imgdata.map((data, index) => (
          <img
            ref={(el: any) => (imgRefs.current[index] = el)}
            key={index}
            className="w-full max-w-full px-6 rounded-[20px] object-cover"
            src={data.photoUrl}
            alt={data.Alt}
          />
        ))}
      </div>
      <div className="h-[100vh]">
        <Worktwo />
      </div>
    </section>
  );
}
