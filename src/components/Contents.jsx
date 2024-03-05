import { useContext } from "react";
import Card from "./Card";
import { ViewContext } from "../store/ViewContext";
import Contacts from "./Contacts";
import Projects from "./Project";
import About from "./About";
import Home from "./Home";

export default function Contents() {
  const { view } = useContext(ViewContext);

  return (
    <div className='mb-10 mt-3 px-4 h-full w-full md:mt-10 md:max-w-6xl lg:px-0'>
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
          <Contacts />
        </Card>
      )}
    </div>
  );
}
