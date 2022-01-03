import Image from 'next/image';

import Navbar from './Navbar';
import { FacebookIcon, GitHubIcon, GmailIcon, LinkedInIcon } from './svg';

export default function Overview() {
  return (
    <div
      className='bg-gradient-to-b from-zinc-300
    to-white  py-4 px-8 mb-16  md:px-32 md:mb-32 lg:px-48 '
    >
      <Navbar />
      <section
        className='mt-16 mb-8 flex flex-col md:flex-row md:mb-12
        items-center justify-between gap-8'
      >
        <div>
          <Image
            width={200}
            height={200}
            src={'/imgs/mosaab.jpg'}
            className='rounded-full '
            alt=''
          />
        </div>
        <div className='flex flex-col gap-4 md:gap-8 max-w-lg items-center md:items-baseline'>
          <h1 className='uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl    italic font-black '>
            hi, i`m mosaab
          </h1>
          <h3 className='text-gray-600  text-lg '>
            I`m a full stack web developer, using JavaScript, Node js and React
          </h3>
        </div>
      </section>
      <section className='flex flex-col-reverse md:flex-row gap-8 justify-between'>
        <div className='flex flex-col gap-2'>
          <a
            href='https://www.facebook.com/mosp.rady'
            target='_blank'
            rel='noopener noreferrer'
            className=' group flex items-center gap-2 cursor-pointer w-fit  '
          >
            <FacebookIcon />
            <p className='capitalize font-semibold text-blue-700 text-base '>
              facebook
            </p>
          </a>
          <div className=' group flex items-center gap-2 cursor-pointer w-fit '>
            <GmailIcon />
            <p className=' font-semibold text-red-700 text-base '>
              mosp.rady@gmail.com
            </p>
          </div>
          <a
            href='https://www.linkedin.com/in/mosaab-radi-590610206/'
            target='_blank'
            rel='noopener noreferrer'
            className=' group flex items-center gap-2 cursor-pointer w-fit '
          >
            <LinkedInIcon />
            <p className='capitalize font-semibold text-blue-400 text-base '>
              linkedin
            </p>
          </a>
          <a
            href='https://github.com/mosaab-rady'
            target={'_blank'}
            rel='noopener noreferrer'
            className=' group flex items-center gap-2 cursor-pointer w-fit '
          >
            <GitHubIcon />
            <p className='capitalize font-semibold text-gray-800 text-base '>
              github
            </p>
          </a>
        </div>
        <div className='max-w-lg flex flex-col gap-4'>
          <div>
            <h2 className='capitalize  text-xl  font-semibold text-gray-800'>
              education
            </h2>
            <p className='text-gray-600 text-base '>
              3rd degree eloctronics and communications engineering, Alexandria
              university, faculty of engineering, Egypt
            </p>
          </div>
          <div>
            <h2 className='capitalize  text-xl font-semibold text-gray-800'>
              certifications
            </h2>
            <p className='text-gray-600 text-base '>
              Node.js, Express, MongoDB & More: The Complete Bootcamp 2021,Jonas
              Schmedtmann
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
