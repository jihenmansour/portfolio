import {React, useState} from 'react';
import {AiOutlineArrowRight} from'react-icons/ai';


const Project = ({ item }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };


  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
      <div className='mb-8'>
      <figure class="relative inline-block overflow-hidden text-base text-left 
      before:absolute before:inset-2.5  before:top-full before:bg-image snip1584">
        <img className='h-100 rounded-lg align-top' src={item.image}/>
    <figcaption className='absolute inset-0 items-center flex flex-col justify-center'>
    <h3 className='m-0 opacity-0 tracking-wider capitalize text-sm mb-3'>{item.category}</h3>
    <div className="gap-4 grid grid-flow-col auto-cols-max">
    <h5 className='m-0 opacity-0 tracking-wider'><a href={item.github} target="_blank">Github</a></h5>
    </div>
    
  </figcaption>
   </figure>   
      </div>
      <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
      <p className='text-base max-w-md'>
        {item.description}
      </p>
    </div>
  );
};

export default Project;
