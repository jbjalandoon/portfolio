import { useState } from "react";
import "./App.css";

function App() {
  const [currentView, setCurrentView] = useState("home");

  return (
    <main className='flex w-full flex-col items-center h-screen'>
      <header className='w-full flex flex-col items-center justify-center max-w-4xl'>
        <span className='text-3xl py-3'>Jerome Jalandoon</span>
        <nav className='py-3'>
          <ul className='flex gap-8 text-lg sm:flex-row flex-col underline-offset-4 transition-all'>
            <li className='nav-link'>Home</li>
            <li className='nav-link'>About Me</li>
            <li className='nav-link'>Projects</li>
            <li className='nav-link'>Contact Me</li>
          </ul>
        </nav>
      </header>
      <div className='w-full py-8 max-w-7xl mt-7 h-full'>
        <div className='border w-full rounded-3xl h-full'></div>
      </div>
    </main>
  );
}

export default App;
