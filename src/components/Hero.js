import React from 'react';
import { Link } from 'react-scroll';


const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[100vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center'>

            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl text-center lg:leading-[1.2] font-bold md:tracking-[-2px]'>
            Hello, i'm <span className='text-accent'>Jihen Mansour</span>. <br/> I build websites
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 text-lg text-center lg:text-left'>
              Full stack developer who writes clean, elegant and efficient code.
            </p>
            <Link to='contact'
                activeClass='active'
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className='transition-all duration-300'>
            <button className=" btn btn-lg border-accent border-2 text-accent hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-accent duration-[400ms,700ms] transition-[color,box-shadow]">
              Work with me
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
