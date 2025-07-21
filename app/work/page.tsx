"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Poppins } from "next/font/google";
import "animate.css"
import Videoedit from "./videoedit/page";
import Moredesign from "./moredesign/page";

// Dynamic imports for client-side rendering
const Thumbnail = dynamic(() => import("./thumbnail/page"), { ssr: false });
const Webpage = dynamic(() => import("./webdevelopment/page"), { ssr: false });

// Define the content interface
interface ContentItem {
  heading: string;
  data: React.ReactNode;
}

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
});

const contents: ContentItem[] = [
  {
    heading: "Thumbnail Design",
    data: <Thumbnail />,
  },
  {
    heading: "Web Development",
    data: <Webpage />,
  },
  {
    heading: "Video Editing",
    data: <Videoedit/>
  },
  {
    heading: "More Design",
    data: <Moredesign/>
  },
];

export default function Work() {
  const [selectedContent, setSelectedContent] = useState<React.ReactNode>(
    contents[0].data // Initialize with first item, no null needed
  );
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleHeadingClick = (data: React.ReactNode, index: number) => {
    setSelectedContent(data);
    setActiveIndex(index);
  };

  return (
    <div
      className={`min-h-screen bg-[#fff] text-white p-4 ${poppins.className} flex flex-col`}
    >
      <h1 className="text-4xl font-bold mb-8 text-center text-black">
        Works
      </h1>

      <div className="flex flex-1 flex-col md:flex-row gap-6">
        {/* Left Navigation Bar */}
        <nav className="md:w-1/4 w-full bg-gray-900 rounded-lg p-4 shadow-lg flex-shrink-0">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Categories
          </h2>
          <ul className="space-y-3">
            {contents.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleHeadingClick(item.data, index)}
                  className={`animate__animated  animate__fadeInLeft block w-full text-left py-2 px-4 rounded-md transition-colors duration-200 ease-in-out ${
                    activeIndex === index
                      ? "bg-white text-black font-semibold"
                      : "hover:bg-gray-700 text-gray-300"
                  }`}
                  aria-current={activeIndex === index ? "true" : undefined}
                >
                  {item.heading}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Content Display Area */}
        <main className="flex-1 max-h-screen bg-gray-900 rounded-lg p-6 shadow-lg overflow-y-auto work-scrollbar">
          <div>{selectedContent}</div>
        </main>
      </div>

      <style jsx>{`
        .work-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .work-scrollbar::-webkit-scrollbar-track {
          background: #333; /* Dark track */
          border-radius: 10px;
        }

        .work-scrollbar::-webkit-scrollbar-thumb {
          background: #888; /* Gray thumb */
          border-radius: 10px;
        }

        .work-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #aaa; /* Lighter gray on hover */
        }

        /* For Firefox */
        .work-scrollbar {
          scrollbar-width: thin; /* "auto" or "thin" */
          scrollbar-color: #888 #333; /* thumb and track color */
        }
      `}</style>
    </div>
  );
}