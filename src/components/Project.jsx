import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProjectItem from "./ProjectItem";
import { createPortal } from "react-dom";
import ProjectDetails from "./ProjectDetails";

const PROJECTS = [
  {
    title: "My Portfolio",
    description:
      "Welcome to my portfolio, This portfolio is created using react and tailwind. Explore my skills, projects, and achievements showcasing my passion and dedication.",
    github: "https://github.com/jbjalandoon/portfolio",
    link: "https://jbjalandoon.com/",
    technologies: ["Tailwind", "React", "HTML", "JavaScript"],
    images: [
      "portfolio-about.png",
      "portfolio-home.png",
      "portfolio-title.png",
    ],
  },
  {
    title: "Weather App",
    description:
      "The weather application is created using React and Vanilla CSS. The website features a responsive design, adapting its appearance based on the width of the screen.",
    github: "some link",
    technologies: ["HTML", "JavaScript", "Vanilla CSS", "React"],
    link: "some link again",
    images: ["weather-home.png", "weather-mobile.png"],
  },
  {
    title: "Schedula",
    description:
      "Schedula is a course scheduling and faculty loading system. It helps to easily plot a schedule of a class and faculty without thinking any conflicts of schedule in each section, room and faculty",
    technologies: ["HTML", "NodeJS", "EJS", "CSS", "MongoDB"],
    video: "https://youtu.be/SaI7_D8cyWc",
    images: [
      "https://picsum.photos/1024/786",
      "https://picsum.photos/1024/786",
      "https://picsum.photos/1024/786",
    ],
  },
  {
    title: "Title 4",
    description: "Project Description",
    github: "some link",
    technologies: ["Tailwind", "React"],
    link: "some link again",
    images: [
      "https://picsum.photos/1024/786",
      "https://picsum.photos/1024/786",
      "https://picsum.photos/1024/786",
    ],
  },
];

export default function Projects() {
  const [projectOpened, setProjectOpened] = useState(null);

  const openProjectHandler = (e) => {
    setProjectOpened(e.currentTarget.getAttribute("index"));
  };

  const closeProjectHandler = () => {
    setProjectOpened(null);
  };

  return (
    <>
      <div className="flex w-full flex-col gap-10">
        <div>
          <h1 className="mb-3 text-4xl">Things that i've built</h1>
          <p className="text-lg">
            Here are the things that I made using different technologies.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {PROJECTS.map((e, i) => (
            <ProjectItem
              title={e.title}
              key={e.title}
              description={e.description}
              technologies={e.technologies}
              index={i}
              github={e.github}
              link={e.link}
              onProjectOpen={openProjectHandler}
            />
          ))}
        </div>
      </div>

      {projectOpened !== null &&
        createPortal(
          <ProjectDetails
            details={PROJECTS[projectOpened]}
            onProjectClose={closeProjectHandler}
          />,
          document.body
        )}
    </>
  );
}
