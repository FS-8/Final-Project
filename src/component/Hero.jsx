import React from "react";
import sepatu from "../assets/img/compas.png";

function Hero() {
  return (
    <div className=" px-16">
      <div className="flex justify-between gap-2 ">
        <div className="self-center flex-col flex gap-2 text-hitam">
          <h1 className="text-7xl font-bold">Shoes World</h1>
          <h2 className="text-5xl font-bold">Temukan semua brand sepatu indonesia di sini</h2>
          <h3 className="text-lg font-light">Kami hanya menyediakan sepatu dengan kualitas terbaik, sehingga Anda dapat berjalan dengan nyaman dan bergaya sepanjang hari.</h3>
          <button className="px-5 py-3 bg-ungu rounded-3xl self-start text-putih">Explore Now</button>
        </div>
        <div className="bg-putih p-5 flex flex-col">
          <img className="w-96 rotate-[17deg] self-center" src={sepatu} alt="" />
          <div className="flex gap-5 overflow-auto overflow-y-hidden">
            <img className="w-40 bg-white rounded-lg" src={sepatu} alt="" />
            <img className="w-40 bg-white rounded-lg border-b-ungu border-b-8" src={sepatu} alt="" />
            <img className="w-40 bg-white rounded-lg" src={sepatu} alt="" />
            <img className="w-40 bg-white rounded-lg" src={sepatu} alt="" />
            <img className="w-40 bg-white rounded-lg" src={sepatu} alt="" />
            <img className="w-40 bg-white rounded-lg" src={sepatu} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
