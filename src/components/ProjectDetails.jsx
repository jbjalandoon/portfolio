import { FaLink, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiReact } from "react-icons/si";

export default function ProjectDetails({ onProjectClose, details }) {
  const { title, description, github, link, technologies } = details;

  return (
    <div className='absolute left-0 top-0 flex h-screen w-full animate-enter-instant items-center justify-center opacity-0'>
      <div className='bg relative z-40 flex h-3/4 w-3/4 justify-center rounded-3xl border-4 border-green-600 bg-[url("https://c4.wallpaperflare.com/wallpaper/568/232/7/texture-simple-dark-simple-background-wallpaper-preview.jpg")] bg-cover bg-no-repeat px-10 py-10 shadow-inner md:px-32 md:py-20'>
        <button
          className='absolute right-14 top-7 z-50 text-2xl'
          onClick={onProjectClose}>
          X
        </button>
        <div className='z-40 flex w-full flex-col gap-3'>
          <h1 className='text-center text-5xl'>{title}</h1>
          <div className='flex gap-4 text-2xl'></div>
          <p className='mb-4'>{description}</p>
          <div className='flex justify-center gap-5'>
            {technologies.map((e) => (
              <span
                key={e}
                className='text-md rounded-2xl bg-slate-200 px-3 py-1 font-bold text-black'>
                {e}
              </span>
            ))}
          </div>
          <div className='mt-10 flex items-end justify-center gap-10 text-5xl'>
            <a href={link} target='_blank'>
              <FaLink />
            </a>
            <a href={github} target='_blank'>
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
