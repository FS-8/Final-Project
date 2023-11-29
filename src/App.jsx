import { Route, Routes } from "react-router-dom";
import Carousel from "./component/Carousel";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Menu from "./component/Menu";
import Navbar from "./component/Navbar";
import Product from "./component/IsiProduct";
import Test from "./component/Test";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <header className="font-mono">
        <Navbar></Navbar>
      </header>
      <main className="mt-32 ">
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/products" element={<Product></Product>} />
        </Routes>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
