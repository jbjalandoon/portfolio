import { useState } from "react";
import "./App.css";
import Content from "./components/content/Content";
import Header from "./components/headers/Header";

function App() {
  const views = ["home", "about me", "projects", "contact me"];

  return (
    <main className='flex w-full flex-col pt-14 items-center h-screen'>
      <Header items={views} />
      <Content items={views} />
    </main>
  );
}

export default App;
