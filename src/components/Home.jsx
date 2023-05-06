export default function Home() {
  return (
    <div className='flex flex-col justify-center gap-10'>
      <div className='flex flex-col gap-8'>
        <span className='text-lg'>Hello, my name is</span>
        <span className='sm:text-7xl xs:text-6xl text-4xl font-bold'>Jerome Jalandoon.</span>
        <span className='sm:text-5xl xs:text-4xl text-3xl'>I'm a Web Developer.</span>
        <p className='w-full text-lg font-light md:w-3/5'>
          I'm a graduating student in Polytechnic University of the Philippines
          Taguig (2023). I specialize in Fullstack Development. I'm currently
          focused in building my own projects.
        </p>
      </div>
    </div>
  );
}
