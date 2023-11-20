import React from "react";
import MyImage from "../Assets/img-1 (1).jpg";
import { FaHandHoldingUsd } from "react-icons/fa";
import { TbWorldBolt } from "react-icons/tb";
import { FaWallet } from "react-icons/fa";
import { FaGoogle, FaPersonBurst } from "react-icons/fa6";
import { BsPaypal } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";

function Checkout() {
  return (
    <section className="w-11/12 mx-auto font-mono ">
      <main className=" flex flex-row mx-20 mt-10 gap-3">
        <main className=" basis-3/5">
          <h1 className=" text-2xl  font-extrabold mb-2">Checkout</h1>
          <hr className=" mb-2" />

          <h2 className=" mb-1 text-sm">
            Home {">"} Product Detail {">"} Cart {">"}{" "}
            <span className=" text-blue-500 underline">Checkout</span>
          </h2>

          <h1 className="flex justify-center font-extrabold text-lg">
            Payment
          </h1>
          <div className=" flex gap-2 items-center justify-center border py-2 px-3">
            <button className="flex flex-row gap-2 items-center justify-center font-semibold bg-blue-500 w-36 py-2 px-3 rounded">
              <FaWallet /> E-Wallet
            </button>
            <button className="flex flex-row gap-2 items-center justify-center font-semibold bg-black text-white w-36 py-2 px-3 rounded">
              <FaGoogle /> G-Pay
            </button>
            <button className="flex flex-row gap-2 items-center justify-center font-semibold bg-yellow-400 w-36 py-2 px-3 rounded">
              <BsPaypal />
              PayPal
            </button>
            <button className="flex flex-row gap-2 items-center justify-center font-semibold bg-slate-300 w-36 py-2 px-3 rounded">
              <BiWorld /> SEA-Bank
            </button>
          </div>

          <h1 className=" mt-4 mb-2">Contact Information</h1>
          <form action="" className="flex flex-col">
            <input
              className=" border py-2 px-3"
              type="email"
              placeholder="Email"
            />
            <h1 className=" mt-4 mb-2">Shipping Address</h1>
            <input
              className=" border py-2 px-3 mb-3"
              type="text"
              placeholder="Country"
            />
            <input
              className=" border py-2 px-3 mb-3"
              type="text"
              placeholder="Name"
            />
            <input
              className=" border py-2 px-3 mb-3"
              type="text"
              placeholder="Address"
            />
            <div className="flex flex-row gap-3">
              <input
                className="w-full border py-2 px-3 mb-3"
                type="text"
                name=""
                id=""
                placeholder="City"
              />
              <input
                className="w-full border py-2 px-3 mb-3"
                type="number"
                name=""
                id=""
                placeholder="Postcode"
              />
            </div>
            <input
              className=" border py-2 px-3 mb-3"
              type="number"
              name=""
              id=""
              placeholder="Phone"
            />
            <div className="flex flex-row justify-between mt-7">
              <button className=" text-blue-400">{"<"} Return to Cart</button>
              <button className=" bg-black text-white font-semibold py-3 px-6 rounded drop-shadow-md">
                Confirm Order
              </button>
            </div>
          </form>
        </main>

        <main className=" basis-2/3 bg-gray-100 rounded py-4 px-8">
          <h1 className=" font-bold text-xl mb-4">Order Summary</h1>

          <div className=" flex flex-row">
            <img
              className=" w-20 rounded drop-shadow-md mr-6"
              src={MyImage}
              alt=""
            />
            <div className=" flex flex-row justify-between w-full">
              <div>
                {" "}
                <h1 className=" font-bold text-lg">Sepatu Ventela Reborn</h1>
                <h1 className=" font-bold ">
                  Unit : <span>1</span>
                </h1>
              </div>

              <div>
                <h1 className=" font-bold text-lg">
                  Rp. <span>300.000</span>
                </h1>
              </div>
            </div>
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
              Rp. <span>500.000</span>
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
              Rp. <span>500.000</span>
            </h1>
          </div>

          <div className=" bg-white mt-7 py-5 px-8 drop-shadow-xl rounded h-44">
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

          <div className=" bg-white mt-7 py-5 px-8 drop-shadow-xl rounded h-44">
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
          <div className=" bg-white mt-7 py-5 px-8 drop-shadow-xl rounded h-44">
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
