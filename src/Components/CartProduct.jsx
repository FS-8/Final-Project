import React from "react";
import { HiCurrencyDollar } from "react-icons/hi";
import MyImage from "../Assets/img-1 (1).jpg";
import MyImage2 from "../Assets/img-1 (2).jpg";
import MyImage3 from "../Assets/img-1 (3).jpg";
import MyImage4 from "../Assets/img-1 (4).jpg";
import MyImage5 from "../Assets/img-1 (5).jpg";

function CartProduct() {
  return (
    <section className=" flex w-11/12 mx-auto justify-center font-mono">
      <main className="flex flex-row mt-20 mx-20 gap-5">
        <main className=" basis-2/3">
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

          <div className=" flex flex-row gap-10 mb-5">
            <div>
              <img
                className=" w-64 drop-shadow-md rounded"
                src={MyImage}
                alt=""
              />
            </div>
            <div>
              <div className="flex flex-row justify-between font-extrabold text-xl mb-2">
                <h1>Sepatu Ventela Reborn</h1>
                <h2>
                  Rp. <span>379.000</span>
                </h2>
              </div>
              <p>
                Sepatu kanvas yang di desain elegan dengan kualitas kanvas
                terbaik dan insol empuk tidak kempes karena memakai ultralite
                foam.
              </p>
              <h2>Black/White/Grey</h2>

              <div className="flex flex-row gap-4 items-center">
                <button className=" bg-gray-400 py-1 px-5 rounded">-</button>
                <span>1</span>
                <button className=" bg-gray-400 py-1 px-5 rounded">+</button>
              </div>

              <div className=" flex flex-row my-4 gap-6 underline text-base font-bold">
                <h2>Move To Favorites</h2>
                <h2>Remove</h2>
              </div>
            </div>
          </div>
          <div className=" flex flex-row gap-10 mb-5">
            <div>
              <img
                className=" w-64 drop-shadow-md rounded"
                src={MyImage}
                alt=""
              />
            </div>
            <div>
              <div className="flex flex-row justify-between font-extrabold text-xl mb-2">
                <h1>Sepatu Ventela Reborn</h1>
                <h2>
                  Rp. <span>379.000</span>
                </h2>
              </div>
              <p>
                Sepatu kanvas yang di desain elegan dengan kualitas kanvas
                terbaik dan insol empuk tidak kempes karena memakai ultralite
                foam.
              </p>
              <h2>Black/White/Grey</h2>

              <div className="flex flex-row gap-4 items-center">
                <button className=" bg-gray-400 py-1 px-5 rounded">-</button>
                <span>1</span>
                <button className=" bg-gray-400 py-1 px-5 rounded">+</button>
              </div>

              <div className=" flex flex-row my-4 gap-6 underline text-base font-bold">
                <h2>Move To Favorites</h2>
                <h2>Remove</h2>
              </div>
            </div>
          </div>

          <h1 className=" font-extrabold text-lg">Shipping</h1>
          <h1>{">>>>"} Ships In 3-4 Days</h1>

          <div className=" bg-red-100 rounded drop-shadow-md my-4 font-bold w-2/5 py-2 px-4 ">
            <h1>Just a few left. Order soon</h1>
          </div>
        </main>

        <main className=" basis-1/3 bg-gray-100 h-80 rounded">
          <div className=" p-4">
            <h1 className=" text-xl font-bold">Order Summary</h1>
            <div className=" flex flex-row justify-between my-3 items-center">
              <h2>SubTotal</h2>
              <h2 className=" font-semibold">
                Rp. <span>500.000</span>
              </h2>
            </div>
            <hr />
            <div className=" flex flex-row justify-between my-3 items-center">
              <h2>
                Shipping estimate{" "}
                <span className=" bg-gray-300 py-1 px-2 rounded-full">?</span>
              </h2>
              <h2 className=" font-semibold">
                Rp. <span>25.000</span>
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
                Rp. <span>525.000</span>
              </h2>
            </div>
            <hr />

            <button className=" flex flex-row items-center justify-center gap-2 my-4 py-2 px-4 rounded-md font-extrabold text-lg bg-gray-500 w-full ">
              <HiCurrencyDollar /> Ckeckout
            </button>
          </div>
        </main>
      </main>
    </section>
  );
}

export default CartProduct;
