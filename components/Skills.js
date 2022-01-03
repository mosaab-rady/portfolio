import Image from 'next/image';

export default function Skills({ data }) {
  return (
    <div className='w-full flex flex-col items-center gap-8 md:gap-12 px-8 md:px-32 lg:px-40'>
      <h1 className='text-2xl capitalize font-black italic sm:text-3xl md:text-4xl tracking-wide'>
        skills
      </h1>

      <div className='flex items-center justify-center flex-wrap gap-8 md:gap-12 md:w-3/4'>
        {data?.map((item) => {
          return (
            <img
              src={`/imgs/${item.image}`}
              alt={item.name}
              title={item.name}
              key={item.id}
              className='w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 '
            />
          );
        })}
      </div>
    </div>
  );
}
