import { Route, Routes } from "react-router-dom";

import Footer from "./Components/Footer";

import Navbar from "./Components/Navbar";
import Product from "./Components/IsiProduct";

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
