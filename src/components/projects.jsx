import { useState } from "react";
import { FaGithub, FaLink } from "react-icons/fa";

const SAMPLE_PROJECTS = [
  {
    title: "Title 1",
    description: "Project Description",
    github: "some link",
    link: "some link again",
    mainImage: "https://picsum.photos/200",
    subImages: ["https://picsum.photos/200"],
  },
  {
    title: "Title 1",
    description: "Project Description",
    github: "some link",
    link: "some link again",
    mainImage: "https://picsum.photos/200",
    subImages: ["https://picsum.photos/200"],
  },
  {
    title: "Title 1",
    description: "Project Description",
    github: "some link",
    link: "some link again",
    mainImage: "https://picsum.photos/200",
    subImages: ["https://picsum.photos/200"],
  },
];

export default function Projects() {
  return (
    <div className='flex gap-10 flex-wrap justify-center'>
      <div className="text-center pt-4 cursor-pointer text-xl border-4 border-green-500 shadow-project bg-100% hover:bg-125% transition-background-size duration-300 ease-in bg-no-repeat bg-center bg-opacity-0 rounded-lg h-64 w-72 bg-[url('https://picsum.photos/200')]">
        Title 1
      </div>
      <div className="text-center pt-4 cursor-pointer text-xl border-4 border-green-500 shadow-project bg-100% hover:bg-125% transition-background-size duration-300 ease-in bg-no-repeat bg-center bg-opacity-0 rounded-lg h-64 w-72 bg-[url('https://picsum.photos/200')]">
        Title 2
      </div>
      <div className="text-center pt-4 cursor-pointer text-xl border-4 border-green-500 shadow-project bg-100% hover:bg-125% transition-background-size duration-300 ease-in bg-no-repeat bg-center bg-opacity-0 rounded-lg h-64 w-72 bg-[url('https://picsum.photos/200')]">
        Title 3
      </div>
    </div>
  );
}
