import { useContext } from "react";
import { ViewContext } from "../../store/ViewContext";

export default function Card({ children, className }) {
  const { animationClass } = useContext(ViewContext);
  return (
    <div
      className={`mb-0 flex h-full w-full flex-col justify-center gap-12 px-3 py-5 md:mb-0 ${className} ${animationClass}`}>
      {children}
    </div>
  );
}
