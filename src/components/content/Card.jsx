import { useContext } from "react";
import { ViewContext } from "../../store/ViewContext";

export default function Card({ children, className }) {
  const { animationClass } = useContext(ViewContext);
  return (
    <div
      className={`w-full rounded-3xl h-full flex flex-col pb-16 overflow-y-auto md:mb-0 mb-6 px-20 pt-16 ${className} ${animationClass}`}>
      {children}
    </div>
  );
}
