import React from "react";
import Pria from "../assets/img/pria.jpg";
import Sport from "../assets/img/sport.jpg";
import Casual from "../assets/img/casual.jpg";

function Menu() {
  return (
    <>
      <div className="flex flex-col justify-center my-5">
        <h1 className="text-hitam font-bold text-3xl text-center smrid:text-2xl">Kategori</h1>
        <div className="flex flex-wrap p-5 justify-center gap-10 smrid:gap-2">
          <div className="relative">
            <img className="w-60 smrid:w-40 rounded-md" src={Pria} alt="" />
            <div className="absolute inset-0 z-10 flex  justify-between flex-col-reverse  mb-5 items-center text-6xl text-putih font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] smrid:text-2xl cursor-pointer">Pria</div>
          </div>
          <div className="relative">
            <img className="w-60 smrid:w-40 rounded-md" src={Pria} alt="" />
            <div className="absolute inset-0 z-10 flex  justify-between flex-col-reverse  mb-5 items-center text-6xl text-putih font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] smrid:text-2xl cursor-pointer">Wanita</div>
          </div>
          <div className="relative">
            <img className="w-60 smrid:w-40 rounded-md" src={Pria} alt="" />
            <div className="absolute inset-0 z-10 flex  justify-between flex-col-reverse  mb-5 items-center text-6xl text-putih font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] smrid:text-2xl cursor-pointer">Sports</div>
          </div>
          <div className="relative">
            <img className="w-60 smrid:w-40 rounded-md" src={Pria} alt="" />
            <div className="absolute inset-0 z-10 flex  justify-between flex-col-reverse  mb-5 items-center text-6xl text-putih font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] smrid:text-2xl cursor-pointer">Casual</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
