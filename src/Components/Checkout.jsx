import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems) || [];
  const total = useSelector((state) => state.total);
  const userId = localStorage.getItem("userId");
  // const userId = "6568901b88be8ce03a9412dd"; // Ambil userId dari localStorage
  const userData = useSelector((state) => state.order.userData);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [kodePos, setKodePos] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

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
      setPhone(userData.phone || "");
      setKodePos(userData.kodePos || "");
    }
  }, [userData]);

  const handlePaymentMethodSelect = (method) => {
    // Mengupdate state metode pembayaran yang dipilih
    setPaymentMethod(method);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      // 1. Edit data pengguna
      const editedUserData = {
        email,
        name,
        address,
        country,
        city,
        phone,
        kodePos,
      };

      const editUserResponse = await axios.put(
        `http://localhost:3000/users/${userId}`,
        editedUserData
      );
      console.log("Edited User Data:", editUserResponse.data);

      // 2. Pilih data tertentu dari cartItems sebelum post
      const selectedCartData = cartItems.map((item) => ({
        product: item.product,
        quantity: item.quantity,
        name: item.name,
        price: item.price,
        selectedColor: item.selectedColor,
        selectedSize: item.selectedSize,
        // Pilih properti lain yang ingin Anda sertakan
      }));

      // 3. Kirim data produk
      if (paymentMethod !== "") {
        const checkoutData = {
          user: userId,
          products: selectedCartData,
          paymentMethod: paymentMethod,
        };

        const postProductResponse = await axios.post(
          "http://localhost:3000/orders/order",
          checkoutData
        );
        console.log("Posted Product Data:", postProductResponse.data);
        localStorage.setItem("checkoutData", JSON.stringify(checkoutData));

        setTimeout(() => {
          localStorage.removeItem("cart");
          console.log("Data in localStorage removed after 5 seconds");
        }, 5000);

        navigate("/summary");
      } else {
        toast.error("Pilih Metode Pembayaran");
      }
    } catch (error) {
      console.error("Error handling button click:", error);
    }
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
              onClick={() => handlePaymentMethodSelect("E-Wallet")}
              className={`flex flex-row gap-2 items-center justify-center font-semibold bg-blue-500 mb-2 sm:w-36 py-2 px-3 rounded ${
                paymentMethod === "E-Wallet"
                  ? "ring  ring-slate-950 ring-offset-1"
                  : ""
              }`}
            >
              <FaWallet /> E-Wallet
            </button>
            <button
              onClick={() => handlePaymentMethodSelect("G-Pay")}
              className={`flex mb-2 flex-row gap-2 items-center justify-center font-semibold bg-black text-white sm:w-36 py-2 px-3 rounded ${
                paymentMethod === "G-Pay"
                  ? "ring ring-slate-950 ring-offset-1"
                  : ""
              }`}
            >
              <FaGoogle /> G-Pay
            </button>
            <button
              onClick={() => handlePaymentMethodSelect("PayPal")}
              className={`flex mb-2 flex-row gap-2 items-center justify-center font-semibold bg-yellow-400 sm:w-36 py-2 px-3 rounded ${
                paymentMethod === "PayPal"
                  ? "ring ring-slate-950 ring-offset-1"
                  : ""
              }`}
            >
              <BsPaypal />
              PayPal
            </button>
            <button
              onClick={() => handlePaymentMethodSelect("Debit")}
              className={`flex mb-2 flex-row gap-2 items-center justify-center font-semibold bg-slate-300 sm:w-36 py-2 px-3 rounded ${
                paymentMethod === "Debit"
                  ? "ring ring-slate-950 ring-offset-1"
                  : ""
              }`}
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
              required
            />
            <h1 className=" mt-4 mb-2">Shipping Address</h1>
            <input
              className=" border py-2 px-3 mb-3"
              type="text"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
            <input
              className=" border py-2 px-3 mb-3"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className=" border py-2 px-3 mb-3"
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <div className="flex flex-row gap-3">
              <input
                className="w-full border py-2 px-3 mb-3"
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
              <input
                className="w-full border py-2 px-3 mb-3"
                type="number"
                placeholder="Postcode"
                value={kodePos}
                onChange={(e) => setKodePos(e.target.value)}
                required
              />
            </div>
            <input
              className=" border py-2 px-3 mb-3"
              required
              type="number"
              name=""
              id=""
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <div className="flex flex-row justify-between mt-7">
              <button className=" text-blue-400">{"<"} Return to Cart</button>
              <button
                onClick={handleSubmit}
                className=" bg-black text-white font-semibold py-3 px-6 rounded drop-shadow-md hover:bg-slate-900"
              >
                Confirm Order
              </button>
              <Toaster />
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
