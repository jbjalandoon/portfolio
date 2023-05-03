import { useContext } from "react";
import { ViewContext } from "../../store/ViewContext";

export default function Card({ children, className }) {
  const { animationClass } = useContext(ViewContext);
  return (
    <div
      className={`w-full h-full flex flex-col overflow-y-auto md:mb-0 mb-6 px-14 pt-12  gap-12 ${className} ${animationClass}`}>
      {children}
    </div>
  );
}
