import React from 'react';

import Skillbar from './Skillbar';


const Skills = () => {
  return (
    
    <section id='services' className='section bg-tertiary pb-8'>
    <div className='container mx-auto'>
      <div className='flex flex-col items-center text-center pb-20'>
        <h2 className='section-title before:content-skills relative before:absolute before:opacity-20 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
          These are my skills
        </h2>
      </div>
      <Skillbar />
    </div>
  </section>
    
  );
};

export default Skills;
