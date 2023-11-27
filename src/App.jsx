import Carousel from "./component/Carousel";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Menu from "./component/Menu";
import Navbar from "./component/Navbar";
import Product from "./component/Product";
import Test from "./component/Test";

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
        <Product></Product>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
      <Test></Test>
    </>
  );
}

export default App;
