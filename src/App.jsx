import Hero from "./component/Hero";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <header className="bg-gradient-to-r">
        <Navbar></Navbar>
        <Hero></Hero>
      </header>
    </>
  );
}

export default App;
