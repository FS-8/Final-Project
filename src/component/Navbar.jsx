import React from "react";

function Navbar() {
  return (
    <div className="bg-white">
      <nav className="px-16 flex justify-between py-3 align-middle ">
        {/* logo */}
        <div className="flex gap-2">
          <img className="w-10" src="https://i.postimg.cc/3JKfM1yP/20231020-174836.png" alt="logo" />
          <h1 className="self-center font-bold">Shoes World</h1>
        </div>
        {/* search */}
        <form className="self-center">
          <input className="border border-hitam rounded-md px-2 py-1" type="text" />
          <button className="border-hitam border ml-2 px-2 py-1 rounded-md">🔍</button>
        </form>
        {/* login dan regis */}
        <div className="flex gap-2 text-white">
          <button className="px-5  bg-ungu rounded-3xl hover:bg-hitam transition ease-in-out duration-300">Register</button>
          <button className="px-5  bg-hitam rounded-3xl hover:bg-ungu transition ease-in-out duration-300">Login</button>
        </div>
      </nav>
      <nav className="px-16 py-2 flex justify-between bg-hitam sm:px-1">
        {/* div pemilihan */}
        <div className="flex gap-2">
          {/* pemilihan brand */}
          <form>
            <select className="bg-hitam text-white" name="brands" id="brand">
              <option value="Ventela">Brand</option>
              <option value="Ventela">Ventela</option>
              <option value="Compas">Compas</option>
              <option value="Adidas">Adidas</option>
            </select>
          </form>
          {/* pemilihan sport */}
          <form>
            <select className="bg-hitam text-white" name="brands" id="brand">
              <option value="Ventela">Sport</option>
              <option value="Ventela">Ventela</option>
              <option value="Compas">Compas</option>
              <option value="Adidas">Adidas</option>
            </select>
          </form>
          {/* pemilihan pria */}
          <form>
            <select className="bg-hitam text-white" name="brands" id="brand">
              <option value="Ventela">Pria</option>
              <option value="Ventela">Ventela</option>
              <option value="Compas">Compas</option>
              <option value="Adidas">Adidas</option>
            </select>
          </form>
          {/* pemilihan wanita */}
          <form>
            <select className="bg-hitam text-white" name="brands" id="brand">
              <option value="Ventela">Wanita</option>
              <option value="Ventela">Ventela</option>
              <option value="Compas">Compas</option>
              <option value="Adidas">Adidas</option>
            </select>
          </form>
        </div>
        {/* div icon */}
        <div className="flex text-white gap-2">
          <h1>whistlist</h1>
          <h1>keranjang</h1>
          <h1>akun</h1>
        </div>
      </nav>
      <div className="border-b-2 bottom-1 pt-2 border-hitam"></div>
    </div>
  );
}

export default Navbar;
