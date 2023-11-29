import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

function Product() {
  const { shoes, isLoading, status } = useSelector((state) => state.sepatu);
  console.log(isLoading);
  return (
    <>
      <div>
        <div className="flex flex-wrap justify-center gap-10 sm:gap-5">
          {shoes.map((item, i) => (
            <div key={i} className="border border-hitam rounded-t-md cursor-pointer hover:shadow-2xl hover:shadow-ungu w-60 sm:w-32 ">
              <div className="w-60 text align-middle bg-white rounded-t-md shadow-xl border-b-ungu border sm:w-32">
                <img className="w-full" src={item.images[0]} alt="" />
              </div>
              <div className="bg-white p-3 sm:w-32 sm:p-1">
                <h3 className="font-semibold text-lg sm:text-[10px] m-0 sm:leading-3">{item.name}</h3>
                <span className="sm:text-[10px] font-bold ">Rp.{item.price}</span>
                <p className="font-ligh sm:text-[10px] overflow-auto text-sm sm:leading-3 h-auto">{item.description.split(" ").slice(0, 5).join(" ")}</p>
                <p className="font-ligh sm:text-[10px] m-0 text-sm">Terjual 10</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Product;
