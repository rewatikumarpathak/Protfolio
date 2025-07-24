"use client";
import { Poppins } from "next/font/google";
import { Roboto } from "next/font/google";
import { IoArrowDownCircle } from "react-icons/io5";
import 'animate.css';


const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: "500",
});

export default function Home() {
  //it is used for smooth scroll.
  // useEffect(() => {
  //   let scrollInstance: any;
  //   import("locomotive-scroll").then((LocomotiveScroll) => {
  //     scrollInstance = new LocomotiveScroll.default;
  //   });
  //   return () => {
  //     if (scrollInstance) scrollInstance.destroy();
  //   };
  // }, []);

  return (
    <div id="main-scroll">
      <div
        className={`md:flex grid relative justify-center items-center text-center`}
      >
        <div className=" animate__animated animate__fadeInDown grid md:ml-52 md:mt-36 justify-center items-left md:order-1 order-last">
          <div className="grid justify-center items-center text-center gap-0">
            <h1
              className={`${roboto.className} uppercase text-[3rem] md:text-[6rem]`}
              data-scroll
              data-scroll-speed="1"
            >
              Hello
            </h1>
            <p
              className={` ${poppins.className} text-[1.3rem] md:mt-[-1.8rem]`}
            >
              I am Rewati Kumar Pathak
            </p>
          </div>
          <div className="flex gap-3 justify-center md:justify-start text-[1.3rem] text-left mt-32 mb-7 md:mt-44">
            <p className={`${poppins.className}`}>Energetic learner</p>
           
          </div>
        </div>

        <div
          className={`${poppins.className} animate__animated animate__fadeInDownBig flex md:absolute justify-center gap-2 md:top-68 md:left-[-12rem] items-center md:rotate-[-90deg]`}
        >
          <p className="w-fit">Creative Director</p>
          <div className="md:w-[22rem] w-[9rem] bg-black h-[0.1rem]"></div>
          <p>Actor</p>
        </div>

        <div className="md:mt-30 flex mt-8 md:ml-7 ml-5 md:w-auto w-[85%] md:order-last order-first">
          <img src="./profile.png" alt="background" />
        </div>
      </div>
    </div>
  );
}
