import { FaLink, FaGithub } from "react-icons/fa";

export default function ProjectDetails({ onProjectClose }) {
  return (
    <div className='absolute left-0 top-0 flex h-screen w-full items-center justify-center'>
      <div className='relative flex h-3/4 w-3/4 justify-center rounded-3xl border-2 bg-slate-800 px-10 py-10 shadow-inner md:px-32 md:py-20'>
        <button
          className='absolute right-4 top-3 text-2xl'
          onClick={onProjectClose}>
          X
        </button>
        <div className='flex w-full flex-col gap-3'>
          <h1 className='text-center text-5xl'>My Portfolio</h1>
          <div className='flex gap-4 text-2xl'></div>
          <p className='mb-10'>
            You're looking at it! This website was a lot of work and I'm really
            proud of some of the results I got, such as the svg animations and
            the overall aesthetic.
          </p>
          <div className='flex justify-center gap-10 text-7xl'>
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
