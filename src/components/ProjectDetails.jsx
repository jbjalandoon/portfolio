export default function () {
  return (
    <div className='flex gap-10 items-center justify-center h-full p-4 relative'>
      <div className='w-1/2 h-full relative'>
        <img
          src='https://picsum.photos/200'
          className='absolute top-20 left-20 w-72 select-none h-80 z-50'></img>
        <img
          src='https://picsum.photos/200'
          className='absolute top-12 left-32 w-72 select-none h-80 z-40 opacity-40'></img>
      </div>
      <div className='flex gap-3 flex-col w-1/2'>
        <h1 className='text-5xl'>TITLE</h1>
        <div className='flex gap-4 text-2xl'>
          <span>
            <FaLink />
          </span>
          <span>
            <FaGithub />
          </span>
        </div>
        <p>
          Deserunt nulla irure aliquip elit ullamco commodo laboris pariatur
          anim veniam veniam eiusmod. Proident officia pariatur laborum aute sit
          minim non deserunt aliqua. Commodo cupidatat laboris ex proident
          aliqua excepteur qui cupidatat adipisicing. Ullamco aute Lorem veniam
          deserunt ut minim. Excepteur reprehenderit nulla ex qui reprehenderit
          reprehenderit est aliquip sunt ut ipsum. Velit aliqua amet eiusmod
          cupidatat laboris deserunt sit incididunt aute consectetur velit
          nostrud. Lorem id cillum aliqua consectetur minim anim pariatur
          adipisicing minim tempor aliqua officia.
        </p>
      </div>
      {/* <div className='w-96 border h-full flex justify-center'>Project 1</div>
    <div className='w-96 border h-full flex justify-center'>Project 1</div> */}
    </div>
  );
}
