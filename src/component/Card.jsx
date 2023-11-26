import React from "react";
import sepatu from "../assets/img/compas.png";

function Card() {
  return (
    <>
      <div className="border border-hitam rounded-t-md cursor-pointer hover:shadow-2xl hover:shadow-ungu">
        <div className="w-60 text align-middle bg-white rounded-t-md shadow-xl border-b-ungu border sm:w-32">
          <img src={sepatu} alt="" />
        </div>
        <div className="bg-white p-3 sm:w-32">
          <h3 className="font-semibold text-lg sm:text-sm">Ventela White</h3>
          <span className="sm:text-xs">Rp.600,000,00</span>
          <p className="font-ligh sm:text-[10px]">Lorem ipsum dolor sit amet </p>
          <p className="font-ligh sm:text-[10px] m-0">Terjual 10</p>
        </div>
      </div>
    </>
  );
}

export default Card;
