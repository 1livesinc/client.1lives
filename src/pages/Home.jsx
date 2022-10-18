import React from 'react';
import Slider from '../components/slidermain/Slider';
import Tech from '../components/techs/Tech';
import { sliderdata, techs } from '../data/DataSource';
const Home = () => {
  return (
    <div>
      <Slider sliderdata={sliderdata}/>
      <Tech techs={techs} />
    </div>
  );
};

export default Home;
