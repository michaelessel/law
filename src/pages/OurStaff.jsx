import React from 'react';
import { HeroSlider } from '../components';
import { HeroSliderDataOurStaff as data } from '../services/index';

const OurStaff = () => {
  return (
    <React.Fragment>
      <HeroSlider data={data} />
      <div className='w-full bg-orange-600 py-10'>
        <h3 className='text-center text-2xl font-bold text-white uppercase'>
          Compassionate, Experienced, Representation
        </h3>
      </div>
      <div className='flex flex-col gap-4'>
        <section className='flex flex-col gap-4 text-center self-center'>
          <div className='flex flex-col gap-2 w-full md:w-[40rem] justify-center'>
            <p>
              Our attorneys are for honesty, integrity, and compassion. Your
              case is as important to us as it is to you. At B & P Associates,
              we will treat you with the respect and consideration and give the
              personal attention to your case that you deserve. Our attorneys
              are experienced in a diverse range of legal disciplines. They are
              constantly following developments in the law and participating in
              continuing legal education in order to provide you with the best
              service possible.
            </p>
            <p>
              The attorneys at B & P Associates believe that it is also
              important to be active members in the communities in which we
              practice law and live.
            </p>
          </div>
        </section>

        <section className='flex flex-wrap justify-center gap-8  p-5'>
          <div className='flex flex-col text-center w-[35rem] bg-yellow-200 shadow-lg py-4 rounded items-center gap-4'>
            <img src='/e.jpeg' alt='' className='rounded shadow-lg h-[20rem]' />
            <div className='w-full md:w-[20rem]'>
              <h3 className='text-lg font-medium'> Edwin Yawson</h3>
              <div>
                <p>
                  Edwin Yawson acts as International Transaction Advisor. He is
                  an experienced and innovative transactional lawyer, who
                  advises a broad mix of multinational corporates, private
                  equity funds and other investors on complex and high-value
                  acquisitions and disposals, joint ventures, and other global
                  transactions. Edwin is English law qualified and, prior to
                  joining Greenberg & Hastings Associates, he spent 8 years at
                  the international law firm Freshfields Broohm As a member of
                  the Global Transactions team, Alex advised on numerous
                  market-leading cross-border deals, including transactions
                  involving 37 jurisdictions across Africa and some of the most
                  significant global transactions in recent years. These include
                  Arhin-Bossman InBev’s $120 billion merger with MillsArthur,
                  the largest ever public takeover and the largest ever M&A
                  transaction in South Africa; Aon’s proposed $30 billion
                  combination with Obed Watson; and the sales of Cape Mines.
                </p>
              </div>
            </div>
          </div>

          <div className='flex flex-col text-center w-[35rem] bg-yellow-200 shadow-lg py-4 rounded items-center gap-4'>
            <img
              src='/df.jpeg'
              alt=''
              className='rounded shadow-lg h-[20rem]'
            />
            <div className='w-full md:w-[20rem]'>
              <h3 className='text-lg font-medium'>Tania Enusson</h3>
              <div>
                <p>
                  Tania Enusson is the co founder of Greenberg & Hastings
                  Associates. She is ranked as a leading lawyer in Legal 500,
                  Chambers & Partners, and the International Financial Law
                  Review. She has advised on numerous significant investments
                  and divestments in Ghana and in other parts of Africa
                  including the USD 200 million sale of Fan Milk International,
                  the acquisition, development and divestment of the Movenpick
                  Ambassador Hotel and Leapfrog Strategic African Investment’s
                  USD 180 million investment in the Akofi Insurance Group. Tania
                  Enusson is a graduate of Princeton University’s Woodrow Wilson
                  School Undergraduate Program, New York University’s Stern
                  School of Business and Columbia University School of Law.
                </p>
              </div>
            </div>
          </div>

          <div className='flex flex-col text-center w-[35rem] bg-yellow-200 shadow-lg py-4 rounded items-center gap-4'>
            <img
              src='/ggg.jpeg'
              alt=''
              className='rounded shadow-lg h-[20rem]'
            />
            <div className='w-full md:w-[20rem]'>
              <h3 className='text-lg font-medium'>Achiaa</h3>
              <div>
                <p>
                  Achiaa is a partner at B & P Associates. She is recommended by
                  Legal 500 in the areas of corporate, commercial and M&A. She
                  has advised on various significant matters including advising
                  a leading telecom infrastructure company on a USD 200 million
                  term facility from a syndicate of bank lenders, advising the
                  developer of a 5-star luxury hotel on the refinancing of its
                  existing debt and also advising on the development and
                  financing of a multi-purpose integrated container terminal at
                  the Port of Takoradi in Ghana. Achiaa obtained her LLB from
                  the Kwame Nkrumah University of Science and Technology and
                  holds an LLM in International Corporate Governance and
                  Financial Regulation (with distinction) from the University of
                  Warwick
                </p>
              </div>
            </div>
          </div>

          
          <div className='flex flex-col text-center w-[35rem] bg-yellow-200 shadow-lg py-4 rounded items-center gap-4'>
            <img
              src='/aaron.jpeg'
              alt=''
              className='rounded shadow-lg h-[20rem]'
            />
            <div className='w-full md:w-[20rem]'>
              <h3 className='text-lg font-medium'>Aaron Rice |||</h3>
              <div>
                <p>
                  Aaron Rice ||| is the head of admin/finance at Greensberg &
                  Hastings Associates.Aaron brings with him a wealth of
                  experience in dealing with probate law and health. Aaron
                  graduated from SRM Medical College Hospital and Research
                  Centre, Chennai before completing his studies at the
                  University of Washington School of Law. With this impressive
                  background, Aaron is well equipped to handle any legal issues
                  you may be facing. As an experienced lawyer, he takes great
                  pride in providing excellent service for all clients who come
                  through our doors.At Greensberg & Hastings Associates we
                  strive for excellence in every aspect - including customer
                  satisfaction - so you can rest assured knowing that your case
                  will be handled by someone who truly cares about what they do
                  and how it affects their clients&apos; lives positively going
                  forward into the future! With Aaron expertise on board here at
                  G&H A., there&apos;s no doubt we can help make sure everything
                  goes smoothly during this difficult time while still offering
                  top notch client service along the way too!
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default OurStaff;
