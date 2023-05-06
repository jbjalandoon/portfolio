import { ViewContext } from "../../store/ViewContext";
import NavItem from "./NavItem";

import { useContext } from "react";

export default function NavLists({ items, currentView }) {
  const { view } = useContext(ViewContext);
  return (
    <ul className='flex select-none gap-3 underline-offset-4  transition-all xs:gap-8'>
      {items.map((e, i) => (
        <NavItem key={e} title={e} className={`${i === view && "active"}`} />
      ))}
    </ul>
  );
}
