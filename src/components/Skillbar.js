import React from 'react';

import "react-circular-progressbar/dist/styles.css";
import { skills } from '../data';

const Skillbar = () => {
  return ( 
    <div id="main" class="grid gap-10 lg:grid-cols-2   ">
  {skills.map((item, index) => {
    return(
      <div className='p-5'>
      <p className='text-white'>{item.name}</p>
  <div class=" bg-black shadow-sm overflow-hidden ">
    <div class="relative h-2 flex items-center justify-center">
      <div class="transition-all ease-out duration-1000 absolute top-0 bottom-0 left-0 bg-accent" style={{width:item.per}}></div>
    </div>
  </div>
  </div>
    )
  })}
  </div>
  )
}

export default Skillbar