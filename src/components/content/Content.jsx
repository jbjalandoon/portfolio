import { useContext } from "react";
import developer from "../../assets/developer.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import Card from "./Card";
import { ViewContext } from "../../store/ViewContext";

export default function Content() {
  const { view } = useContext(ViewContext);

  return (
    <div className='w-full md:max-w-6xl mt-7 my-10 lg:px-0 h-full'>
      {view === 0 && (
        <Card>
          <div className='flex md:flex-row flex-col text-center md:gap-10 gap-16 justify-center items-center'>
            <div className='flex-col flex gap-4'>
              <span className='text-6xl'>Full-Stack Developer</span>
              <span className='text-2xl'>
                Hello, I'm Jerome a junior full-stack developer
              </span>
              <span className='text-2xl'>
                Check out my,{" "}
                <a
                  href='https://github.com/jbjalandoon'
                  target='_blank'
                  className='underline underline-offset-8'>
                  Github
                </a>{" "}
                and{" "}
                <a
                  href='https://www.linkedin.com/in/jbjalandoon/'
                  target='_blank'
                  className='underline underline-offset-8'>
                  Linkedin
                </a>
              </span>
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
