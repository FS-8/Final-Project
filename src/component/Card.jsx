import React from "react";
import sepatu from "../assets/img/compas.png";

function Card() {
  return (
    <>
      <div>
        <div className="w-60 bg-white rounded-t-md shadow-xl border-b-ungu border sm:w-32">
          <img src={sepatu} alt="" />
        </div>
        <div className="bg-white p-3">
          <h3 className="font-semibold text-lg">Ventela White</h3>
          <span>Rp.600,000,00</span>
          <p className="font-light">Lorem ipsum dolor sit amet </p>
        </div>
      </div>
    </>
  );
}

export default Card;
