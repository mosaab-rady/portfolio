import { useEffect, useState } from 'react';

export default function SingleProject({ project }) {
  const [color, setColor] = useState(``);
  useEffect(() => {
    setColor(`${project.color}`);
  }, [project]);

  return (
    <section className='flex flex-col items-center gap-16 '>
      <div
        className={`text-white w-full py-16 bg-gradient-to-b from-gray-900 ${color} lg:bg-gradient-to-r px-4 md:px-28 lg:px-40  flex lg:flex-row flex-col gap-8  overflow-hidden lg:justify-between lg:items-center lg:gap-60`}
      >
        <div className='flex flex-col gap-8 lg:gap-16 '>
          <div className='flex items-center justify-center gap-4 p-4 border-b-2 w-fit '>
            <img
              src={`/api/imgs/${project.logoImage}`}
              alt=''
              className='w-16  '
            />
            <h1 className='capitalize text-3xl md:text-4xl'>{project.name}</h1>
          </div>
          <p className='capitalize text-base max-w-md lg:text-lg'>
            {project.summary}
          </p>
          <a
            href={project.link}
            target='_blank'
            rel='noopener noreferrer'
            className='text-black px-8  py-2 text-lg capitalize rounded-xl border-2 border-black w-fit hover:bg-black hover:text-white duration-700 transition-all ease-in-out'
          >
            view site
          </a>
        </div>
        <div className={`lg:-mr-72  `} id='projectImage'>
          <img
            src={`/api/imgs/${project.image}`}
            alt=''
            className='rounded-3xl w-auto  '
          />
        </div>
      </div>
      <div className='px-8 w-full flex items-center flex-col justify-center gap-4 max-w-2xl '>
        <h1 className='text-xl md:text-2xl font-bold capitalize'>
          description
        </h1>
        <p className='text-base md:text-lg lg:text-xl'>
          {`'' ${project.description} ,,`}
        </p>
      </div>
    </section>
  );
}
