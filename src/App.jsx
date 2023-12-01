import FilterBrand from "./Components/FilterBrand";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./Components/ProductDetail";
import OrderSummary from "./Components/OrderSummary";
import Checkout from "./Components/Checkout";
import CartProduct from "./Components/CartProduct";

import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import FilterSearch from "./Components/FilterSearch";
import KategoriFilter from "./Components/KategoriFilter";
import GenderFilter from "./Components/GenderFilter";

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
          <Route path="/kategori/:id" element={<KategoriFilter></KategoriFilter>} />
          <Route path="/gender/:id" element={<GenderFilter></GenderFilter>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/detail/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<CartProduct />} />
          <Route path="/cari/:id" element={<FilterSearch />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/summary" element={<OrderSummary />} />
        </Routes>
      </main>
      <footer>
        <Footer></Footer>
      </footer>

    </>
  );
}

export default App;
