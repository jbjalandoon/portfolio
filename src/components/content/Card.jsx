import { useContext } from "react";
import { ViewContext } from "../../store/ViewContext";

export default function Card({ children, className }) {
  const { animationClass } = useContext(ViewContext);
  return (
    <div
      className={`border w-full rounded-3xl h-full flex flex-col items-center ${className} ${animationClass}`}>
      {children}
    </div>
  );
}

