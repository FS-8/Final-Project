import React, { useEffect, useState } from "react";
import { FaWallet } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { BsPaypal } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { getListCart } from "../Redux/Action/cartAction";
import { calculateTotalPrice } from "../Redux/Action/totalAction";
import { loadUserData } from "../Redux/Action/orderAction";
import { useNavigate } from "react-router";

function OrderSummary() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems) || [];
  const total = useSelector((state) => state.total);
  const userId = localStorage.getItem("userId");
  // const userId = "6568901b88be8ce03a9412dd"; // Ambil userId dari localStorage
  const userData = useSelector((state) => state.order.userData);
  const checkoutDataString = localStorage.getItem("checkoutData");
  const checkoutData = JSON.parse(checkoutDataString);
  const navigate = useNavigate();

  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    dispatch(getListCart());
    dispatch(calculateTotalPrice());
  }, [dispatch]);

  useEffect(() => {
    // Memuat data pengguna berdasarkan userId ketika komponen dimuat
    if (userId) {
      dispatch(loadUserData(userId));
    }
  }, [dispatch, userId]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/");
    }, 5000);
    // Membersihkan timeout jika komponen dibongkar sebelum waktu 5 detik berlalu
    return () => clearTimeout(timeoutId);
  }, [navigate]);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  const handleGoToHomeClick = () => {
    navigate("/");
  };

  const getPaymentIcon = (paymentMethod) => {
    switch (paymentMethod.toLowerCase()) {
      case "paypal":
        return <BsPaypal />;
      case "g-pay":
        return <FaGoogle />;
      case "e-wallet":
        return <FaWallet />;
      case "debit":
        return <BiWorld />;
      default:
        return <FaWallet />;
    }
  };

  return (
    <section className=" sm:w-11/12 sm:mx-auto font-mono">
      <main className="sm:flex sm:flex-row sm:mx-20 mt-1 border flex flex-col">
        <main className=" sm:basis-2/5 sm:w-full sm:bg-auto">
          <img
            className=" sm:bg-auto sm:w-full w-full sm:h-screen h-72 object-cover"
            src="https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </main>

        <main className=" sm:basis-3/5 sm:pl-20 pl-10 pt-10 pr-10 h-128 overflow-y-auto">
          <h1 className=" text-blue-500 text-sm">Payment successful</h1>
          <h1 className=" text-4xl font-extrabold mb-4">Thanks for ordering</h1>
          <h1 className=" mb-7">
            We appreciate your order, we’re currently processing it. So hang
            tight and we’ll send you confirmation very soon!
          </h1>

          {cartItems.map((item, index) => (
            <div key={index} className=" flex flex-row mb-3">
              <img
                className=" w-20 rounded drop-shadow-md mr-6"
                src={item.images}
                alt=""
              />
              <div className=" flex flex-row justify-between w-full">
                <div>
                  {" "}
                  <h1 className=" text-lg">{item.name}</h1>
                </div>

                <div>
                  <h1 className=" text-lg">
                    Rp. <span>{item.price}</span>
                  </h1>
                </div>
              </div>
            </div>
          ))}

          <hr className=" mt-5" />

          <div className=" flex flex-row justify-between w-full my-3">
            <h1>Subtotal</h1>
            <h1>
              Rp. <span>{total}</span>
            </h1>
          </div>
          <div className=" flex flex-row justify-between w-full my-3">
            <h1>Shipping</h1>
            <h1>
              Rp. <span>0</span>
            </h1>
          </div>

          <hr />

          <div className=" flex flex-row justify-between w-full my-3">
            <h1 className=" font-bold">Total</h1>
            <h1>
              Rp. <span>{total}</span>
            </h1>
          </div>

          <hr />

          <div className="flex flex-row sm:justify-between w-full mt-8 ">
            <div>
              <h1 className=" font-bold mb-2">Shipping Address</h1>
              <h1 className=" font-bold">{userData.name}</h1>
              <h1>
                <span>{userData.kodePos}</span>,<span>{userData.country}</span>
              </h1>
              <h1>
                <span>{userData.city}</span>,<span>{userData.address}</span>
              </h1>
            </div>
            <div>
              <h1 className=" font-bold mb-2">Payment Information</h1>
              <h1 className="flex flex-row gap-2 items-center font-semibold w-36 rounded">
                {getPaymentIcon(checkoutData.paymentMethod)}
                {checkoutData.paymentMethod}
              </h1>
            </div>
          </div>

          <hr className=" mt-4" />
          <button
            onClick={handleGoToHomeClick}
            className="flex flex-row justify-end w-full gap-2 items-center text-blue-400 mt-5 animate-countdown"
          >
            <h1>{countdown}</h1>
            Continue Shopping {">>>"}
          </button>
        </main>
      </main>
    </section>
  );
}

export default OrderSummary;
