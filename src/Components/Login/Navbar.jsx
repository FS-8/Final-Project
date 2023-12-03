import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="bg-putih top-0 fixed z-50 w-full">
      <nav className="px-16 flex justify-between py-3 align-middle smrid:px-5">
        {/* logo */}
        <div onClick={() => navigate('/')} className="flex gap-2 cursor-pointer">
          <img className="w-10" src="https://i.postimg.cc/3JKfM1yP/20231020-174836.png" alt="logo" />
          <h1 className="self-center font-bold text-lg text-hitam">Shoes World</h1>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
