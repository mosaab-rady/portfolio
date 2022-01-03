import { MLogo } from './svg';

export default function Navbar() {
  return (
    <div className='flex items-center justify-between '>
      <MLogo />

      {/* <button
        className='capitalize text-black border-2 py-1  px-4 rounded-full border-black 
			hover:bg-black hover:text-white text-xl'
      >
        contact me
      </button> */}
    </div>
  );
}
