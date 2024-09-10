import React from 'react';
import { Link } from 'react-router-dom'

const WhoWeAre = () => {
  return (
    <div className='flex flex-col md:flex-row gap-10 justify-center items-center w-full md:h-screen bg-orange-200 p-5'>
      <div className='flex flex-col justify-center gap-2'>
        <h1 className='text-[50px] font-bold'>Who we are</h1>
        <p className='w-full md:w-[40rem] text-lg '>
          We are a modern and dynamic law firm in Uk/USA with our 25 legal teams
          across the world. Our areas of focus include corporate and commercial
          law, property and construction law, energy and infrastructure law,
          banking and finance, and dispute resolution. Our team of creative and
          leading lawyers has excellent local and international experience in
          law and business. We combine this knowledge and experience with a
          collaborative approach to all our assignments to provide
          comprehensive, concise and commercial advice. We strive to stay
          abreast of innovations in business as well as local and global
          political and economic developments and to understand and take into
          consideration their impact on our clients’ businesses in formulating
          our advice. With this, we’ve earned the reputation as one of the best
          law firms across the world.
        </p>

        <p className='w-full md:w-96 text-lg '>
          We are a collaborative group, each of us driven by a passion to serve
          the nonprofit sector.
        </p>

        <Link to='/our-staff'>
          <button
            type='button'
            className=' text-lg border w-40 border-gray-500 px-2 py-1 uppercase hover:rounded font-medium  hover:bg-orange-600 hover:text-white hover:border-orange-600 hover:border'
          >
            Meet our team
          </button>
        </Link>
      </div>

      <div className='flex justify-start md:items-center gap-4'>
        <div>
          <img
            src='/aaron.jpeg'
            alt=''
            className='w-40 bg-blue-600 rounded-full'
          />
        </div>
        <div>
          <h3 className='font-bold text-orange-600 hover:text-orange-400'>
            Aaron Rice |||
          </h3>
          <p className='w-48 text-lg '>
            "It's so gratifying to help an organization reach that point where
            it is beyond conflict..."
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
