import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./App.css";
import Content from "./components/content/Content";
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
      <p className='text-6xl absolute top-1/2 animate-title'>
        {currentName}
        <span className='animate-blinking'>_</span>
      </p>
      <main className='flex w-full flex-col pt-4 items-center h-screen animate-enter opacity-0'>
        <Header items={views} />
        <Content items={views} />
        <div className=''>
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
