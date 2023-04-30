import { useContext } from "react";
import developer from "../../assets/developer.svg";
import Card from "./Card";
import { ViewContext } from "../../store/ViewContext";

export default function Content() {
  const { view } = useContext(ViewContext);

  return (
    <div className='w-full md:max-w-4xl mt-7 my-10 lg:px-0 h-full'>
      {view === 0 && (
        <Card>
          <div className='flex md:flex-row flex-col text-center md:gap-10 gap-16 justify-center items-center'>
            <div className='flex-col flex'>
              <span className='text-3xl'>Full-Stack Developer</span>
              <span>Hello, I'm Jerome a junior full-stack developer</span>
              <span></span>
            </div>
            <div>
              <img src={developer} className='h-40 w-full object-cover' />
            </div>
          </div>
        </Card>
      )}
      {view === 1 && <Card>About Me</Card>}
      {view === 2 && <Card>Projects</Card>}
      {view === 3 && <Card>Contact Me</Card>}
    </div>
  );
}
