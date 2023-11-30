import { Route, Routes } from "react-router-dom";
import ProductDetail from "./Components/ProductDetail";
import OrderSummary from "./Components/OrderSummary";
import Checkout from "./Components/Checkout";
import CartProduct from "./Components/CartProduct";

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
      <Routes>
        <Route path="/detail/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<CartProduct />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/summary" element={<OrderSummary />} />
        {/* ... route lainnya */}
      </Routes>

      {/* <OrderSummary /> */}
    </>
  );
}

export default App;
