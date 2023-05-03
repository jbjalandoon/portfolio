import { ViewContext } from "../../store/ViewContext";
import NavItem from "./NavItem";

import { useContext } from "react";

export default function NavLists({ items, currentView }) {
  const { view } = useContext(ViewContext);
  return (
    <ul className='flex gap-8 text-lg md:flex-row flex-col underline-offset-4 transition-all select-none'>
      {items.map((e, i) => (
        <NavItem key={e} title={e} className={`${i === view && "active"}`} />
      ))}
    </ul>
  );
}
