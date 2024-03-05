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
