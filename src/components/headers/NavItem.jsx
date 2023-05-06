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
      className={`nav-link text-xs first-letter:capitalize xs:text-sm  md:text-xl ${className}`}
      onClick={switchViewHandler}>
      {title}
    </li>
  );
}
