import Nav from "./Nav";
import Title from "./Title";

export default function Header({ items, title }) {
  return (
    <header className='w-full flex flex-col items-center justify-center max-w-4xl'>
      <Title>{title}</Title>
      <Nav items={items} />
    </header>
  );
}
