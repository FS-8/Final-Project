import { Route, Routes } from "react-router-dom";

import Footer from "./Components/Footer";

import Navbar from "./Components/Navbar";
import Product from "./Components/IsiProduct";
import Home from "./pages/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import FilterBrand from "./Components/FilterBrand";

function App() {
  return (
    <>
      <header className="font-mono">
        <Navbar></Navbar>
      </header>
      <main className=" ">
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/products" element={<Product></Product>} />
          <Route path="/products/:id" element={<FilterBrand></FilterBrand>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
