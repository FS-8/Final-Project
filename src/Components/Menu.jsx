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
          <div className="relative  ">
            <img className="w-60 smrid:w-40 rounded-md " src="https://d2k52l910ymyzx.cloudfront.net/blog/wp-content/uploads/2020/11/26123259/gudangventela_124646017_820646835432806_6703998581866251577_n.jpg" alt="" />
            <div className="absolute inset-0 z-10 flex  justify-between flex-col-reverse  mb-5 items-center text-6xl text-putih font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] smrid:text-2xl cursor-pointer">Pria</div>
          </div>
          <div className="relative w-60  smrid:w-40 overflow-hidden">
            <img className="w-96 smrid:w-40 rounded-md" src="https://cdn.idntimes.com/content-images/post/20190515/57775452-862343397439658-5245428455365170266-n-3bad84ff9fb557ba5de00b554cc7e667.jpg" alt="" />
            <div className="absolute inset-0 z-10 flex  justify-between flex-col-reverse  mb-5 items-center text-6xl text-putih font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] smrid:text-2xl cursor-pointer">Wanita</div>
          </div>
          <div className="relative  ">
            <img className="w-60 smrid:w-40 rounded-md" src="https://koran-jakarta.com/images/article/brand-sepatu-lokal-terbaik-saat-ini-untuk-tampil-keren-210402220722.jpg" alt="" />
            <div className="absolute inset-0 z-10 flex  justify-between flex-col-reverse  mb-5 items-center text-6xl text-putih font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] smrid:text-2xl cursor-pointer">Sports</div>
          </div>
          <div className="relative  ">
            <img className="w-60 smrid:w-40 rounded-md" src="https://i.pinimg.com/originals/4d/1a/7f/4d1a7f1a1ce5885e1ceff7e72d65bf83.jpg" alt="" />
            <div className="absolute inset-0 z-10 flex  justify-between flex-col-reverse  mb-5 items-center text-6xl text-putih font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] smrid:text-2xl cursor-pointer">Casual</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
