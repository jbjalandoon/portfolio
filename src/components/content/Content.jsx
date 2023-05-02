import { useContext } from "react";
import developer from "../../assets/developer.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import Card from "./Card";
import { ViewContext } from "../../store/ViewContext";

export default function Content() {
  const { view } = useContext(ViewContext);

  return (
    <div className='w-full md:max-w-6xl mt-7 lg:px-0 h-3/4'>
      {view === 0 && (
        <Card>
          <div className='flex md:flex-row flex-col md:text-left text-center md:gap-10 gap-16 items-center'>
            <div className='flex-col flex gap-4'>
              <span className='text-xl'>Hello, my name is</span>
              <span className='text-7xl'>Jerome Jalandoon.</span>
              <span className='text-7xl'>I'm a Web Developer.</span>
              <p className='text-lg w-full md:w-1/2'>
                I'm a graduating student in Polytechnic University of the
                Philippines Taguig (2023). I specialize in Fullstack
                Development. I'm currently focused in building my own projects.
              </p>
              {/* <span className='text-2xl'>
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
              </span> */}
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
