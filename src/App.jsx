import Carousel from "./component/Carousel";
import Hero from "./component/Hero";
import Menu from "./component/Menu";
import Navbar from "./component/Navbar";

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
    </>
  );
}

export default App;
