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
    images: [
      "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      "https://www.doubledtrailers.com/assets/images/random%20horse%20facts%20shareable.png",
      "https://randomwordgenerator.com/img/picture-generator/chair-1840011_640.jpg",
    ],
  },
  {
    title: "Title 2",
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
  {
    title: "Title 3",
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
      <div className='flex w-full flex-col gap-10'>
        <div>
          <h1 className='mb-3 text-4xl'>Things that i've built</h1>
          <p className='text-lg'>
            Here are the things that I made using different technologies.
          </p>
        </div>
        <div className='grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3'>
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
