import { useContext } from "react";
import Card from "./Card";
import { ViewContext } from "../../store/ViewContext";
import React, { useRef } from "react";
import Contact from "../Contact";
import Projects from "../Project";
import About from "../About";
import Home from "../Home";

export default function Content() {
  const { view } = useContext(ViewContext);

  return (
    <div className='mb-10 mt-16 h-2/3 w-full md:mt-2 md:max-w-6xl lg:px-0'>
      {view === 0 && (
        <Card>
          <Home />
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
