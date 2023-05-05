import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./App.css";
import Contents from "./components/Contents";
import Header from "./components/headers/Header";
import { useEffect, useState } from "react";

function App() {
  const views = ["home", "about me", "projects", "contact me"];
  const [currentName, setCurrentName] = useState("");
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [index, setIndex] = useState(0);
  const name = "{JEROME JALANDOON}";

  useEffect(() => {
    if (index < name.length) {
      let delay = 70;
      if (isFirstLoad) delay = 1000;
      const timeout = setTimeout(() => {
        setCurrentName((prevState) => prevState + name[index]);
        setIsFirstLoad(false);
        setIndex((prevState) => prevState + 1);
      }, delay);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [index, currentName]);

  return (
    <>
      <p className='md:text-6xl text-2xl absolute top-1/2 animate-title'>
        {currentName}
        <span className='animate-blinking'>_</span>
      </p>
      <main id="main" className='flex w-full flex-col items-center md:h-screen h-fit animate-enter opacity-0'>
        <Header items={views} />
        <Contents items={views} />
        <div className='relative bottom-0 h-24 w-full justify-center items-center flex'>
          <ul className='flex gap-6 text-2xl'>
            <li>
              <a href='mailto:jerome.jalandoon@gmail.com'>
                <FaEnvelope />
              </a>
            </li>
            <li>
              <a href='https://github.com/jbjalandoon' target='_blank'>
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/jbjalandoon' target='_blank'>
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
