import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSepatu } from "../Redux/Action/sepatuAction";
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BsCart4 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDivOpen, setIsDivOpen] = useState(false);
  const { shoes, isLoading, status } = useSelector((state) => state.sepatu);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSepatu());
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white top-0 fixed z-50 w-full">
        <nav className="px-16 flex justify-between py-3 align-middle sm:px-5">
          {/* logo */}
          <div onClick={() => navigate("/")} className="flex gap-2">
            <img className="w-10" src="https://i.postimg.cc/3JKfM1yP/20231020-174836.png" alt="logo" />
            <h1 className="self-center font-bold text-lg">Shoes World</h1>
          </div>
          {/* search */}
          <form className="self-center sm:hidden">
            <div className="flex">
              <input className="border border-hitam rounded-md px-2 py-1 mt-0" type="text" />
              <button className="border-hitam border ml-2 px-2 py-1 rounded-md text-2xl hover:text-ungu hover:border-ungu">
                <CiSearch />
              </button>
            </div>
          </form>
          {/* login dan regis */}
          <div className="flex gap-2 text-white sm:hidden">
            <button className="px-5  bg-ungu rounded-3xl hover:bg-hitam transition ease-in-out duration-300">Register</button>
            <button className="px-5  bg-hitam rounded-3xl hover:bg-ungu transition ease-in-out duration-300">Login</button>
          </div>
          <button onClick={() => setIsNavOpen(!isNavOpen)} className="hidden text-hitam sm:block">
            <GiHamburgerMenu className="text-4xl" />
          </button>
        </nav>
        <nav className="px-16 py-2 flex justify-between sm:justify-center bg-hitam sm:px-1 ">
          {/* div pemilihan */}
          <div className="flex gap-5 sm:justify-around text-putih">
            {/* pemilihan Terbasru */}

            <button onClick={() => navigate("/products")}>Terbaru</button>
            {/* pemilihan Brand */}
            <div className="relative">
              <button onClick={() => setIsDivOpen(!isDivOpen)} className="flex align-middle justify-center">
                <h1 className="mt-1 mr-2 sm:mt-0">Brand</h1>{" "}
                <h1 className="mt-2 sm:mt-1">
                  <IoIosArrowDown />
                </h1>
              </button>
              <div className={isDivOpen ? "absolute p-2 bg-black  rounded-md mt-2 border border-ungu" : "hidden"}>
                <button className="hover:border border-putih p-1">Aerostreet</button>
                <button className="hover:border border-putih p-1">Compass</button>
                <button className="hover:border border-putih p-1">Pierro</button>
                <button className="hover:border border-putih p-1">Ventela</button>
              </div>
            </div>
            {/* pemilihan pria */}
            <button>pria</button>
            {/* pemilihan wanita */}
            <button>wanita</button>
          </div>
          {/* div icon */}
          <div className="flex text-putih gap-4 sm:hidden bg-hitam">
            <div className="flex flex-col justify-center cursor-pointer hover:text-ungu">
              <FaRegHeart></FaRegHeart>
            </div>
            <div className="flex flex-col justify-center cursor-pointer hover:text-ungu">
              <BsCart4></BsCart4>
            </div>
            <div className="flex flex-col justify-center cursor-pointer hover:text-ungu">
              <CgProfile></CgProfile>
            </div>
          </div>
        </nav>
        <div className="border-b-2 bottom-1 pt-2 border-hitam"></div>
        <div className={!isNavOpen ? "hidden" : "bg-ungu right-0 p-2 text-putih z-10"}>
          {/* search */}
          <form className="self-center flex">
            <div className="flex w-full">
              <input className="border border-hitam rounded-md px-2 py-1 mt-0 w-full" type="text" />
              <button className="border-hitam border bg-hitam ml-2 px-2 py-1 rounded-md text-2xl hover:text-ungu hover:border-ungu">
                <CiSearch />
              </button>
            </div>
          </form>
          {/* login dan regis */}
          <div className="flex flex-col gap-2 mt-2">
            <button className="px-5 py-2 bg-hitam rounded-3xl hover:bg-ungu transition ease-in-out duration-300">Register</button>
            <button className="px-5 py-2 bg-hitam rounded-3xl hover:bg-ungu transition ease-in-out duration-300">Login</button>

            <h1 className="py-1">whistlist</h1>
            <h1 className="py-1">keranjang</h1>
            <h1 className="py-1">akun</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
