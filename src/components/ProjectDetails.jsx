import { FaLink, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiReact } from "react-icons/si";

export default function ProjectDetails({ onProjectClose, details }) {
  return (
    <div className='absolute left-0 top-0 flex h-screen w-full animate-enter-instant items-center justify-center opacity-0'>
      <div className='bg relative z-40 flex h-3/4 w-3/4 justify-center rounded-3xl border-4 border-green-600 bg-[url("https://c4.wallpaperflare.com/wallpaper/568/232/7/texture-simple-dark-simple-background-wallpaper-preview.jpg")] bg-cover bg-no-repeat px-10 py-10 shadow-inner md:px-32 md:py-20'>
        <button
          className='absolute right-14 top-7 z-50 text-2xl'
          onClick={onProjectClose}>
          X
        </button>
        <div className='z-40 flex w-full flex-col gap-3'>
          <h1 className='text-center text-5xl'>My Portfolio</h1>
          <div className='flex gap-4 text-2xl'></div>
          <p className='mb-4'>
            You're looking at it! This website was a lot of work and I'm really
            proud of some of the results I got, such as the svg animations and
            the overall aesthetic.
          </p>
          <div className='flex justify-center gap-5'>
            <span className='text-md rounded-2xl bg-slate-200 px-3 py-1 font-bold text-black'>
              Tailwind
            </span>
            <span className='text-md rounded-2xl bg-slate-200 px-3 py-1 font-bold text-black'>
              React
            </span>
          </div>
          <div className='mt-10 flex items-end justify-center gap-10 text-5xl'>
            <a href='#' target='_blank'>
              <FaLink />
            </a>
            <a href='#' target='_blank'>
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
