import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Product from "./Components/IsiProduct";
import Home from "./pages/Home";
import ProductDetail from "./Components/ProductDetail";
import OrderSummary from "./Components/OrderSummary";
import Checkout from "./Components/Checkout";
import CartProduct from "./Components/CartProduct";
import Navbar from "./Components/Navbar";
import Product from "./Components/IsiProduct";
import Home from "./pages/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

function App() {
  return (
    <>
      {/* <header className="font-mono">
        <Navbar></Navbar>
      </header>
      <main className="mt-32 ">
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/products" element={<Product></Product>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </main>
      <footer>
        <Footer></Footer>
      </footer> */}
      <ProductDetail productId="65646cbe27e00af45feb3d46" />
      <CartProduct />
      <Checkout />
      <OrderSummary />
    </>
  );
}

export default App;
