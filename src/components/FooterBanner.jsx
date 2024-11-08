import React from 'react';

const FooterBanner = () => {
  return (
    <div className='w-full px-10 bg-orange-600 flex flex-col sm:flex-row py-10 justify-center gap-10 md:gap-52 text-white'>
      <div className='flex flex-col'>
        <div>
          <p>B&P Associates</p>
        </div>
        <div>
          <a href='mailto:associatesbp526@gmail.com'>
            associatesbp526@gmail.com
          </a>
          <p>+1(225)-800-8211</p>
          <p>+233(551)699845</p>
        </div>
      </div>

      <div className=' flex flex-col gap-4'>
        <p className='w-full md:w-72 text-[18px] font-medium'>
          We believe legal counsel should strengthen communities
        </p>

        <p>© 2024 B&P Associates</p>
      </div>
    </div>
  );
};

export default FooterBanner;
