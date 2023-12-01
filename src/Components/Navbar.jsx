import React, { useId } from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BsCart4 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { getSepatu, getUser } from "../Redux/Action/sepatuAction";
import axios from "axios";
import { fetchUserById } from "../Redux/Action/userAction";
// import { fetchUserById } from '../Redux/Action/userAction';

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDivOpen, setIsDivOpen] = useState(false);
  const [search, setSearch] = useState("");
  const { shoes, isLoading, status } = useSelector((state) => state.sepatu);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSepatu());
  }, []);

  const { user } = useSelector((state) => state.sepatu);
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    if (!userId) return;
    if (userId) {
      dispatch(getUser(userId));
    }
  }, []);

  console.log(user);

  const navigate = useNavigate();
  function Logout() {
    navigate("/");
    localStorage.clear();
    sessionStorage.clear();
  }
  return (
    <>
      <div className="bg-white top-0 fixed z-50 w-full">
        <nav className="px-16 flex justify-between py-3 align-middle smrid:px-5">
          {/* logo */}
          <div onClick={() => navigate("/")} className="flex gap-2 cursor-pointer">
            <img className="w-10" src="https://i.postimg.cc/3JKfM1yP/20231020-174836.png" alt="logo" />
            <h1 className="self-center font-bold text-lg">Shoes World</h1>
          </div>
          {/* search */}
          <form className="self-center smrid:hidden">
            <div className="flex">
              <input onChange={(e) => setSearch(e.target.value)} className="border border-hitam rounded-md px-2 py-1 mt-0" type="text" />
              <button onClick={() => navigate(`/cari/${search}`)} className="border-hitam border ml-2 px-2 py-1 rounded-md text-2xl hover:text-ungu hover:border-ungu">
                <CiSearch />
              </button>
            </div>
          </form>
          {/* login dan regis */}
          <div className="flex gap-2 text-white smrid:hidden">
            <button onClick={() => navigate("/register")} className={userId ? "hidden" : "px-5  bg-ungu rounded-3xl hover:bg-hitam transition ease-in-out duration-300"}>
              Register
            </button>
            <button onClick={() => navigate("/login")} className={userId ? "hidden" : "px-5  bg-hitam rounded-3xl hover:bg-ungu transition ease-in-out duration-300 text-putih"}>
              {/* {user.name}  */} Login
            </button>
            {/* nama user */}
            <div className={userId ? "flex justify-center text-center align-middle flex-col px-3 text-hitam" : "hidden"}>
              <h1>{userId ? user.name : ""}</h1>
            </div>
            {/* logout */}
            <button onClick={Logout} className={!userId ? "hidden" : "px-5  bg-hitam rounded-3xl hover:bg-ungu transition ease-in-out duration-300 text-putih"}>
              Logout
            </button>
          </div>
          <button onClick={() => setIsNavOpen(!isNavOpen)} className="hidden text-hitam smrid:block">
            <GiHamburgerMenu className="text-4xl" />
          </button>
        </nav>
        <nav className="px-16 py-2 flex justify-between smrid:justify-center bg-hitam smrid:px-1 ">
          {/* div pemilihan */}
          <div className="flex gap-5 smrid:justify-around text-putih">
            {/* pemilihan Terbasru */}

            <button onClick={() => navigate("/products")}>Terbaru</button>
            {/* pemilihan Brand */}
            <div className="relative">
              <button onClick={() => setIsDivOpen(!isDivOpen)} className="flex align-middle justify-center gap-1">
                Brand
                <IoIosArrowDown className="mt-1" />
              </button>
              <div className={isDivOpen ? "absolute p-2 bg-black  rounded-md mt-2 border border-ungu" : "hidden"}>
                <button onClick={() => navigate("/products/aerostreet")} className="hover:border border-putih p-1">
                  Aerostreet
                </button>
                <button onClick={() => navigate("/products/compass")} className="hover:border border-putih p-1">
                  Compass
                </button>
                <button onClick={() => navigate("/products/pierro")} className="hover:border border-putih p-1">
                  Pierro
                </button>
                <button onClick={() => navigate("/products/ventela")} className="hover:border border-putih p-1">
                  Ventela
                </button>
              </div>
            </div>
            {/* pemilihan pria */}
            <button onClick={() => navigate("/gender/pria")}>Pria</button>
            {/* pemilihan wanita */}
            <button onClick={() => navigate("/gender/wanita")}>Wanita</button>
          </div>
          {/* div icon */}
          <div className="flex text-putih gap-4 smrid:hidden bg-hitam">
            <div onClick={() => navigate("/cart")} className="flex gap-2 justify-center cursor-pointer hover:text-ungu">
              <h1>Keranjang</h1>
              <BsCart4></BsCart4>
            </div>

            {/* <div className="flex flex-col justify-center cursor-pointer hover:text-ungu">
              <CgProfile></CgProfile>
            </div> */}
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
            <button onClick={() => navigate("/register")} className={userId ? "hidden" : "px-5  bg-hitam rounded-3xl hover:border border-ungu  transition ease-in-out duration-300"}>
              Register
            </button>
            <button onClick={() => navigate("/login")} className={userId ? "hidden" : "px-5  bg-hitam rounded-3xl hover:border border-ungu  transition ease-in-out duration-300 text-putih"}>
              {/* {user.name}  */} Login
            </button>
            <div className="flex justify-center text-center align-middle flex-col px-3">
              <h1 className="text-putih">{userId ? user.name : ""}</h1>
            </div>
            <button onClick={Logout} className={!userId ? "hidden" : "px-5  bg-hitam rounded-3xl hover:border border-ungu transition ease-in-out duration-300 text-putih"}>
              Logout
            </button>

            <div onClick={() => navigate("/cart")} className="flex gap-2 justify-center cursor-pointer ">
              <h1>Keranjang</h1>
              <BsCart4></BsCart4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
