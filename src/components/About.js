import React from 'react';

import Portfolio from '../assets/img/Portfolio.jpg';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Portfolio}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Jihen Mansour
              </h2>
              <p className='mb-4 text-accent'>
              Hello World!
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
               I'm a Full stack Web Developer based out of Tunisia. 
               I love combining the words of logic and creative design to make eye-catching, accessible, and friendly websites and applications.
              I am excited to work alongside other amazing programmers and learn so much more!
              </p>
            </div>
            <Link to='contact'
                activeClass='active'
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className='transition-all duration-300'>
            <button className=" btn btn-lg border-accent border-2 text-accent hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-accent duration-[400ms,700ms] transition-[color,box-shadow]">
              Contact me
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
