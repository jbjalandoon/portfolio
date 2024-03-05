import NavLists from "./NavLists";

export default function Nav({ items }) {
  return (
    <nav className="sm:ml-0 md:ml-0">
      <NavLists items={items} />
    </nav>
  );
}
