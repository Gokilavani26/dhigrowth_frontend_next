import React from 'react';

const ContactStats = () => {
  return (
    <div className='flex items-center my-20 justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-[5rem] justify-items-center'>
        <div className='text-center'>
          <p className='font-headers text-nowrap text-xl md:text-3xl lg:text-4xl mb-4'>
            YEARS OF EXPERIENCE
          </p>
          <span
            className='font-numeric text-4xl sm:text-5xl md:text-6xl lg:text-[90px] leading-none text-transparent bg-clip-text bg-white stroke-primary stroke-2'
            style={{ WebkitTextStroke: '2px #2196F3' }}
          >
            2+{' '}
          </span>
        </div>

        <div className='text-center'>
          <p className='font-headers text-nowrap text-xl md:text-3xl lg:text-4xl mb-4'>
            SATISFIED CLIENTS
          </p>
          <span
            className='font-numeric text-4xl sm:text-5xl md:text-6xl lg:text-[90px] leading-none text-transparent bg-clip-text bg-white stroke-primary stroke-2'
            style={{ WebkitTextStroke: '2px #2196F3' }}
          >
            100%
          </span>
        </div>

        <div className='text-center'>
          <p className='font-headers text-nowrap text-xl md:text-3xl lg:text-4xl mb-4'>
            PROJECTS COMPLETED
          </p>
          <span
            className='font-numeric text-4xl sm:text-5xl md:text-6xl lg:text-[90px] leading-none text-transparent bg-clip-text bg-white stroke-primary stroke-2'
            style={{ WebkitTextStroke: '2px #2196F3' }}
          >
            15+
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactStats;
