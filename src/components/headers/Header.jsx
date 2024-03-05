import Nav from "./Nav";

export default function Header({ items }) {
  return (
    <>
      <header
        className={`transition-all z-50 mt-16 flex h-auto w-full max-w-4xl flex-col items-center justify-center p-5 shadow-xl md:mb-0 md:shadow-none`}>
        {/* <Title>{title}</Title> */}
        <Nav items={items} />
      </header>
    </>
  );
}
