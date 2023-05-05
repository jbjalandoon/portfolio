import { useContext } from "react";
import { ViewContext } from "../../store/ViewContext";

export default function NavItem({ className, title }) {
  const { switchView } = useContext(ViewContext);

  const switchViewHandler = (e) => {
    const view = e.currentTarget.innerHTML.toLowerCase();

    switchView(view);
  };

  return (
    <li
      className={`nav-link 2xs:text-md text-xs first-letter:capitalize xs:text-lg md:text-xl ${className}`}
      onClick={switchViewHandler}>
      {title}
    </li>
  );
}
