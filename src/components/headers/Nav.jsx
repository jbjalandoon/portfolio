import NavLists from "./NavLists";

export default function Nav({ items }) {
  return (
    <nav className="md:ml-auto sm:ml-0">
      <NavLists items={items} />
    </nav>
  );
}
