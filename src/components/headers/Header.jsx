import Nav from "./Nav";
import Title from "./Title";

export default function Header({ items, title }) {
  return (
    <header className='w-full md:flex-row sm:flex-col flex-col flex h-20 items-center justify-center max-w-4xl relative'>
      {/* <Title>{title}</Title> */}
      <Nav items={items} />
    </header>
  );
}
