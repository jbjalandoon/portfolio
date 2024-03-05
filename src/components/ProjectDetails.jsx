import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { getImageURL } from "../utils/image-utils.js";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function ProjectDetails({ onProjectClose, details }) {
  const { title, description, github, link, technologies, images } = details;

  const [activeImage, setActiveImage] = useState(0);

  const prevImageHandler = () => {
    setActiveImage((prevState) => prevState - 1);
  };
  const nextImageHandler = () => {
    setActiveImage((prevState) => prevState + 1);
  };

  return (
    <>
      <button
        onClick={onProjectClose}
        className="fixed right-7 top-7 z-50 rounded-full bg-slate-300 bg-opacity-10 p-4 text-2xl transition-all duration-500 hover:bg-opacity-40"
      >
        <AiOutlineClose />
      </button>
      <div className="fixed flex h-screen min-h-screen w-full flex-col items-center justify-center md:flex-row">
        <div className="relative flex h-3/4 w-full items-center justify-center gap-10 bg-black md:h-full md:w-3/4">
          {activeImage !== 0 && (
            <button
              onClick={prevImageHandler}
              className="absolute left-7 z-50 rounded-full bg-slate-300 bg-opacity-0 p-3 text-4xl font-bold transition-all duration-500 hover:bg-opacity-40"
            >
              <BsChevronLeft />
            </button>
          )}
          {activeImage !== images.length - 1 && (
            <button
              onClick={nextImageHandler}
              className="absolute right-7 z-50 rounded-full bg-slate-300 bg-opacity-0 p-3 text-4xl font-bold transition-all duration-500 hover:bg-opacity-40"
            >
              <BsChevronRight />
            </button>
          )}
          <LazyLoadImage
            src={getImageURL(images[activeImage])}
            className="max-h-full scroll-px-1 px-7 py-16"
            alt="Image Alt"
            PlaceholderSrc="https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
            effect="blur"
          />
        </div>
        <div className="relative flex h-full w-full flex-col justify-start gap-5 bg-slate-900 px-6 py-10 md:w-1/4 md:justify-center">
          <div className="flex gap-3 text-3xl font-bold">
            {title}
            <div className="ml-auto flex gap-4 md:hidden">
              <a href={github} target="_blank" rel="noreferrer">
                <FiGithub />
              </a>
              <a href={link} target="_blank" rel="noreferrer">
                <FiExternalLink />
              </a>
            </div>
          </div>
          <div className="text-md mb-0 font-light md:mb-10">{description}</div>
          <div className="mb-10 hidden justify-center gap-5 text-3xl md:flex">
            <a href={github} target="_blank" rel="noreferrer">
              <FiGithub />
            </a>
            <a href={link} target="_blank" rel="noreferrer">
              <FiExternalLink />
            </a>
          </div>
          <div className="text-md flex flex-wrap gap-4">
            {technologies.map((e) => (
              <span
                key={e}
                className="md:rounded-2xl md:border-2 md:px-5 md:py-1"
              >
                {e}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
