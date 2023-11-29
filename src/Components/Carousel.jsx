import { useSelector } from "react-redux";
import Card from "./card";

import React from "react";

function Carousel() {
  const { shoes, isLoading, status } = useSelector((state) => state.sepatu);
  return (
    <>
      <div className="px-16 bg-gradient-to-br from-ungu to-hitam mt-5 smrid:px-0 mx-auto">
        <div className="pt-2">
          <h2 className="text-putih font-bold text-3xl text-center smrid:text-2xl mb-2">Best Seller</h2>
        </div>
        <div className="overflow-auto ">
          <div className="flex gap-10 p-5 smrid:p-2 smrid:gap-2 smrid:pb-5 w-full">
            {shoes.map((item, i) => (
              <div>
                <div className="w-60 bg-putih">
                  <img className="w-full" src={item.images[0]} alt="" />
                  <h3 className="font-semibold text-lg smrid:text-[10px] m-0 smrid:leading-3">{item.name}</h3>
                  <span className="smrid:text-[10px] font-bold ">Rp.{item.price}</span>
                  <p className="font-ligh smrid:text-[10px] overflow-auto text-smrid smrid:leading-3 h-auto">{item.description.split(" ").slice(0, 5).join(" ")}</p>
                  <p className="font-ligh smrid:text-[10px] m-0 text-smrid">Terjual 10</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
