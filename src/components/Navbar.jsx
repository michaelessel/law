import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [state, setState] = React.useState(false);

  const handleState = () => {
    setState(!state);
  };

  return (
    <nav className='bg-orange-700 border-gray-200 px-2 sm:px-4 py-2.5 rounded '
    >
      <div className='container flex flex-wrap justify-between items-center mx-auto'>
        <Link to='/' className='flex items-center'>
          <img src='' className='mr-3 h-6 sm:h-9' alt='' />
          <span className='self-center font-bold text-xl whitespace-nowrap '
          >
            B & P Associates
          </span>
        </Link>

        <button
          onClick={handleState}
          type='button'
          className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 '
        >
          <span className='sr-only'>Open main menu</span>
          <FaBars className='text-white' />
        </button>

        <div className={` w-full md:w-auto md:block ${state ? 'block' : 'hidden'}`}>
          <ul className='flex flex-col p-4 mt-4 bg-orange-700 rounded-lg border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-orange-700  '>
            <li>
              <Link
                to='/'
                className='block py-2 pr-4 pl-3 rounded md:bg-transparent text-gray-300 md:p-0 '
                aria-current='page'
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to='/our-staff'
                className='block py-2 pr-4 pl-3 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 '
              >
                Our Staff
              </Link>
            </li>

            <li>
              <Link
                to='/practice-area'
                className='block py-2 pr-4 pl-3 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 '
              >
                Practice Area
              </Link>
            </li>

            <li>
              <Link
                to='/contact'
                className='block py-2 pr-4 pl-3 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 '
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
