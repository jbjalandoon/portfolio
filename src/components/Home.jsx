import { FaDownload, FaFile } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col justify-center gap-10">
      <div className="flex flex-col gap-8">
        <span className="text-lg">Hello, my name is</span>
        <span className="text-4xl font-bold xs:text-6xl sm:text-7xl">
          Jerome Jalandoon.
        </span>
        <span className="text-3xl xs:text-4xl sm:text-5xl">
          I&apos;m a Web Developer.
        </span>
        <a
          href="/Jerome_Jalandoon_Resume.pdf"
          download
          className="relative flex w-min items-center gap-3 border border-green-700 px-5 py-4 transition-all duration-500 after:absolute after:left-0 after:top-0 after:-z-50 after:h-full after:w-0 after:bg-green-700 after:transition-all after:duration-1000 hover:text-black hover:after:w-full"
        >
          <FaDownload /> Resume
        </a>
        <p className="w-full text-lg font-light md:w-3/5">
          Attained cum laude honors upon completion of a Bachelor of Science in
          Information Technology program at Polytechnic University of the
          Philippines, Taguig in 2023. I&apos;ve been exposed in different web
          technologies throughout my life since I learned web development.
          I&apos;m committed to continually improving myself, striving for
          progress without end.
        </p>
      </div>
    </div>
  );
}
