import React from "react";
import { FaWallet } from "react-icons/fa";
import MyImage from "../Assets/img-1 (1).jpg";

function OrderSummary() {
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

          <div className=" flex flex-row mb-3">
            <img
              className=" w-20 rounded drop-shadow-md mr-6"
              src={MyImage}
              alt=""
            />
            <div className=" flex flex-row justify-between w-full">
              <div>
                {" "}
                <h1 className=" text-lg">Sepatu Ventela Reborn</h1>
              </div>

              <div>
                <h1 className=" text-lg">
                  Rp. <span>300.000</span>
                </h1>
              </div>
            </div>
          </div>

          <hr className=" mt-5" />

          <div className=" flex flex-row justify-between w-full my-3">
            <h1>Subtotal</h1>
            <h1>
              Rp. <span>500.000</span>
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
              Rp. <span>500.000</span>
            </h1>
          </div>

          <hr />

          <div className="flex flex-row sm:justify-between w-full mt-8 ">
            <div>
              <h1 className=" font-bold mb-2">Shipping Address</h1>
              <h1 className=" font-bold">Agaam</h1>
              <h1>
                <span>62271</span>,<span>Indonesia</span>
              </h1>
              <h1>
                <span>Surabaya</span>,<span>Jl. Basuki Rahmats</span>
              </h1>
            </div>
            <div>
              <h1 className=" font-bold mb-2">Payment Information</h1>
              <h1 className="flex flex-row gap-2 items-center font-semibold w-36 rounded">
                <FaWallet /> E-Wallet
              </h1>
            </div>
          </div>

          <hr className=" mt-4" />
          <button className="flex flex-row justify-end w-full gap-2 items-center text-blue-400 mt-5">
            Continue Shopping {">>>"}
          </button>
        </main>
      </main>
    </section>
  );
}

export default OrderSummary;
