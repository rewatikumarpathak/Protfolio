import React from "react";
import "animate.css";

const videos = [
  {
    src: "https://www.youtube.com/embed/JXB7RquTAD8?si=GJyLIZctXrnnNd36&amp;controls=0",
    title: "YouTube video player 1",
  },
  {
    src: "https://www.youtube.com/embed/YLxYNeNROdw?si=PKYK1Y6u48BTc8-3",
    title: "YouTube video player 2",
  },
  {
    src: "https://www.youtube.com/embed/t0LlByfXi5s?si=SiAofpmjpMnvLL5-",
    title: "YouTube video player 3",
  },
  {
    src: "https://www.youtube.com/embed/8Ypy4dqC-ew?si=hBzh4srjiBjUzV70",
    title: "YouTube video player 4",
  },
  {
    src: "https://www.youtube.com/embed/68SaaHZrFNk?si=1W4-G5AlCgIJ9jH5",
    title: "YouTube video player 5",
  },
  {
    src: "https://www.youtube.com/embed/FNXcO9EfCOg?si=Gzkz4bZUYdQkY3Zm",
    title: "YouTube video player 6",
  },{
    src:"https://www.youtube.com/embed/GSaoDIpb3ts?si=iCtHbDAAFvwehqZ4" ,
    title:"YouTube video player 7",
  },
];

export default function Videoedit() {
  return (
    <section className="animate__animated animate__fadeInUp flex flex-col gap-8 items-center">
      {videos.map((video, idx) => (
        <iframe
          key={idx}
          className="rounded-[1rem] border-solid border-4 border-white shadow-2xl"
          width="790"
          height="415"
          src={video.src}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ))}
    </section>
  );
}