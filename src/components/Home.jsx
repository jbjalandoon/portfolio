export default function Home() {
  return (
    <div className='flex flex-col items-center gap-16 text-center md:flex-row md:gap-10 md:text-left'>
      <div className='flex flex-col gap-8'>
        <span className='text-xl'>Hello, my name is</span>
        <span className='text-7xl'>Jerome Jalandoon.</span>
        <span className='text-5xl'>I'm a Web Developer.</span>
        <p className='w-full text-lg md:w-3/5'>
          I'm a graduating student in Polytechnic University of the Philippines
          Taguig (2023). I specialize in Fullstack Development. I'm currently
          focused in building my own projects.
        </p>
      </div>
    </div>
  );
}
