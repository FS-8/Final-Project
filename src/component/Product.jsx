import React, { useEffect } from "react";
import Card from "./card";
import { useDispatch, useSelector } from "react-redux";
import { getSepatu } from "../redux/action/sepatuAction";

function Product() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSepatu());
  }, []);

  const { shoes, isLoading, status } = useSelector((state) => state.sepatu);
  console.log(isLoading);
  return (
    <>
      {shoes.map((item, i) => (
        <div key={i}>
          <div className="flex flex-wrap justify-center gap-10 sm:gap-5">
            <div className="border border-hitam rounded-t-md cursor-pointer hover:shadow-2xl hover:shadow-ungu w-60 sm:w-32 ">
              <div className="w-60 text align-middle bg-white rounded-t-md shadow-xl border-b-ungu border sm:w-32">
                <img src={item.images[0]} alt="" />
              </div>
              <div className="bg-white p-3 sm:w-32">
                <h3 className="font-semibold text-lg sm:text-sm">{item.name}</h3>
                <span className="sm:text-xs">Rp.{item.price}</span>
                <p className="font-ligh sm:text-[10px] overflow-auto h-12">{item.description}</p>
                <p className="font-ligh sm:text-[10px] m-0">Terjual 10</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Product;
