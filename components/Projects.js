import SingleProject from './SingleProject';
import { projects } from '../lib/data';

export default function Projects() {
  return (
    <div className='flex items-center flex-col mt-32 md:mt-52 gap-12 lg:gap-28 '>
      <h1 className='text-2xl capitalize font-black italic sm:text-3xl md:text-4xl tracking-wide '>
        projects
      </h1>
      <div className='w-full flex flex-col gap-52'>
        {projects.map((project) => {
          return <SingleProject key={project.id} project={project} />;
        })}
      </div>
    </div>
  );
}
