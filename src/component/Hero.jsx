import React from "react";
import sepatu from "../assets/img/compas.png";

function Hero() {
  return (
    <div className=" px-16 sm:px-0">
      <div className="flex justify-between gap-2 sm:flex-col sm:text-center">
        <div className="self-center flex-col flex gap-2 sm:gap-0 text-hitam">
          <h1 className="text-7xl font-bold sm:text-2xl sm:mt-2">Shoes World</h1>
          <h2 className="text-5xl font-bold sm:text-lg">Temukan semua brand sepatu indonesia di sini</h2>
          <h3 className="text-lg font-light sm:text-sm">“Berjalan di Tanah Air dengan Gaya” - Menyuarakan kebanggaan kita terhadap produk lokal dan menunjukkan bahwa sepatu lokal Indonesia dapat bersaing dalam hal gaya dan kualitas.</h3>
          <button className="px-5 py-3 bg-ungu rounded-3xl self-start text-putih hover:bg-hitam transition ease-in-out duration-300 sm:text-xs sm:p-2 sm:self-center">Explore Now</button>
        </div>
        <div className="bg-putih p-5 flex flex-col ">
          <img className="w-96 rotate-[17deg] self-center" src={sepatu} alt="" />
          <div className="flex gap-5 overflow-auto overflow-y-hidden">
            <img className="w-40 bg-white rounded-lg shadow-xl" src={sepatu} alt="" />
            <img className="w-40 bg-white rounded-lg shadow-xl border-b-ungu border-b-8" src={sepatu} alt="" />
            <img className="w-40 bg-white rounded-lg shadow-xl" src={sepatu} alt="" />
            <img className="w-40 bg-white rounded-lg shadow-xl" src={sepatu} alt="" />
            <img className="w-40 bg-white rounded-lg shadow-xl" src={sepatu} alt="" />
            <img className="w-40 bg-white rounded-lg shadow-xl" src={sepatu} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
