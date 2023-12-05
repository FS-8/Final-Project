import React from "react";
import Hero from "../Components/Hero";
import Carousel from "../Components/Carousel";
import Menu from "../Components/Menu";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Hero></Hero>
        <Carousel></Carousel>
        <Menu></Menu>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default Home;
