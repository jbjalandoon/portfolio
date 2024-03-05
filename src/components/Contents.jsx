import { useContext } from "react";
import Card from "./Card";
import { ViewContext } from "../store/ViewContext";
import Contacts from "./Contacts";
import Projects from "./Project";
import About from "./About";
import Home from "./Home";
import Certification from "./Certification";
import Experience from "./Experience";

export default function Contents() {
  const { view } = useContext(ViewContext);

  return (
    <div className="mb-10 mt-3 h-full w-full px-4 md:mt-10 md:max-w-6xl lg:px-0">
      {view === 0 && (
        <Card>
          <Home />
        </Card>
      )}
      {view === 1 && (
        <Card>
          <Experience />
        </Card>
      )}
      {view === 2 && (
        <Card>
          <Certification />
        </Card>
      )}
      {view === 3 && (
        <Card>
          <About />
        </Card>
      )}
      {view === 4 && (
        <Card>
          <Projects />
        </Card>
      )}
      {view === 5 && (
        <Card>
          <Contacts />
        </Card>
      )}
    </div>
  );
}
