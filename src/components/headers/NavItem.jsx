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
      className={`nav-link first-letter:capitalize ${className}`}
      onClick={switchViewHandler}>
      {title}
    </li>
  );
}
