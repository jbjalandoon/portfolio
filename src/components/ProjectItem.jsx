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
    <div
      onClick={onProjectOpen}
      index={index}
      className="relative flex h-72 w-full cursor-pointer flex-col gap-7 rounded bg-blue-950 px-5 py-5 shadow-lg transition-transform hover:-translate-y-4"
    >
      <div className="flex items-center justify-center text-2xl">
        <span className="text-3xl">
          <FaCode />
        </span>
        <div className="ml-auto flex gap-4">
          {github && (
            <a href={github} target="_blank" rel="noreferrer">
              <FiGithub />
            </a>
          )}
          {link && (
            <a href={link} target="_blank" rel="noreferrer">
              <FiExternalLink />
            </a>
          )}
          {video && (
            <a href={video} target="_blank" rel="noreferrer">
              <FiYoutube />
            </a>
          )}
        </div>
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
  );
}
