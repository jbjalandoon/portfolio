import { useContext } from "react";
import Card from "./Card";
import { ViewContext } from "../../store/ViewContext";
import React, { useRef } from "react";
import Contact from "../Contact";
import Projects from "../Project";
import About from "../About";

export default function Content() {
  const { view } = useContext(ViewContext);

  return (
    <div className='mb-10 mt-16 h-2/3 w-full md:mt-2 md:max-w-6xl lg:px-0'>
      {view === 0 && (
        <Card>
          <div className='flex flex-col items-center gap-16 text-center md:flex-row md:gap-10 md:text-left'>
            <div className='flex flex-col gap-4'>
              <span className='text-xl'>Hello, my name is</span>
              <span className='text-7xl'>Jerome Jalandoon.</span>
              <span className='text-7xl'>I'm a Web Developer.</span>
              <p className='w-full text-lg md:w-1/2'>
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
          <About />
        </Card>
      )}
      {view === 2 && (
        <Card>
          <div>
            <h1 className='mb-3 text-4xl'>Things that i've built</h1>
            <p className='text-lg'>
              Here are the things that I made using different technologies.
            </p>
          </div>
          <Projects />
        </Card>
      )}
      {view === 3 && (
        <Card>
          <div>
            <h1 className='mb-3 text-4xl'>Get in touch with me.</h1>
          </div>
          <Contact />
        </Card>
      )}
    </div>
  );
}
