import Carousel from "./component/Carousel";
import Hero from "./component/Hero";
import Menu from "./component/Menu";
import Navbar from "./component/Navbar";
import Product from "./component/Product";

function App() {
  return (
    <>
      <header className="font-mono">
        <Navbar></Navbar>
        <Hero></Hero>
      </header>
      <main>
        <Carousel></Carousel>
        <Menu></Menu>
      </main>
      <Product></Product>
    </>
  );
}

export default App;
