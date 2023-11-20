import React from "react";
import sepatu from "../assets/img/compas.png";

function Card() {
  return (
    <>
      <div>
        <div className="w-40 bg-white rounded-lg shadow-xl">
          <img src={sepatu} alt="" />
        </div>
        <div className="bg-white">
          <h3>Ventela White</h3>
          <p>Lorem ipsum dolor sit amet </p>
        </div>
      </div>
    </>
  );
}

export default Card;
