import React from 'react';
import { Banner, WhoWeAre, WhatWeDo, HeroSlider } from '../components';
import { HeroSliderData } from '../services/index';

const Home = () => {
  return (
    <React.Fragment>
      <HeroSlider data={HeroSliderData} />
      <Banner />
      <WhoWeAre />
      <WhatWeDo />
    </React.Fragment>
  );
};

export default Home;
