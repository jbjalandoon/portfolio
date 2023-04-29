import { useState } from "react";
import "./App.css";
import Title from "./components/headers/Title";
import Nav from "./components/headers/Nav";

function App() {
  const views = ["home", "about me", "projects", "contact me"];

  return (
    <main className='flex w-full flex-col pt-14 items-center h-screen'>
      <header className='w-full flex flex-col items-center justify-center max-w-4xl'>
        <Title>Jerome Jalandoon</Title>
        <Nav items={views} />
      </header>
      <div className='w-full md:max-w-4xl mt-7 my-10 lg:px-0 h-full '>
        {currentView.index === 0 && (
          <div
            className={`border w-full rounded-3xl h-full flex flex-col items-center ${currentView.animationClass}`}>
            Home
          </div>
        )}
        {currentView.index === 1 && (
          <div
            className={`border w-full rounded-3xl h-full flex flex-col items-center ${currentView.animationClass}`}>
            About
          </div>
        )}
        {currentView.index === 2 && (
          <div
            className={`border w-full rounded-3xl h-full flex flex-col items-center ${currentView.animationClass}`}>
            Projects
          </div>
        )}
        {currentView.index === 3 && (
          <div
            className={`border w-full rounded-3xl h-full flex flex-col items-center ${currentView.animationClass}`}>
            Something
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
