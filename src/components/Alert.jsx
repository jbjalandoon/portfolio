import { RiErrorWarningFill } from "react-icons/ri";
import { AiFillCheckCircle } from "react-icons/ai";
import { IconContext } from "react-icons";

export default function Alert({ type, message }) {
  console.log(type === "success");
  let icon = (
    <IconContext.Provider
      value={{
        color: type === "success" ? "green" : "red",
        className: "text-5xl",
      }}>
      <div>
        {type === "success" ? <AiFillCheckCircle /> : <RiErrorWarningFill />}
      </div>
    </IconContext.Provider>
  );

  return (
    <div className='fixed right-auto top-10 z-50 flex h-24 w-96 animate-grow items-center rounded-lg  border-black bg-white px-5 text-black shadow-2xl md:right-10'>
      <div className='relative flex items-center gap-4'>
        {icon}
        <span className='text-lg font-bold'>{message}</span>
      </div>
      <div className='absolute bottom-0 left-0 h-1 w-full animate-countdown bg-slate-500'></div>
    </div>
  );
}
