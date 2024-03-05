import { FaCode } from "react-icons/fa";
import { FiGithub, FiExternalLink, FiYoutube } from "react-icons/fi";

export default function ProjectItem({
  title,
  github,
  description,
  video,
  link,
  technologies,
  onProjectOpen,
  index,
}) {
  return (
    <div className="relative h-min w-full shadow-lg transition-transform hover:-translate-y-4">
      <div
        onClick={onProjectOpen}
        index={index}
        className="flex h-72 w-full cursor-pointer flex-col gap-7 rounded bg-blue-950 px-5 py-5"
      >
        <div className="flex items-center justify-start text-2xl">
          <span className="text-3xl">
            <FaCode />
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-xl font-semibold">{title}</span>
          <span className="text-xs">{description}</span>
        </div>
        <div className="absolute bottom-10 flex flex-wrap gap-4 text-xs font-light">
          {technologies.map((e) => (
            <span key={e}>{e}</span>
          ))}
        </div>
      </div>
      <div className="absolute right-0 top-0 flex gap-4 px-6 py-6 text-2xl">
        {github && (
          <a href={github} className="z-30" target="_blank" rel="noreferrer">
            <FiGithub />
          </a>
        )}
        {link && (
          <a href={link} className="z-30" target="_blank" rel="noreferrer">
            <FiExternalLink />
          </a>
        )}
        {video && (
          <a href={video} className="z-30" target="_blank" rel="noreferrer">
            <FiYoutube />
          </a>
        )}
      </div>
    </div>
  );
}
