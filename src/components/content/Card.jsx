import { useContext } from "react";
import { ViewContext } from "../../store/ViewContext";

export default function Card({ children, className }) {
  const { animationClass } = useContext(ViewContext);
  return (
    <div
      className={`w-full rounded-3xl h-full flex flex-col items-center justify-center p-12 ${className} ${animationClass} relative`}>
      {children}
    </div>
  );
}
