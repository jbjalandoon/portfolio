import { useState } from "react";
import "./App.css";
import Title from "./components/headers/Title";
import Nav from "./components/headers/Nav";
import Content from "./components/content/Content";
import Header from "./components/headers/Header";
import Card from "./components/content/Card";

function App() {
  const views = ["home", "about me", "projects", "contact me"];

  return (
    <main className='flex w-full flex-col pt-14 items-center h-screen'>
      <Header items={views} title='JEROME JALANDOON' />
      <Content items={views} />
    </main>
  );
}

export default App;
