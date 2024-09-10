import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-gray-800 flex flex-col sm:flex-row justify-center gap-10 md:gap-40 py-10 text-gray-300'>
      <div className='flex flex-col items-center'>
        <p className='text-lg font-medium'>Connect with us</p>
        <div className='flex gap-5'>
          <FaFacebook className='text-[35px] hover:text-blue-600 cursor-pointer' />
          <FaTwitter className='text-[35px] hover:text-blue-600 cursor-pointer' />
        </div>
      </div>

      <div className='flex flex-col items-center'>
        <p className='text-lg font-medium'>Subscribe to our newsletter:</p>
        <div className='inline-flex gap-4 items-center'>
          <input
            type='text'
            placeholder='Email address'
            className='outline-none px-3 py-2 bg-gray-600'
          />
          <button
            type='button'
            className='text-lg border-gray-300 px-2 py-1 uppercase border border-solid rounded '
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
