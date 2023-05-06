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
        className={`z-50 mt-16 p-5 flex w-full max-w-4xl  h-14 flex-col items-center justify-center md:shadow-none shadow-xl md:mb-0 mb-10`}>
        {/* <Title>{title}</Title> */}
        <Nav items={items} />
      </header>
    </>
  );
}
