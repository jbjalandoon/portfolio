import NavLists from "./NavLists";

export default function Nav({ items }) {
  return (
    <nav>
      <NavLists items={items} />
    </nav>
  );
}
