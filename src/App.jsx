import Carousel from "./component/Carousel";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <header className="font-mono">
        <Navbar></Navbar>
        <Hero></Hero>
        <Carousel></Carousel>
      </header>
    </>
  );
}

export default App;
