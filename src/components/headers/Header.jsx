import { useState } from "react";
import Nav from "./Nav";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Title from "./Title";

export default function Header({ items, title }) {
  const [showHeader, setShowHeader] = useState(false);

  const showHeaderHandler = () => {
    setShowHeader((prevState) => !prevState);
  };

  return (
    <>
      <header
        className={`w-1/2 md:left-auto mt-12 left-1/2 md:animate-none shadow-xl md:shadow-none md:w-full md:flex-row flex-col z-50 md:bg-transparent bg-slate-950 flex md:h-12 h-screen items-center justify-center md:inline-flex max-w-4xl md:relative ${
          showHeader ? "absolute" : "hidden"
        } md:top-auto top-0`}>
        {/* <Title>{title}</Title> */}
        <button
          className='absolute top-8 p-3 md:hidden block'
          onClick={showHeaderHandler}>
          X
        </button>
        <Nav items={items} />
      </header>
      {!showHeader && <button
        className='md:hidden absolute text-7xl top-7 right-10'
        onClick={showHeaderHandler}>
        <HiOutlineMenuAlt3 />
      </button>}
    </>
  );
}
