import { useSelector } from "react-redux";
import Card from "./card";

import React from "react";
import { Link, Navigate } from "react-router-dom";

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
              <Link className="text-hitam" to={`/detail/${item._id}`}>
                <div key={i} className="h-[25rem] smrid:h-[15rem] bg-white rounded-md cursor-pointer border border-hitam hover:shadow-md shadow-md shadow-hitam hover:shadow-ungu">
                  <div className="w-60 bg-white rounded-t-md smrid:w-32">
                    <img className="w-full rounded-t-md border border-b-ungu" src={item.images[0]} alt="" />
                    <div className="p-2">
                      <h3 className="font-semibold text-lg smrid:text-[10px] m-0 smrid:leading-3">{item.name}</h3>
                      <span className="smrid:text-[10px] font-bold ">Rp.{item.price}</span>
                      <p className="font-ligh smrid:text-[10px] overflow-auto text-smrid smrid:leading-3 h-auto">{item.description.split(" ").slice(0, 5).join(" ")}</p>
                    </div>
                    <p className="font-ligh smrid:text-[10px] m-0 text-smrid px-2">Terjual 10</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
