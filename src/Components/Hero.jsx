import React, { useEffect, useRef, useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

import sepatu from "../assets/img/compas.png";
import sport from "../assets/img/sport.jpg";

const slide = [sepatu, sepatu, sepatu, sepatu];

function Hero() {
  const [curr, setCurr] = useState(0);

  const next = () => setCurr((curr) => (curr === slide.length - 1 ? 0 : curr + 1));
  const pre = () => setCurr((curr) => (curr === 0 ? slide.length - 1 : curr - 1));

  return (
    <div className=" px-16 sm:px-0 mt-24 ">
      <div className="flex justify-between gap-2 sm:flex-col sm:text-center">
        <div className="self-center flex-col flex gap-2 sm:gap-0 text-hitam sm:hidden">
          <h1 className="text-7xl font-bold sm:text-2xl sm:mt-2">Shoes World</h1>
          <h2 className="text-5xl font-bold sm:text-lg">Temukan semua brand sepatu indonesia di sini</h2>
          <h3 className="text-lg font-light sm:text-sm">“Berjalan di Tanah Air dengan Gaya” - Menyuarakan kebanggaan kita terhadap produk lokal dan menunjukkan bahwa sepatu lokal Indonesia dapat bersaing dalam hal gaya dan kualitas.</h3>
          <button className="px-5 py-3 bg-ungu rounded-3xl self-start text-putih hover:bg-hitam transition ease-in-out duration-300 sm:text-xs sm:p-2 sm:self-center">Explore Now</button>
        </div>
        <div className="bg-putih p-5 flex flex-col w-full ">
          <div className="overflow-hidden relative">
            <div className="flex transition-transform ease-out duration-500 justify-between " style={{ transform: `translateX(-${curr * 100}%)` }}>
              {slide.map((s, i) => (
                <img key={i} className="w-auto rotate-[17deg]" src={s} alt="" />
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4 text-3xl">
              <button onClick={pre}>
                <MdArrowBackIos />
              </button>
              <button onClick={next}>
                <MdArrowForwardIos />
              </button>
            </div>
          </div>
          {/* <img className="w-96 rotate-[17deg] self-center" src={sepatu} alt="" /> */}
          <div className="overflow-x-auto overflow-y-hidden pb-3">
            <div>
              <div className="flex-row flex gap-5 h-auto">
                <img onClick={() => setCurr(0)} className={curr === 0 ? "w-40 bg-white rounded-lg shadow-xl border-b-ungu border-b-8" : "w-40 bg-white rounded-lg shadow-xl"} src={sepatu} alt="" />
                <img onClick={() => setCurr(1)} className={curr === 1 ? "w-40 bg-white rounded-lg shadow-xl border-b-ungu border-b-8" : "w-40 bg-white rounded-lg shadow-xl"} src={sepatu} alt="" />
                <img onClick={() => setCurr(2)} className={curr === 2 ? "w-40 bg-white rounded-lg shadow-xl border-b-ungu border-b-8" : "w-40 bg-white rounded-lg shadow-xl"} src={sepatu} alt="" />
                <img onClick={() => setCurr(3)} className={curr === 3 ? "w-40 bg-white rounded-lg shadow-xl border-b-ungu border-b-8" : "w-40 bg-white rounded-lg shadow-xl"} src={sepatu} alt="" />
                <img onClick={() => setCurr(3)} className={curr === 3 ? "w-40 bg-white rounded-lg shadow-xl border-b-ungu border-b-8" : "w-40 bg-white rounded-lg shadow-xl"} src={sepatu} alt="" />
                <img onClick={() => setCurr(3)} className={curr === 3 ? "w-40 bg-white rounded-lg shadow-xl border-b-ungu border-b-8" : "w-40 bg-white rounded-lg shadow-xl"} src={sepatu} alt="" />
                <img onClick={() => setCurr(3)} className={curr === 3 ? "w-40 bg-white rounded-lg shadow-xl border-b-ungu border-b-8" : "w-40 bg-white rounded-lg shadow-xl"} src={sepatu} alt="" />
                <img onClick={() => setCurr(3)} className={curr === 3 ? "w-40 bg-white rounded-lg shadow-xl border-b-ungu border-b-8" : "w-40 bg-white rounded-lg shadow-xl"} src={sepatu} alt="" />
                <img onClick={() => setCurr(3)} className={curr === 3 ? "w-40 bg-white rounded-lg shadow-xl border-b-ungu border-b-8" : "w-40 bg-white rounded-lg shadow-xl"} src={sepatu} alt="" />
                <img onClick={() => setCurr(3)} className={curr === 3 ? "w-40 bg-white rounded-lg shadow-xl border-b-ungu border-b-8" : "w-40 bg-white rounded-lg shadow-xl"} src={sepatu} alt="" />
                <img onClick={() => setCurr(3)} className={curr === 3 ? "w-40 bg-white rounded-lg shadow-xl border-b-ungu border-b-8" : "w-40 bg-white rounded-lg shadow-xl"} src={sepatu} alt="" />
                <img onClick={() => setCurr(3)} className={curr === 3 ? "w-40 bg-white rounded-lg shadow-xl border-b-ungu border-b-8" : "w-40 bg-white rounded-lg shadow-xl"} src={sepatu} alt="" />
                <img onClick={() => setCurr(3)} className={curr === 3 ? "w-40 bg-white rounded-lg shadow-xl border-b-ungu border-b-8" : "w-40 bg-white rounded-lg shadow-xl"} src={sepatu} alt="" />
                <img onClick={() => setCurr(3)} className={curr === 3 ? "w-40 bg-white rounded-lg shadow-xl border-b-ungu border-b-8" : "w-40 bg-white rounded-lg shadow-xl"} src={sepatu} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
