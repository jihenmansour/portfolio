import React from 'react';


// import components
import Projects from './Projects';

const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-primary '>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center '>
          <h2 className='section-title pb-20 before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
            My latest work
          </h2>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
