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

  return (
    <>
      <div className='project-lists relative flex flex-wrap items-center justify-center gap-10'>
        <div className='absolute -left-14 text-2xl'>
          <button>
            <FaChevronLeft />
          </button>
        </div>
        <div className='absolute -right-14 text-2xl'>
          <button>
            <FaChevronRight />
          </button>
        </div>
        <ProjectItem
          title={PROJECTS[index].title}
          image={PROJECTS[index].mainImage}
          key={PROJECTS[index].title}
          index={index}
          onOpenProject={openProjectHandler}
        />
        <ProjectItem
          title={PROJECTS[index + 1].title}
          image={PROJECTS[index + 1].mainImage}
          key={PROJECTS[index + 1].title}
          index={index + 1}
          onOpenProject={openProjectHandler}
        />
        <ProjectItem
          title={PROJECTS[index + 2].title}
          image={PROJECTS[index + 2].mainImage}
          key={PROJECTS[index + 2].title}
          index={index + 2}
          onOpenProject={openProjectHandler}
        />
      </div>

      {projectOpened !== null &&
        createPortal(
          <ProjectDetails
            details={PROJECTS[projectOpened]}
            onProjectClose={closeProjectHandler}
          />,
          document.getElementById("project")
        )}
    </>
  );
}
