export default function About() {
  return (
    <div className='flex flex-col justify-center gap-10'>
      <h1 className='text-left text-4xl font-bold'>About Me</h1>
      <div className='flex flex-col justify-center gap-10 md:flex-row'>
        <div className='text-md flex w-full flex-col gap-4 font-light md:w-1/2'>
          <p>
            {" "}
            Hello, My name is Jerome and I enjoy web development. The interest
            in web development started when I was a graduating student at PUP -
            Taguig where I created a web application for my capstone project.{" "}
          </p>
          <p>
            I'm a consistent academic achiever in my University where I always
            achieve President's Lister every school year. My capstone team is
            also the best capstone in the batch 2021.
          </p>
          <p>
            Currently, I'm working in my personal projects and I'm open to job
            opportunities where I can contribute, grow, and learn. if you have a
            good opportunities that I can contribute then don't hesitate to
            contact me.
          </p>
        </div>
        <div className='flex w-full flex-col gap-14 md:w-1/2'>
          <h3 className='text-2xl font-bold'>My Skills</h3>
          <div className='flex flex-wrap gap-4'>
            <span className='text-md rounded-2xl bg-slate-200 px-4 py-2 font-bold text-black'>
              HTML
            </span>
            <span className='text-md rounded-2xl bg-slate-200 px-4 py-2 font-bold text-black'>
              CSS
            </span>
            <span className='text-md rounded-2xl bg-slate-200 px-4 py-2 font-bold text-black'>
              JavaScript (ES6+)
            </span>
            <span className='text-md rounded-2xl bg-slate-200 px-4 py-2 font-bold text-black'>
              Tailwind
            </span>
            <span className='text-md rounded-2xl bg-slate-200 px-4 py-2 font-bold text-black'>
              React
            </span>
            <span className='text-md rounded-2xl bg-slate-200 px-4 py-2 font-bold text-black'>
              NextJS
            </span>
            <span className='text-md rounded-2xl bg-slate-200 px-4 py-2 font-bold text-black'>
              NodeJS
            </span>
            <span className='text-md rounded-2xl bg-slate-200 px-4 py-2 font-bold text-black'>
              ExpressJS
            </span>
            <span className='text-md rounded-2xl bg-slate-200 px-4 py-2 font-bold text-black'>
              MongoDB
            </span>
            <span className='text-md rounded-2xl bg-slate-200 px-4 py-2 font-bold text-black'>
              MySQL
            </span>
            <span className='text-md rounded-2xl bg-slate-200 px-4 py-2 font-bold text-black'>
              Git
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
