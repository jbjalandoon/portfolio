import Skill from "./Skill";

export default function About() {
  return (
    <div className="flex flex-col justify-center gap-10">
      <h1 className="text-left text-4xl font-bold">About Me</h1>
      <div className="flex flex-col justify-center gap-10 md:flex-row">
        <div className="text-md flex w-full flex-col gap-4 font-light md:w-1/2">
          <p>
            {" "}
            Hello, My name is Jerome and I enjoy web development. The interest
            in web development started when I&apos;m in senior highschool.{" "}
          </p>
          <p>
            I&apos;m a consistent academic achiever in my University where I
            always achieve President&apos;s Lister every school year. My
            capstone team is also the best capstone in the batch 2021.
          </p>
          <p>
            Currently, I&apos;m working in my personal projects and I&apos;m
            open to job opportunities where I can contribute, grow, and learn.
            if you have a good opportunities that I can contribute then
            don&apos;t hesitate to contact me.
          </p>
        </div>
        <div className="flex w-full flex-col gap-14 md:w-1/2">
          <h3 className="text-2xl font-bold">My Skills</h3>
          <div className="flex flex-wrap gap-4">
            <Skill>HTML</Skill>
            <Skill>CSS</Skill>
            <Skill>REST API</Skill>
            <Skill>Bootstrap</Skill>
            <Skill>JavaScript</Skill>
            <Skill>TypeScript</Skill>
            <Skill>NodeJS</Skill>
            <Skill>Azure Cloud</Skill>
            <Skill>React</Skill>
            <Skill>Tailwind CSS</Skill>
            <Skill>ExpressJS</Skill>
            <Skill>MongoDB</Skill>
            <Skill>MySQL</Skill>
            <Skill>Git</Skill>
          </div>
        </div>
      </div>
    </div>
  );
}
