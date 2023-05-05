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
    <div className='mb-10 mt-3 px-4 h-full w-full md:mt-2 md:max-w-6xl lg:px-0'>
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
          
          <Projects />
        </Card>
      )}
      {view === 3 && (
        <Card>
          <Contact />
        </Card>
      )}
    </div>
  );
}
