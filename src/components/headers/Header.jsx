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
        className={`transition-all z-50 mt-16 flex h-14 w-full max-w-4xl flex-col items-center justify-center p-5 shadow-xl md:mb-0 md:shadow-none`}>
        {/* <Title>{title}</Title> */}
        <Nav items={items} />
      </header>
    </>
  );
}
