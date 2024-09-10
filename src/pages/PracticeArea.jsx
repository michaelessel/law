import React from 'react';
import { Link } from 'react-router-dom';
import { HeroSlider } from '../components';
import { HeroSliderDataPractice } from '../services';

const PracticeArea = () => {

  const data = [
    {
      title: 'Sports and Entertainment Law',
      image: '/f.jpg',
      description: 'B & P Associates, LLC provides contract review and opportunity vetting for entertainers and athletes. Marirose has worked for the NFL and has represented entertainers, record labels, and athletes.',
    },
    {
      title: 'Family Law',
      image: '/family.png',
      description: 'The family law practice at B & P Associates is robust, and our lawyers handle a broad array of family law issues. We can help you with your divorce and all related matters.',
    },
    {
      title: 'Civil Litigation',
      image: '/ci.jpg',
      description: 'Our civil litigation attorneys work closely with clients to evaluate their potential claims or defenses related to the commercial, professional, employment, and personal dispute that is the subject of litigation.',
    },
    {
      title: 'Immigration Law',
      image: '/d.jpg',
      description: 'We are able to help with everything from helping you to secure the types of visas that you might need, assisting you with applying for U.S. residency, helping you through the naturalization process or defending you in deportation and removal proceedings.',
    },
    {
      title: 'Business Incorporation',
      image: '/s.jpg',
      description: 'Getting your business started does not have to be a complicated process. With help from our attorneys, you will be able to navigate the legal waters to get closer to establishing your business.',
    },
    {
      title: 'Personal Injury',
      image: '/g.jpg',
      description: 'If you have been injured because of the negligence of another, you may need to get experienced legal help from a personal injury lawyer. We represent clients in a variety of personal injury matters and work hard to get you what you deserve.',
    },
  ]

  const data_list = [
    { name: 'Activist organizations' },
    { name: 'Animal welfare organizations' },
    { name: 'Arts organizations' },
    { name: 'Business leagues' },
    { name: 'Churches' },
    { name: 'Colleges & Universities' },
    { name: 'Community organizations' },
    { name: 'Crowd-funding and fundraising organizations' },
    { name: 'Donor-Advised Funds' },
    { name: 'Educational institutions, both public and private' },
    { name: 'Environmental organizations' },
    { name: 'Fraternities and sororities' },
    { name: '“Friends of” organizations' },
    { name: 'Grant-making organizations' },
    { name: 'Libraries' },
    { name: 'Non-charitable nonprofit organizations' },
    { name: 'Private foundations' },
    { name: 'Private operating foundations' },
    { name: 'Public charities' },
    { name: 'Religious organizations and groups' },
    { name: 'Schools' },
    { name: 'Social clubs' },
    { name: 'Social services/social welfare organizations' },
    { name: 'Supporting Organizations' },
    { name: 'Trade associations' },
  ]

  return (
    <React.Fragment>
      <HeroSlider data={HeroSliderDataPractice} />
      <section className='w-full bg-blue-600 py-10'>
        <h3 className='text-center text-2xl font-bold text-white uppercase'>
          Practice Areas
        </h3>
      </section>
      <div className='w-full mt-5 mb-5'>
        <section className='flex flex-col md:flex-row'>
          <div className='flex flex-wrap gap-8 justify-center'>

            {data?.map((data, index) => (

              <div key={index} className='w-[400px]  bg-gray-50 flex flex-col items-center shadow-lg'>
                <span className='bg-blue-600 text-white w-full text-center font-medium text-xl cursor-pointer px-2 py-1'>
                  {data?.title}
                </span>
                <div className='flex flex-col gap-4 w-full'>
                  <img
                    src={data?.image}
                    alt=''
                    className='w-[400px] h-[225px] object-cover'
                  />
                  <p className='px-2 w-full text-center font-medium'>
                    {data?.description}
                  </p>
                  <Link
                    to='/contact'
                    className='bg-blue-600 text-white w-full text-center font-medium text-xl cursor-pointer px-2 py-1'
                  >
                    <span>Schedule Consultation</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className='p-4 bg-white shadow mb-5 mr-5 flex flex-col gap-2'>
            <h4 className='text-md font-medium inline-flex flex-shrink-0'>
              Organization We Serve
            </h4>
            <ol>
              {data_list?.map((list, index) => (
                <li key={index}>{list?.name}</li>
              ))}
            </ol>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default PracticeArea;
