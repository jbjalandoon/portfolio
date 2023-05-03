import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./App.css";
import Content from "./components/content/Content";
import Header from "./components/headers/Header";

function App() {
  const views = ["home", "about me", "projects", "contact me"];

  return (
    <main className='flex w-full flex-col items-center h-screen'>
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
  );
}

export default App;
