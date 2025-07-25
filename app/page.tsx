"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/autoplay";
import { Poppins } from "next/font/google";
import { Roboto } from "next/font/google";
import "animate.css";

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: "500",
});

interface SlideData {
  imageUrl: string;
  text: string;
}

export default function Home() {
  const data: SlideData[] = [
    {
      imageUrl: "/aboutsliding/3.jpg",
      text: "image 1",
    },
    {
      imageUrl: "/aboutsliding/4.jpg",
      text: "image 1",
    },
    {
      imageUrl: "/aboutsliding/5.jpg",
      text: "image 1",
    },
  ];

  return (
    <>
      <section className="lg:flex h-[100vh] md:mb-0 mb-16 grid justify-center items-center md:gap-10 z-0 ">
        <div
          className={`${poppins.className} flex lg:absolute justify-center gap-2 lg:top-80 lg:left-[-8rem] mt-6 items-center lg:rotate-[-90deg] order-last lg:order-1`}
        >
          <p className="w-fit">Creative Director</p>
          <div className="md:w-[18rem] lg:w-[22rem] w-[9rem] bg-black h-[0.1rem]"></div>
          <p>Actor</p>
        </div>

        <div className="lg:ml-40 lg:flex grid  justify-center items-center gap-8 lg:gap-24 order-1 lg:order-last">
          <div className="lg:text-left text-center order-last lg:order-1">
            <h1
              className={`${roboto.className} uppercase font-bold md:text-[7rem] text-[3.5rem]`}
            >
              Hello
            </h1>
            <p
              className={`${poppins.className} lg:mt-[-2rem] lg:ml-2 font-bold md:text-[1.3rem] text-[0.9rem]`}
            >
              I am Rewati Kumar Pathak
            </p>
            <p
              className={`md:w-[24rem] w-[18rem] mt-4 lg:ml-2 font-bold ${poppins.className} text-[#535353]`}
            >
              I worked in different field with the different
              responsibilities. Recently,I am also working as a freelancer. Please
              kindly check the different work done by me in the work section. Additionally,
              If you want to know about me go to the about section.
            </p>
          </div>

          <div className="lg:min-h-screen mt-5 lg:mt-0 flex  items-center lg:ml-28 justify-center md:p-4 font-sans order-1 lg:order-last">
            <div className="md:w-[300px] md:h-[400px] w-[200px] h-[300px]">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards, Autoplay]}
                className="mySwiper w-full h-full"
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                loop={true}
              >
                {data.map((slide: SlideData, index: number) => (
                  <SwiperSlide key={index}>
                    <img
                      src={slide.imageUrl}
                      alt={slide.text}
                      className="absolute inset-0 w-full h-full object-cover rounded-[10px]"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
