import React from 'react';
import Hero from '../Components/Hero';
import Carousel from '../Components/Carousel';
import Menu from '../Components/Menu';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Carousel></Carousel>
      <Menu></Menu>
      <Footer></Footer>
    </>
  );
}

export default Home;
