"use client";
import React, { useEffect, useRef, JSX } from "react";
import { Poppins } from "next/font/google";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { data } from "../page/interface/about";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
});

const colldata: data[] = [
  {
    photoUrl: "./actor.jpg",
    Alt: "actor",
    heading: "Actor",
  },
  {
    photoUrl: "./media.jpg",
    Alt: "Media man",
    heading: "Media Person",
  },
  {
    photoUrl: "./socialworker.jpg",
    Alt: "social Worker",
    heading: "Social Worker",
  },
  {
    photoUrl: "./videoedit.jpg",
    Alt: "video edit",
    heading: "Video Editor",
  },
];

const slidingImg : data[] = [
  { photoUrl: "./aboutsliding/1.jpg", Alt: "One" },
  { photoUrl: "./aboutsliding/2.jpg", Alt: "Two" },
  { photoUrl: "./aboutsliding/3.jpg", Alt: "Three" },
  { photoUrl: "./aboutsliding/4.jpg", Alt: "Four" },
  { photoUrl: "./aboutsliding/5.jpg", Alt: "Five" },
  { photoUrl: "./aboutsliding/6.jpg", Alt: "Six" },
  { photoUrl: "./aboutsliding/7.jpg", Alt: "Seven" },
  { photoUrl: "./aboutsliding/8.jpg", Alt: "Eight" },
  { photoUrl: "./aboutsliding/9.jpg", Alt: "Nine" },
  { photoUrl: "./aboutsliding/10.jpg", Alt: "Ten" },
  { photoUrl: "./aboutsliding/11.jpg", Alt: "Eleven" }
];

export default function About(): JSX.Element {
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const also = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(also.current, {
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        stagger: 1.5,
      });
    },
    { dependencies: [also] }
  );

  useEffect(() => {
    sectionRefs.current.forEach((el) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
            },
          }
        );
      }
    });
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <section className="bg-[#f1ecec] py-10 px-4 md:px-12">
      <div
        className={`grid grid-cols-1 md:grid-cols-3 gap-6 items-start ${poppins.className}`}
      >
        {/* About Me */}
        <div ref={addToRefs} className=" rounded-xl p-6 h-auto md:h-[100vh]">
          <h1 className="font-bold text-[3rem] mb-4">About Me</h1>
          <p className="text-sm leading-relaxed">
            I am Roow Bin, a simple and honest person born on October 06, 1997
            in Madi Mulkharka 03, Sankhuwasabha, Nepal. I am an Osho Sanyasin
            and a theatre artist since 2019. I aim to be an actor and have
            performed in many street dramas since my school days. My first play
            was 'Arko Artha Nalagema' directed by Sunil Pokharel at Mandala
            Theatre, from the side of Gya Theatre. Now I am a struggling actor,
            media person, video editor, and web designer. I work as a freelancer
            and content creator. I began my media journey as a Radio Jockey in
            grade 9. Later, I joined Radio Reeyaz in Kathmandu, working without
            salary just to follow my passion. I also worked as a teacher in Gyan
            Mandir Secondary School, where I earned my first salary of Rs. 8000.
            My life story is soon to be shared through video. Life is fun –
            seriousness is a disease. Stay happy and believe in karma.
          </p>
        </div>

        {/* Osho Sanyasin */}
        <div
          ref={addToRefs}
          className="bg-white rounded-xl shadow-md p-6 h-[100vh]"
        >
          <h1 className="font-bold text-xl mb-4">Osho Sanyasin</h1>
          <p className="text-sm leading-relaxed mb-4">
            I am an Osho Sanyasin. I took the final decision of my life and
            received Sannyas from Bodhisattva Swami Anand Arun on October 25,
            2021, at Osho Tapoban. My Sannyas name is Swami Dev Chaitanya. I am
            walking the path of Osho in search of the truth of life.
          </p>
          <img
            src="./about2.jpg"
            alt="SANYAS"
            className="rounded-lg w-full object-cover h-[65%]"
          />
        </div>

        {/* Theatre Artist */}
        <div ref={addToRefs} className=" rounded-xl p-6 h-auto md:h-[100vh]">
          <img
            src="./about3.jpg"
            alt="Theatre"
            className="rounded-lg w-full mb-4 object-cover"
          />
          <h1 className="font-bold text-xl mb-2">Theatre Artist</h1>
          <p className="text-sm leading-relaxed">
            I have dreamed of becoming an actor since childhood. To pursue this
            dream, I joined Gya Theatre in 2018 with support from theatre artist
            Pramod Agrahari. Gya Theatre is led by the theatre legend Sunil
            Pokharel, under whom I studied. My first play was 'Arko Artha
            Nalaagema', directed by Sunil Pokharel.
          </p>
        </div>
      </div>

      <h1
        className={`${poppins.className}  font-bold text-[2rem] text-center md:text-left`}
      >
        I am also,
      </h1>

      <div
        ref={also}
        data-scroll-container
        className="flex opacity-0 flex-wrap gap-5 justify-center p-4 mt-auto md:mt-18"
      >
        {colldata.map((value, index) => (
          <div
            data-scroll
            data-scroll-speed="0.5"
            key={index}
            className="relative mt-[3rem] md:mt-auto bg-[#ffffff] w-full max-w-64 md:h-[13rem] h-[11rem] rounded-lg shadow-lg"
          >
            {/* Centered Absolute Image */}
            <img
              src={value.photoUrl}
              alt={value.Alt}
              className="absolute top-[-3rem] left-1/2 transform -translate-x-1/2 w-44 h-44 md:w-52 md:h-52 object-cover rounded-[10px] shadow-2xl border-4 border-white"
            />

            {/* Text below image, centered inside the card */}
            <div className="flex flex-colt items-end justify-center h-full pb-3">
              <h3 className="text-black text-xl font-semibold ">
                {value.heading}
              </h3>
            </div>
          </div>
        ))}
      </div>
       <h2 className={`${poppins.className}  text-center font-bold text-[2rem] mt-6`}>Some Of My Best Photos</h2>
      <div className="mt-12 flex justify-center">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
            autoplay = {{
              delay:2500,
              disableOnInteraction:false,
            }} 
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full max-w-2xl h-[300px] md:h-[400px] rounded-2xl shadow-2xl bg-white/80 p-6 flex items-center justify-center"
        >
          {slidingImg.map((data, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center h-full"
            >
              <img
                className="object-contain w-full h-full rounded-xl shadow-lg border-4 border-white  mx-auto"
                src={data.photoUrl}
                alt={data.Alt}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
