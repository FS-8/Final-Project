import FilterBrand from "./Components/FilterBrand";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Product from "./Components/IsiProduct";
import Home from "./pages/Home";
import ProductDetail from "./Components/ProductDetail";
import OrderSummary from "./Components/OrderSummary";
import Checkout from "./Components/Checkout";
import CartProduct from "./Components/CartProduct";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import FilterSearch from "./Components/FilterSearch";
import KategoriFilter from "./Components/KategoriFilter";
import GenderFilter from "./Components/GenderFilter";
// admin
import Layout from "./Components/Shared/Layout";
import Dashboard from "./Components/Admin/Dashboard";
import Products from "./Components/Admin/Products";
import LoginAdmin from "./Components/Admin/LoginAdmin";
import Orders from "./Components/Admin/Orders";
import Settings from "./Components/Admin/Settings";
import Customers from "./Components/Admin/Customers";
import Profile from "./Components/Admin/Profile";
import EditCustomers from "./Components/Admin/EditCustomers";

function App() {
  return (
    <>
      <main className=" ">
        {/* admin-route- */}
        <Routes>
          <Route path="/admin" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="productss" element={<Products />} />
            <Route path="orders" element={<Orders />} />
            <Route path="customers" element={<Customers />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          {/* admin-route */}
          <Route path="login-admin" element={<LoginAdmin />} />
          <Route path="profile" element={<Profile />} />
          <Route path="edit-customers" element={<EditCustomers />} />
        </Routes>

        {/* user-route */}
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/products" element={<Product></Product>} />
          <Route path="/products/:id" element={<FilterBrand></FilterBrand>} />
          <Route
            path="/kategori/:id"
            element={<KategoriFilter></KategoriFilter>}
          />
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
    </>
  );
}

export default App;
