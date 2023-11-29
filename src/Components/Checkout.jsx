import React, { useEffect, useState } from "react";
import MyImage from "../Assets/img-1 (1).jpg";
import { FaHandHoldingUsd } from "react-icons/fa";
import { TbWorldBolt } from "react-icons/tb";
import { FaWallet } from "react-icons/fa";
import { FaGoogle, FaPersonBurst } from "react-icons/fa6";
import { BsPaypal } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { getListCart } from "../Redux/Action/cartAction";
import { calculateTotalPrice } from "../Redux/Action/totalAction";
import { loadUserData } from "../Redux/Action/orderAction";

function Checkout() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems) || [];
  const total = useSelector((state) => state.total);
  // const userId = localStorage.getItem('userId');
  const userId = "655fcf1ab38852efdd7c0fc5"; // Ambil userId dari localStorage
  const userData = useSelector((state) => state.order.userData);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

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
    // Mengupdate state lokal formulir saat userData berubah
    if (userData) {
      setEmail(userData.email || "");
      setName(userData.name || "");
      setCountry(userData.country || "");
      setAddress(userData.address || "");
      setCity(userData.city || "");
      setPhoneNumber(userData.phoneNumber || "");
      setPostalCode(userData.postalCode || "");
    }
  }, [userData]);

  const handlePaymentMethodSelect = (method) => {
    // Mengupdate state metode pembayaran yang dipilih
    setSelectedPaymentMethod(method);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Menyimpan data keranjang dan metode pembayaran ke localStorage
    const checkoutData = {
      cartItems,
      selectedPaymentMethod,
    };

    localStorage.setItem("checkoutData", JSON.stringify(checkoutData));

    // Logika pengiriman formulir
  };

  return (
    <section className="sm:w-11/12 sm:mx-auto font-mono ">
      <main className=" sm:mx-20 sm:mt-10 mx-7">
        <h1 className=" text-2xl  font-extrabold mb-2">Checkout</h1>
        <hr className=" mb-2" />

        <h2 className=" mb-1 text-sm">
          Home {">"} Product Detail {">"} Cart {">"}{" "}
          <span className=" text-blue-500 underline">Checkout</span>
        </h2>
      </main>

      <main className=" sm:flex sm:flex-row sm:mx-20 sm:gap-3 flex flex-col-reverse">
        <main className=" sm:basis-3/5 mx-4">
          <h1 className="flex justify-center font-extrabold text-lg">
            Payment
          </h1>
          <div className=" sm:flex sm:flex-row sm:gap-2 flex flex-col sm:items-center sm:justify-center  border py-2 px-3">
            <button
              onClick={() => handlePaymentMethodSelect("e-wallet")}
              className="flex flex-row gap-2 items-center justify-center font-semibold bg-blue-500 mb-2 sm:w-36 py-2 px-3 rounded"
            >
              <FaWallet /> E-Wallet
            </button>
            <button
              onClick={() => handlePaymentMethodSelect("e-wallet")}
              className="flex mb-2 flex-row gap-2 items-center justify-center font-semibold bg-black text-white sm:w-36 py-2 px-3 rounded"
            >
              <FaGoogle /> G-Pay
            </button>
            <button
              onClick={() => handlePaymentMethodSelect("e-wallet")}
              className="flex mb-2 flex-row gap-2 items-center justify-center font-semibold bg-yellow-400 sm:w-36 py-2 px-3 rounded"
            >
              <BsPaypal />
              PayPal
            </button>
            <button
              onClick={() => handlePaymentMethodSelect("e-wallet")}
              className="flex mb-2 flex-row gap-2 items-center justify-center font-semibold bg-slate-300 sm:w-36 py-2 px-3 rounded"
            >
              <BiWorld /> Debit
            </button>
          </div>

          <h1 className=" mt-4 mb-2">Contact Information</h1>
          <form action="" className="flex flex-col">
            <input
              className=" border py-2 px-3"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h1 className=" mt-4 mb-2">Shipping Address</h1>
            <input
              className=" border py-2 px-3 mb-3"
              type="text"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <input
              className=" border py-2 px-3 mb-3"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className=" border py-2 px-3 mb-3"
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <div className="flex flex-row gap-3">
              <input
                className="w-full border py-2 px-3 mb-3"
                type="text"
                name=""
                id=""
                placeholder="City"
                value={city}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="w-full border py-2 px-3 mb-3"
                type="number"
                name=""
                id=""
                placeholder="Postcode"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </div>
            <input
              className=" border py-2 px-3 mb-3"
              type="number"
              name=""
              id=""
              placeholder="Phone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <div className="flex flex-row justify-between mt-7">
              <button className=" text-blue-400">{"<"} Return to Cart</button>
              <button
                onClick={handleSubmit}
                className=" bg-black text-white font-semibold py-3 px-6 rounded drop-shadow-md"
              >
                Confirm Order
              </button>
            </div>
          </form>
        </main>

        <main className=" sm:basis-2/3 bg-gray-100 rounded py-4 px-8">
          <h1 className=" font-bold text-xl mb-4">Order Summary</h1>

          <div>
            {cartItems.map((item, index) => (
              <div key={index} className=" flex flex-row mb-3 ">
                <img
                  className=" w-20 h-24 rounded drop-shadow-md mr-6 "
                  src={item.images}
                  alt=""
                />
                <div className="  w-9/12 flex flex-row justify-between">
                  <div>
                    {" "}
                    <h1 className=" font-bold text-lg">{item.name}</h1>
                    <h1 className=" font-bold text-lg">
                      Rp. <span>{item.price}</span>
                    </h1>
                    <h1 className=" font-bold ">
                      Color : <span>{item.selectedColor}</span>
                    </h1>
                    <h1 className=" font-bold ">
                      Size : <span>{item.selectedSize}</span>
                    </h1>
                    <h1 className=" font-bold ">
                      Unit : <span>{item.quantity}</span>
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <hr className=" mt-5 " />

          <form
            action=""
            className=" my-4 flex flex-row justify-between w-full"
          >
            <input
              required
              className=" border py-2 px-5 w-3/4"
              type="text"
              placeholder="Gift card or discount code "
            />
            <button className=" font-bold bg-gray-300 py-2 px-5 w-1/4 hover:bg-gray-500">
              Apply
            </button>
          </form>

          <hr />

          <div className=" flex flex-row justify-between w-full my-2">
            <h1>Subtotal</h1>
            <h1>
              Rp. <span>{total}</span>
            </h1>
          </div>
          <div className=" flex flex-row justify-between w-full my-2">
            <h1>Shipping</h1>
            <h1>
              Rp. <span>0</span>
            </h1>
          </div>

          <hr />

          <div className=" flex flex-row justify-between w-full my-2">
            <h1 className=" font-bold">Total</h1>
            <h1>
              Rp. <span>{total}</span>
            </h1>
          </div>

          <div className=" bg-white mt-7 sm:py-5 pt-2 px-8 drop-shadow-xl rounded h-44">
            <div className=" flex flex-row items-center w-full gap-6 mb-3">
              <h1 className=" text-6xl ">
                <FaHandHoldingUsd />
              </h1>
              <h2 className=" font-extrabold text-xl">
                TRY OUT WATCHES RISK-FREE
              </h2>
            </div>
            <h2>
              With a 30-days risk free trial, easy return, shipping & damage
              protection, and a 2-year warranty{" "}
            </h2>
          </div>

          <div className=" bg-white mt-7 sm:py-5 pt-2 px-8 drop-shadow-xl rounded h-44">
            <div className=" flex flex-row items-center w-full gap-6 mb-3">
              <h1 className=" text-6xl ">
                <FaPersonBurst />
              </h1>
              <h2 className=" font-extrabold text-xl">2,000+ 5-STAR REVIEWS</h2>
            </div>
            <h2>
              Trusted by thousand of customers worldwide & a 4.7/5. Trustpilot
              score. 100% Satisfacation Guarantee
            </h2>
          </div>

          <div className=" bg-white mt-7 sm:py-5 pt-2 px-8 drop-shadow-xl rounded h-44">
            <div className=" flex flex-row items-center w-full gap-6 mb-3">
              <h1 className=" text-6xl ">
                <TbWorldBolt />
              </h1>
              <h2 className=" font-extrabold text-xl">FREE FAST SHIPPING</h2>
            </div>
            <h2>Get your order ASAP within 3 days across the Indonesia.</h2>
          </div>
        </main>
      </main>
    </section>
  );
}

export default Checkout;
