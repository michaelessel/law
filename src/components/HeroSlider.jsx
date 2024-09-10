import React, { useState, useEffect } from 'react';

const HeroSlider = ({ data, activeClass, descClass, imgClass }) => {
  const [currentSlider, setCurrentSlider] = useState(1);

  let number = data.length;

  useEffect(() => {
    const autoSlider = setInterval(() => {
      setCurrentSlider(currentSlider === number ? 1 : currentSlider + 1);
    }, 8000);
    return () => clearInterval(autoSlider);
  }, [currentSlider, number]);

  return (
    <section className='w-full h-full'>
      {data?.map((data, index) => {
        const show = data?.id === currentSlider;
        return (
          <React.Fragment key={index}>
            {show && (
              <div
                style={{
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundImage: `url('${data?.image}')`,
                }}
                className='w-full h-[40vh] relative'
              >
                <p className='w-full h-full flex font-bold uppercase items-center px-10 bg-black bg-opacity-[0.58] text-orange-200 text-3xl font'>
                  {data?.desc}
                </p>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </section>
  );
};

export default HeroSlider;
