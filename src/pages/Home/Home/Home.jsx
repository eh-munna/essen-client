import React from 'react';
import Banner from '../Banner/Banner';
import Testimonial from '../Testimonial/Testimonial';
import Feedback from '../Feedback/Feedback';
import Chefs from '../Chefs/Chefs';

const Home = () => {
  return (
    <div>
      <Banner />
      <Chefs />
      <Testimonial />
      <Feedback></Feedback>
    </div>
  );
};

export default Home;
