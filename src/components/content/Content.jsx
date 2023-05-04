import { useContext } from "react";
import Card from "./Card";
import { ViewContext } from "../../store/ViewContext";
import React, { useRef } from "react";
import Contact from "../Contact";
import Projects from "../Projects";

export default function Content() {
  const { view } = useContext(ViewContext);

  return (
    <div className='w-full md:max-w-6xl md:mt-2 mt-16 lg:px-0 h-2/3 mb-10'>
      {view === 0 && (
        <Card>
          <div className='flex md:flex-row flex-col md:text-left text-center md:gap-10 gap-16 items-center'>
            <div className='flex-col flex gap-4'>
              <span className='text-xl'>Hello, my name is</span>
              <span className='text-7xl'>Jerome Jalandoon.</span>
              <span className='text-7xl'>I'm a Web Developer.</span>
              <p className='text-lg w-full md:w-1/2'>
                I'm a graduating student in Polytechnic University of the
                Philippines Taguig (2023). I specialize in Fullstack
                Development. I'm currently focused in building my own projects.
              </p>
            </div>
          </div>
        </Card>
      )}
      {view === 1 && (
        <Card>
          <div className='flex gap-10 flex-col justify-center'>
            <h1 className='text-4xl'>About Me</h1>
            <div className='flex gap-10'>
              <div className='text-md flex flex-col w-1/2 gap-4'>
                <p>
                  {" "}
                  Hello, My name is Jerome and I enjoy web development. The
                  interest in web development started when I was a graduating
                  student at PUP - Taguig where I created a web application for
                  my capstone project.{" "}
                </p>
                <p>
                  I'm a consistent academic achiever in my University where I
                  always achieve President's Lister every school year. My
                  capstone team is also the best capstone in the batch 2021.
                </p>
                <p>
                  Currently, I'm working in my personal projects and I'm open to
                  job opportunities where I can contribute, grow, and learn. if
                  you have a good opportunities that I can contribute then don't
                  hesitate to contact me.
                </p>
              </div>
              <div className='flex flex-col w-1/2 gap-4 items-center'>
                <h3 className='text-2xln'>My Skills</h3>
                <div className='flex flex-wrap gap-4'>
                  <span className='bg-slate-200 text-md font-bold text-black py-2 px-4 rounded-2xl'>
                    HTML
                  </span>
                  <span className='bg-slate-200 text-md font-bold text-black py-2 px-4 rounded-2xl'>
                    CSS
                  </span>
                  <span className='bg-slate-200 text-md font-bold text-black py-2 px-4 rounded-2xl'>
                    JavaScript (ES6+)
                  </span>
                  <span className='bg-slate-200 text-md font-bold text-black py-2 px-4 rounded-2xl'>
                    Tailwind
                  </span>
                  <span className='bg-slate-200 text-md font-bold text-black py-2 px-4 rounded-2xl'>
                    React
                  </span>
                  <span className='bg-slate-200 text-md font-bold text-black py-2 px-4 rounded-2xl'>
                    NextJS
                  </span>
                  <span className='bg-slate-200 text-md font-bold text-black py-2 px-4 rounded-2xl'>
                    NodeJS
                  </span>
                  <span className='bg-slate-200 text-md font-bold text-black py-2 px-4 rounded-2xl'>
                    ExpressJS
                  </span>
                  <span className='bg-slate-200 text-md font-bold text-black py-2 px-4 rounded-2xl'>
                    MongoDB
                  </span>
                  <span className='bg-slate-200 text-md font-bold text-black py-2 px-4 rounded-2xl'>
                    MySQL
                  </span>
                  <span className='bg-slate-200 text-md font-bold text-black py-2 px-4 rounded-2xl'>
                    Git
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      )}
      {view === 2 && (
        <Card>
          <div>
            <h1 className='text-4xl mb-3'>Things that i've built</h1>
            <p className="text-lg">Here are the things that I made using different technologies.</p>
          </div>
          <Projects />
        </Card>
      )}
      {view === 3 && (
        <Card>
          <div>
            <h1 className='text-4xl mb-3'>Get in touch with me.</h1>
          </div>
          <Contact />
        </Card>
      )}
    </div>
  );
}
