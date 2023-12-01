import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Product() {
  const { shoes, isLoading, status } = useSelector((state) => state.sepatu);

  let newShoes = shoes.length - 1;

  return (
    <>
      <div className="mt-28">
        <h1 className="text-3xl font-bold smrid:text-xl text-hitam text-center p-5">Terbaru</h1>
        <div className="flex flex-wrap justify-center gap-10 smrid:gap-5">
          {shoes
            .slice(0)
            .reverse()
            .map((item, i) => (
              <Link key={i} className="text-hitam" to={`/detail/${item._id}`}>
                <div className="h-[25rem] smrid:h-[15rem] bg-white rounded-md cursor-pointer border border-hitam hover:shadow-md shadow-md shadow-hitam hover:shadow-ungu">
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
    </>
  );
}

export default Product;
