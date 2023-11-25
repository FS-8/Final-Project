import { BiUser } from 'react-icons/bi';
import { AiOutlineUnlock } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Loginadmin() {
  return (
    <div className="text-white h-[100vh] flex justify-center items-center" style={{ backgroundImage: "url('../src/Assets/bg.png')" }}>
      <div className="bg-slate-800 border border-slate-600 rounded-md p-12 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative transition-all duration-200">
        <h1 className="text-5xl text-white font-bold text-center mb-6">Login</h1>
        <form action="">
          <div className="relative my-4">
            <input
              type="email"
              className="block w-72 py-2.5 px-0 text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-ungu focus:outline-none focus:ring-0 focus:text-putih focus:border-ungu peer"
              placeholder=""
            />
            <label
              htmlFor=""
              className="absolute text-xl text-white duration-300 transform-translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-hitam peer-focus:dark:text-hitam peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Email
            </label>
            <BiUser className="absolute top-4 right-2" />
          </div>
          <div className="relative my-4">
            <input
              type="password"
              className="block w-72 py-3.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-ungu focus:outline-none focus:ring-0 focus:text-white focus:border-ungu peer"
              placeholder=""
            />
            <label
              htmlFor=""
              className="absolute text-xl text-white duration-300 transform-translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-hitam peer-focus:dark:text-hitam peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Password
            </label>
            <AiOutlineUnlock className="absolute top-4 right-2" />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <input type="checkbox" name="" id="" />
              <label htmlFor="Remember Me">Remember Me</label>
            </div>
            <Link to="" className="text-putih hover:text-hitam">
              Forgot Password?
            </Link>
          </div>
          <button className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-ungu hover:bg-ungu hover:text-putih py-2 transition-colors duration-300" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Loginadmin;
