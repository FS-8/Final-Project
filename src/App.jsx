import CartProduct from "./Components/CartProduct";
import Checkout from "./Components/Checkout";
import OrderSummary from "./Components/OrderSummary";
import ProductDetail from "./Components/ProductDetail";

function App() {
  return (
    <>
      <ProductDetail productId="6566019c5979dc4c3e1f6a4a" />
      <CartProduct />
      <Checkout />
      <OrderSummary />
    </>
  );
}

export default App;
