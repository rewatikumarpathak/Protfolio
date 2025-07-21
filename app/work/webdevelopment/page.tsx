import React from "react";
import { workdata } from "../interface/types";
import "animate.css"
const Logos: workdata[] = [
  {
    photoUrl: "/weblogo/1.png",
    Alt: "www.fulbariagroresort.com",
  },
  {
    photoUrl: "/weblogo/2.jpg",
    Alt: "www.dojobadigad.com",
  },
  {
    photoUrl: "/weblogo/3.png",
    Alt: "www.newskhari.com",
  },
  {
    photoUrl: "/weblogo/4.jpg",
    Alt: "www.reelmandu.com",
  },
];
export default function Webpage() {
  return (
    <>
      <section>
        <div className="animate__animated animate__fadeInUp flex flex-wrap justify-center items-center text-centers gap-12">
          {Logos.map((data, index) => (
            <div className="flex flex-col gap-8 items-center" key={index}>
              <img className="w-38" src={data.photoUrl} alt={data.Alt} />
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
                href={data.Alt}
              >
                {data.Alt}
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
