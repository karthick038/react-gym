import React from 'react';
import { DynamicBlock , TrainingSchedule } from "./Reusable-block";
import gymLogo from '../assets/home-banner.jpg';

const HomePage = () => {
  const backgroundsHome = [
    'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
    `url(${gymLogo})`
  ];
  return (
    <div className='home_banner'>
      <DynamicBlock backgrounds = {backgroundsHome}>
        <h1>Welcome to Our Fitness World!</h1>
        <h3>Work Harder, Get Stronger</h3>
      </DynamicBlock>
      <TrainingSchedule />
    </div>
  );
};

export { HomePage };
