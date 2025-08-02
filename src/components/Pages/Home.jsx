import React from 'react';
import { Link } from 'react-router-dom';
import Damages from '../homeComponents/Damages.jsx';
import Carousel from '../homeComponents/Carousel.jsx';
import Faqs from '../homeComponents/Faqs.jsx';
import CallToAction from '../homeComponents/CallToAction.jsx';
import PostNavbar from '../homeComponents/PostNavbar.jsx';


function Home() {
  return (
    <>

      <PostNavbar />
      <Damages />
      <Carousel />
      <Faqs />
      <CallToAction />
    </>
  );
}

export default Home;
