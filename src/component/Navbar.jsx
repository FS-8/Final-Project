import React from "react";
import { useState } from "react";
import { Menu, MenuHandler, MenuList, MenuItem, Button } from "@material-tailwind/react";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="bg-white">
      <nav className="px-16 flex justify-between py-3 align-middle sm:px-5">
        {/* logo */}
        <div className="flex gap-2">
          <img className="w-10" src="https://i.postimg.cc/3JKfM1yP/20231020-174836.png" alt="logo" />
          <h1 className="self-center font-bold text-lg">Shoes World</h1>
        </div>
        {/* search */}
        <form className="self-center sm:hidden">
          <input className="border border-hitam rounded-md px-2 py-1" type="text" />
          <button className="border-hitam border ml-2 px-2 py-1 rounded-md">🔍</button>
        </form>
        {/* login dan regis */}
        <div className="flex gap-2 text-white sm:hidden">
          <button className="px-5  bg-ungu rounded-3xl hover:bg-hitam transition ease-in-out duration-300">Register</button>
          <button className="px-5  bg-hitam rounded-3xl hover:bg-ungu transition ease-in-out duration-300">Login</button>
        </div>
        <button className="hidden text-putih sm:block  bg-hitam">-</button>
      </nav>
      <nav className="px-16 py-2 flex justify-between sm:justify-center bg-hitam sm:px-1 ">
        {/* div pemilihan */}
        <div className="flex gap-5 sm:justify-around text-putih">
          {/* pemilihan brand */}
          <button>brand</button>
          {/* pemilihan sport */}
          <button>sport</button>
          {/* pemilihan pria */}
          <button>pria</button>
          {/* pemilihan wanita */}
          <button>wanita</button>
        </div>
        {/* div icon */}
        <div className="flex text-white gap-2 sm:hidden bg-hitam">
          <h1 className="py-1">whistlist</h1>
          <h1 className="py-1">keranjang</h1>
          <h1 className="py-1">akun</h1>
        </div>
      </nav>
      <div className="border-b-2 bottom-1 pt-2 border-hitam"></div>
    </div>
  );
}

export default Navbar;
