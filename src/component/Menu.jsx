import React from "react";
import Pria from "../assets/img/pria.jpg";
import Sport from "../assets/img/sport.jpg";
import Casual from "../assets/img/casual.jpg";

function Menu() {
  return (
    <>
      <div className="flex flex-col justify-center my-5">
        <h1 className="text-hitam font-bold text-3xl text-center sm:text-lg">Kategori</h1>
        <div className="flex flex-wrap p-5 justify-center gap-10 sm:gap-2">
          <div className="relative">
            <img className="w-60 sm:w-28" src={Pria} alt="" />
            <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-putih font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] sm:text-base">Pria</div>
          </div>
          <div className="relative">
            <img className="w-60 sm:w-28" src={Pria} alt="" />
            <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-putih font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] sm:text-base">Wanita</div>
          </div>
          <div className="relative">
            <img className="w-60 sm:w-28" src={Pria} alt="" />
            <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-putih font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] sm:text-base">Sports</div>
          </div>
          <div className="relative">
            <img className="w-60 sm:w-28" src={Pria} alt="" />
            <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-putih font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] sm:text-base">Casual</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
