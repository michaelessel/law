import React from 'react';

const Banner = () => {
  return (
    <div className=' w-full bg-orange-700 flex flex-col py-10 justify-center items-center'>
      <p className='text-2xl text-white font-bold '>
        Get insights & tools to help your nonprofit organization through
        COVID-19
      </p>
      <p className='text-sm uppercase font-medium text-white cursor-pointer hover:text-gray-200'>
        Visit our contact for any information.
      </p>
    </div>
  );
};

export default Banner;
