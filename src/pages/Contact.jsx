import React, { useRef } from 'react';
import { HeroSlider } from '../components';
import { HeroSliderDataContact as dataContact } from '../services/index';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_85a5ebj',
        'template_0fxvk35',
        form.current,
        'J9526QFDZsH8bGzfQ'
      )
      .then((result) => {
        console.log(result.text);
      });
  };
  return (
    <React.Fragment>
      <HeroSlider data={dataContact} />
      <section className='w-full bg-blue-600 py-10'>
        <h3 className='text-center text-2xl font-bold text-white uppercase'>
          Contact us
        </h3>
      </section>

      <div style={{ backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundImage: `url('/house.jpg')` }} className='flex flex-col w-full my-5 bg-opacity-[0.9] bg-black h-full'>
        <div className='container mx-auto'>
          <section className=' w-full flex flex-col justify-center items-center md:flex-row gap-4'>
            <div className='w-1/2 flex flex-col gap-4'>
              <h3 className='text-2xl font-medium'>Connect with us</h3>
              <p className='flex flex-col gap-5 text-white font-medium'>
                <span>
                  At B & P Associates, we are dedicated to providing top-notch legal services to our clients. Our team of experienced attorneys specialize in various areas of law, including personal injury, corporate law, and criminal defense. We understand that facing legal issues can be overwhelming and stressful, which is why we strive to make the process as smooth and seamless as possible for our clients.
                </span>

                <span>
                  We pride ourselves on our ability to effectively communicate and negotiate on our clients' behalf. Our attorneys have a wealth of knowledge and resources at their disposal, and will work tirelessly to achieve the best possible outcome for your case.
                </span>

                <span>
                  At B & P Associates, we understand that every case is unique and requires a personalized approach. That's why we take the time to listen to our clients and fully understand their needs before developing a strategy. We are committed to providing our clients with the highest level of service and support throughout the legal process.
                </span>

                <span>
                  Don't navigate the legal system alone. Trust the experienced attorneys at B & P Associates to guide you through the process and achieve the best possible outcome for your case. Contact us today to schedule a consultation.
                </span>
              </p>
              {/* <img
                src='/house.jpg'
                className='w-full md:w-1/2 shadow-md rounded self-center'
                alt=''
              /> */}
            </div>

            <div className='w-1/2 flex justify-center md:mt-10 items-center'>
              <form ref={form} className='w-full' onSubmit={sendEmail}>
                <div className='mb-6'>
                  <label className='block mb-2 text-xl font-bold text-gray-900 dark:text-gray-300'>
                    FullName
                  </label>
                  <input
                    type='text'
                    name='user_name'
                    id='fullname'
                    className='bg-gray-50 bg-opacity-[0.9] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5 outline-none'
                    placeholder='eg. John Deo'
                    required
                  />
                </div>
                <div className='mb-6'>
                  <label className='block mb-2 text-xl font-bold text-gray-900 dark:text-gray-300'>
                    Email address
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='user-email'
                    className='bg-gray-50 bg-opacity-[0.9] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5 outline-none'
                    placeholder='eg. john.doe@company.com'
                    required
                  />
                </div>
                <div className='mb-6'>
                  <label className='block mb-2 text-xl font-bold text-gray-900 dark:text-gray-300'>
                    Title Area
                  </label>
                  <input
                    type='text'
                    name='user_title'
                    id='fullname'
                    className='bg-gray-50 bg-opacity-[0.9] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5 outline-none'
                    placeholder='eg. Family law'
                    required
                  />
                </div>
                <div className='mb-6'>
                  <label className='block mb-2 text-xl font-bold text-gray-900 dark:text-gray-300'>
                    How Can We Help You
                  </label>
                  <textarea
                    type='text'
                    id='password'
                    name='message'
                    className='bg-gray-50 bg-opacity-[0.9] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5 outline-none'
                    placeholder='I want to know more about ...'
                    required
                  />
                </div>
                <button
                  type='submit'
                  value='send'
                  className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  Submit
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
