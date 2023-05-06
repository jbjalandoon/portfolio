import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProjectItem from "./ProjectItem";
import { createPortal } from "react-dom";
import ProjectDetails from "./ProjectDetails";

const PROJECTS = [
  {
    title: "My Portfolio",
    description:
      "You're looking at it! This website was a lot of work and I'm really proud of some of the results I got, such as the svg animations and the overall aesthetic.",
    github: "https://github.com/jbjalandoon/alcs",
    link: "some link again",
    technologies: ["Tailwind", "React"],
    mainImage: "https://picsum.photos/200",
  },
  {
    title: "Title 2",
    description: "Project Description",
    github: "some link",
    technologies: ["Tailwind", "React"],
    link: "some link again",
    mainImage: "https://picsum.photos/200",
  },
  {
    title: "Title 3",
    description: "Project Description",
    github: "some link",
    technologies: ["Tailwind", "React"],
    link: "some link again",
    mainImage: "https://picsum.photos/200",
  },
  {
    title: "Title 4",
    description: "Project Description",
    github: "some link",
    technologies: ["Tailwind", "React"],
    link: "some link again",
    mainImage: "https://picsum.photos/200",
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [projectOpened, setProjectOpened] = useState(null);

  const openProjectHandler = (e) => {
    setProjectOpened(e.currentTarget.getAttribute("index"));
  };

  const closeProjectHandler = () => {
    setProjectOpened(null);
  };

  const prevHandler = () => {
    setIndex((prevState) => prevState - 1);
  };
  const nextHandler = () => {
    setIndex((prevState) => prevState + 1);
  };

  return (
    <>
      <div className='flex w-full flex-col gap-10'>
        <div>
          <h1 className='mb-3 text-4xl'>Things that i've built</h1>
          <p className='text-lg'>
            Here are the things that I made using different technologies.
          </p>
        </div>
        <div className='grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
          {PROJECTS.map((e) => (
            <ProjectItem
              title={e.title}
              key={e.title}
              description={e.description}
              technologies={e.technologies}
              github={e.github}
              link={e.link}
            />
          ))}
        </div>
      </div>
    </>
  );
}
