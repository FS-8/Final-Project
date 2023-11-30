import React, { useEffect } from "react";
import { HiCurrencyDollar } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  getListCart,
  incrementQuantity,
  removeProductFromCart,
} from "../Redux/Action/cartAction";
import { calculateTotalPrice } from "../Redux/Action/totalAction";
import toast, { Toaster } from "react-hot-toast";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function CartProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems) || [];
  const total = useSelector((state) => state.total);

  useEffect(() => {
    dispatch(getListCart());
    dispatch(calculateTotalPrice());
  }, [dispatch]);

  const handleRemoveFromCart = (productId, selectedColor, selectedSize) => {
    dispatch(removeProductFromCart(productId, selectedColor, selectedSize));
    toast("Items Remove from Cart");
  };

  const handleIncrementQuantity = (productId, selectedColor, selectedSize) => {
    dispatch(incrementQuantity(productId, selectedColor, selectedSize));
  };

  const handleDecrementQuantity = (productId, selectedColor, selectedSize) => {
    dispatch(decrementQuantity(productId, selectedColor, selectedSize));
  };

  const isUserLoggedIn = () => {
    const userId = localStorage.getItem("userId");
    // const userId = "6568901b88be8ce03a9412dd";
    return userId !== null;
  };

  const handleCheckoutClick = () => {
    if (isUserLoggedIn()) {
      if (cartItems.length > 0) {
        navigate("/checkout");
        // window.location.href = "/checkout";
      } else {
        toast.error("Keranjang Anda kosong. Tambahkan item sebelum checkout.");
      }
    } else {
      toast.error("Silakan login untuk melanjutkan.");
    }
  };

  return (
    <section className=" sm:flex sm:w-11/12 sm:mx-auto sm:justify-center  font-mono ">
      <main className="sm:flex sm:flex-row sm:mt-20 sm:mx-20 sm:gap-5 flex w-full flex-col m-5">
        <main className=" sm:basis-2/3">
          <h1 className=" text-2xl  font-extrabold mb-2">Shooping Cart</h1>
          <hr className=" mb-2" />

          <h2 className=" mb-4 text-sm">
            Home {">"} Product Detail {">"}{" "}
            <span className=" text-blue-500 underline">Cart</span>
          </h2>

          <div className=" border text-lg p-3 mb-5">
            <h2 className=" font-bold">Free Shipping for Members.</h2>
            <h3>Become a ShoesWorld Member for Fast and Free Shipping</h3>
          </div>

          <div className=" bg-gray-300 p-4 mb-7">
            <h2 className=" font-extrabold text-lg">Save Up to 40%</h2>
            <h2 className=" underline cursor-pointer">
              Shop All New Our New Markdowns
            </h2>
          </div>

          <h1 className=" text-2xl font-extrabold">Bag</h1>
          <hr className=" mb-3" />

          {cartItems.length === 0 ? (
            <h1 className=" flex flex-row items-center justify-center gap-5 text-xl font-extrabold">
              <FaCartShopping /> No Items In Cart
            </h1>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className=" flex flex-row sm:gap-10 gap-3 mb-5">
                <div className="basis-2/12 w-full">
                  <img
                    className=" w-64 drop-shadow-md rounded "
                    src={item.images}
                    alt=""
                  />
                </div>
                <div className="basis-10/12">
                  <div className="sm:flex sm:flex-row justify-between font-extrabold text-xl mb-2">
                    <h1 className=" mb-2">{item.name}</h1>
                    <h2>
                      Rp. <span>{item.price}</span>
                    </h2>
                  </div>
                  <p className=" text-justify mb-2">{item.description}</p>
                  <h2 className=" font-extrabold">{item.selectedColor}</h2>
                  <h2 className=" font-extrabold">{item.selectedSize}</h2>

                  <div className="flex flex-row gap-4 items-center mt-2">
                    <button
                      onClick={() =>
                        handleDecrementQuantity(
                          item.product,
                          item.selectedColor,
                          item.selectedSize
                        )
                      }
                      className=" bg-gray-400 py-1 px-5 rounded  hover:bg-slate-600"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        handleIncrementQuantity(
                          item.product,
                          item.selectedColor,
                          item.selectedSize
                        )
                      }
                      className=" bg-gray-400 py-1 px-5 rounded  hover:bg-slate-600"
                    >
                      +
                    </button>
                  </div>

                  <div className=" flex flex-row my-4 gap-6 underline text-base font-bold">
                    <button
                      onClick={() =>
                        handleRemoveFromCart(
                          item.product,
                          item.selectedColor,
                          item.selectedSize
                        )
                      }
                    >
                      Remove
                    </button>
                    <Toaster />
                  </div>
                </div>
              </div>
            ))
          )}

          {cartItems.length >= 1 ? (
            <div>
              {" "}
              <h1 className="font-extrabold text-lg">Shipping</h1>
              <h1>{">>>>"} Ships In 3-4 Days</h1>
              <div className=" bg-red-100 rounded drop-shadow-md my-4 font-bold sm:w-2/5 py-2 px-4 ">
                <h1>Just a few left. Order soon</h1>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </main>

        <main className=" sm:basis-1/3 bg-gray-100 h-80 rounded">
          <div className=" p-4">
            <h1 className=" text-xl font-bold">Order Summary</h1>
            <div className=" flex flex-row justify-between my-3 items-center">
              <h2>SubTotal</h2>
              <h2 className=" font-semibold">
                Rp. <span>{total}</span>
              </h2>
            </div>
            <hr />
            <div className=" flex flex-row justify-between my-3 items-center">
              <h2>
                Shipping estimate{" "}
                <span className=" bg-gray-300 py-1 px-2 rounded-full">?</span>
              </h2>
              <h2 className=" font-semibold">
                Rp. <span>0</span>
              </h2>
            </div>
            <hr />
            <div className=" flex flex-row justify-between my-3 items-center">
              <h2>
                Tax estimate{" "}
                <span className=" bg-gray-300 py-1 px-2 rounded-full">?</span>
              </h2>
              <h2 className=" font-semibold">
                Rp. <span>0</span>
              </h2>
            </div>
            <hr />
            <div className=" flex flex-row justify-between my-3 items-center">
              <h2>Order Total</h2>
              <h2 className=" font-semibold">
                Rp. <span>{total}</span>
              </h2>
            </div>
            <hr />

            <button
              onClick={handleCheckoutClick}
              className=" hover:bg-gray-700 flex flex-row items-center justify-center gap-2 my-4 py-2 px-4 rounded-md font-extrabold text-lg bg-gray-500 w-full "
            >
              <HiCurrencyDollar /> Ckeckout
            </button>

            <Toaster />
          </div>
        </main>
      </main>
    </section>
  );
}

export default CartProduct;
