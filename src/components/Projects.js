import { useRef } from 'react';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { projectsData
 } from '../data';
 import { FiGithub, FiArrowUpRight, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  const swiperRef = useRef();
  return (
    <div>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
      {projectsData.map((item, index) => {

        return (
          <SwiperSlide key={index}>
            <div
              className='flex flex-col lg:flex-row gap-12 lg:gap-32'
            >

              <img className='rounded-2xl h-64 w-auto' src={item.image} alt='' />

              <div
                className='flex flex-col max-w-3xl'
              >
                <h5 className='font-body text-2xl mb-4'>
                  {item.name}
                </h5>
                <div className='flex flex-col space-y-4'>
                  <p className='text-lg '>{item.description}</p>
                  {/* <p className='text-lg text-accent>{item.github}</p> */}
                  <hr class="h-px my-8 bg-accent border-0" />
                  <div className='flex  h-7 justify-between text-accent'>

                    <a className='text-base flex items-center gap-2' href={item.github} target="_blank">
                      <FiGithub /> <p className='text-white'>Visit github repository</p>
                    </a>
                    {item.link &&
                      <a className='text-base flex items-center gap-2' href={item.link} target="_blank">
                        <FiArrowUpRight /> <p className='text-white'>Visit website</p>
                      </a>}

                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
    <div className='flex justify-between text-accent text-xl mt-6 '>
    <button onClick={() => swiperRef.current?.slidePrev()}>
      <FiArrowLeft/>
    </button>
      <button onClick={() => swiperRef.current?.slideNext()}>
        <FiArrowRight/>
      </button>
      </div>
      </div>
  );
};