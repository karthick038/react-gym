import React from 'react';
import {DynamicBlock} from './Reusable-block';
import Logoabout from "../assets/gym-logo.png";

export const About = () => {
  return <h1>Welcome to the About Page!</h1>;
};

export const Reuse = () => {
  const backgrounds = [
   `url(${Logoabout})`
   ];
  return (
    <DynamicBlock backgrounds = {backgrounds}>
    <h2>Explore Our Latest Offers</h2>
    <p>New items and accounts available now!</p>
  </DynamicBlock>
  );
}
