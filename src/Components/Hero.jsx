import React, { useEffect, useRef, useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

import sepatu from "../assets/img/compas.png";
import sport from "../assets/img/sport.jpg";

const slide = [
  "https://down-id.img.susercontent.com/file/id-11134201-7r992-llen48u0oa0s43",
  "https://down-id.img.susercontent.com/file/sg-11134201-7rblx-lo6voeidra2847",
  "https://down-id.img.susercontent.com/file/sg-11134201-7rbk0-lkuvh3lh910oe3",
  "https://down-id.img.susercontent.com/file/sg-11134201-23010-vybp38b9jtmvb8",
];

function Hero() {
  const [curr, setCurr] = useState(0);

  const next = () => setCurr((curr) => (curr === slide.length - 1 ? 0 : curr + 1));
  const pre = () => setCurr((curr) => (curr === 0 ? slide.length - 1 : curr - 1));

  useEffect(() => {
    return () => setInterval(next, 5000);
  }, []);

  return (
    <div className=" px-16 smrid:px-0 mt-24 ">
      <div className="flex justify-between gap-2 smrid:flex-col smrid:text-center">
        <div className="self-center flex-col flex gap-2 smrid:gap-0 text-hitam smrid:hidden">
          <h1 className="text-7xl font-bold smrid:text-2xl smrid:mt-2 lgrid:text-5xl">Shoes World</h1>
          <h2 className="text-5xl font-bold smrid:text-lg lgrid:text-3xl">Temukan semua brand sepatu indonesia di sini</h2>
          <h3 className="text-lg font-light smrid:text-smrid lgrid::text-base">
            “Berjalan di Tanah Air dengan Gaya” - Menyuarakan kebanggaan kita terhadap produk lokal dan menunjukkan bahwa sepatu lokal Indonesia dapat bersaing dalam hal gaya dan kualitas.
          </h3>
          <button className="px-5 py-3 bg-ungu rounded-3xl self-start text-putih hover:bg-hitam transition ease-in-out duration-300 smrid:text-xs smrid:p-2 smrid:self-center">Explore Now</button>
        </div>
        <div className="bg-putih p-5 flex flex-col w-[50rem] mdrid:w-full">
          <div className="overflow-hidden relative">
            <div className="flex transition-transform ease-out duration-500 justify-between " style={{ transform: `translateX(-${curr * 100}%)` }}>
              {slide.map((s, i) => (
                <img key={i} className="w-auto rounded-md" src={s} alt="" />
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
          <div className="overflow-x-auto overflow-y-hidden py-2">
            <div>
              <div className="flex-row flex gap-5 h-auto">
                <img onClick={() => setCurr(0)} className={curr === 0 ? "w-40 bg-white rounded-lg shadow-xl border-b-ungu border-b-8" : "w-40 bg-white rounded-lg shadow-xl"} src={slide[0]} alt="" />
                <img onClick={() => setCurr(1)} className={curr === 1 ? "w-40 bg-white rounded-lg shadow-xl border-b-ungu border-b-8" : "w-40 bg-white rounded-lg shadow-xl"} src={slide[1]} alt="" />
                <img onClick={() => setCurr(2)} className={curr === 2 ? "w-40 bg-white rounded-lg shadow-xl border-b-ungu border-b-8" : "w-40 bg-white rounded-lg shadow-xl"} src={slide[2]} alt="" />
                <img onClick={() => setCurr(3)} className={curr === 3 ? "w-40 bg-white rounded-lg shadow-xl border-b-ungu border-b-8" : "w-40 bg-white rounded-lg shadow-xl"} src={slide[3]} alt="" />
                <img onClick={() => setCurr(4)} className={curr === 3 ? "w-40 bg-white rounded-lg shadow-xl border-b-ungu border-b-8" : "w-40 bg-white rounded-lg shadow-xl"} src={slide[4]} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
