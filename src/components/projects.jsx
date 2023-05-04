import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProjectItem from "./ProjectItem";
import { createPortal } from "react-dom";
import ProjectDetails from "./ProjectDetails";

const PROJECTS = [
  {
    title: "Title 1",
    description: "Project Description",
    github: "some link",
    link: "some link again",
    mainImage: "https://picsum.photos/200",
    subImages: ["https://picsum.photos/200"],
  },
  {
    title: "Title 2",
    description: "Project Description",
    github: "some link",
    link: "some link again",
    mainImage: "https://picsum.photos/200",
    subImages: ["https://picsum.photos/200"],
  },
  {
    title: "Title 3",
    description: "Project Description",
    github: "some link",
    link: "some link again",
    mainImage: "https://picsum.photos/200",
    subImages: ["https://picsum.photos/200"],
  },
  {
    title: "Title 4",
    description: "Project Description",
    github: "some link",
    link: "some link again",
    mainImage: "https://picsum.photos/200",
    subImages: ["https://picsum.photos/200"],
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
      <div className='relative flex flex-wrap justify-center gap-10'>
        {PROJECTS.map((e, i) => (
          <ProjectItem
            title={e.title}
            image={e.mainImage}
            key={e.title}
            index={i}
            onOpenProject={openProjectHandler}
          />
        ))}
      </div>

      {projectOpened !== null &&
        createPortal(
          <ProjectDetails onProjectClose={closeProjectHandler} />,
          document.getElementById("project")
        )}
    </>
  );
}
