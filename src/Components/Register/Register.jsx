// import React from 'react';
import { BiUser } from 'react-icons/bi';
import { AiOutlineUnlock } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div>
      <div className="bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative transition-all duration-200">
        <h1 className="text-5xl font-bold text-center mb-8">Register</h1>
        <form>
          <div className="relative my-4">
            <input
              type="text"
              className="block w-72 py-3.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
              placeholder=" "
            />
            <label className="absolute text-lg text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Your Name
            </label>
            <BiUser className="absolute top-4 right-4 text-slate-400" />
          </div>
          <div className="relative my-4">
            <input
              type="password"
              className="block w-72 py-3.5 px-0 text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
              placeholder=" "
            />
            <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Your Password
            </label>
            <AiOutlineUnlock className="absolute top-4 right-4 text-slate-400" />
          </div>
          <div className="relative my-4">
            <input
              type="password"
              className="block w-72 py-3.5 px-0 text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
              placeholder=" "
            />
            <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Your Comfirm Password
            </label>
            <AiOutlineUnlock className="absolute top-4 right-4 text-slate-400" />
          </div>
          <button className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300" type="submit">
            Register
          </button>
          <div className="mt-2 items-center">
            <div className="my-4">
              <span>
                Already Register?{' '}
                <span className="text-blue-500">
                  {' '}
                  <Link to="/Login">Login</Link>
                </span>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
