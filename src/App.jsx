import { useState } from "react";
import "./App.css";

function App() {
  const views = ["home", "about me", "projects", "contact me"];
  let animationClass = "animate-slide-left";
  const [currentView, setCurrentView] = useState({
    index: 0,
    animationClass: "animate-slide-left",
  });

  const changeViewHandler = (e) => {
    const index = views.findIndex(
      (el) => el === e.currentTarget.innerHTML.toLowerCase()
    );
    if (currentView.index > index) animationClass = "animate-slide-right";
    setCurrentView({ index, animationClass });
  };

  return (
    <main className='flex w-full flex-col pt-14 items-center h-screen'>
      <header className='w-full flex flex-col items-center justify-center max-w-4xl'>
        <span className='text-3xl py-3'>Jerome Jalandoon</span>
        <nav className='py-3'>
          <ul className='flex gap-8 text-lg sm:flex-row flex-col underline-offset-4 transition-all select-none'>
            <li
              className={`nav-link ${currentView.index === 0 && "active"}`}
              onClick={changeViewHandler}>
              Home
            </li>
            <li
              className={`nav-link ${currentView.index === 1 && "active"}`}
              onClick={changeViewHandler}>
              About Me
            </li>
            <li
              className={`nav-link ${currentView.index === 2 && "active"}`}
              onClick={changeViewHandler}>
              Projects
            </li>
            <li
              className={`nav-link ${currentView.index === 3 && "active"}`}
              onClick={changeViewHandler}>
              Contact Me
            </li>
          </ul>
        </nav>
      </header>
      <div className='w-full md:max-w-4xl mt-7 my-10 lg:px-0 h-full '>
        {currentView.index === 0 && (
          <div
            className={`border w-full rounded-3xl h-full ${currentView.animationClass}`}>
            Home
          </div>
        )}
        {currentView.index === 1 && (
          <div
            className={`border w-full rounded-3xl h-full ${currentView.animationClass}`}>
            About
          </div>
        )}
        {currentView.index === 2 && (
          <div
            className={`border w-full rounded-3xl h-full ${currentView.animationClass}`}>
            Projects
          </div>
        )}
        {currentView.index === 3 && (
          <div
            className={`border w-full rounded-3xl h-full ${currentView.animationClass}`}>
            Something
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
