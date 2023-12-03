// import React from 'react';
import { BiUser } from 'react-icons/bi';
import { AiOutlineUnlock } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Navbar from '../../Components/Login/Navbar';

function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleRegister = async (e) => {
    e.preventDefault();

    const { data } = await axios.post('http://localhost:3000/users/register', user);

    navigate('/login');
    localStorage.setItem('token', data.token);
    localStorage.setItem('userId', data.userId);
  };
  return (
    <div className="text-white h-[100vh] flex justify-center items-center" style={{ backgroundImage: "url('../src/Assets/bg.png')" }}>
      <Navbar></Navbar>
      <div className="bg-slate-800 border border-slate-600 rounded-md p-[80px] shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative transition-all duration-200">
        <h1 className="text-5xl font-bold text-center mb-8 ">Register</h1>
        <form>
          <div className="relative my-4">
            <input
              type="text"
              className="block w-72 py-3.5 px-0 text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-ungu focus:outline-none focus:ring-0 focus:text-white focus:border-ungu peer"
              placeholder=" "
              name="name"
              value={user.name}
              onChange={handleChange}
            />
            <label className="absolute text-lg text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-hitam peer-focus:dark:text-hitam peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Name
            </label>
            <BiUser className="absolute top-4 right-4 text-putih" />
          </div>
          <div className="relative my-4">
            <input
              type="text"
              className="block w-72 py-3.5 px-0 text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-ungu focus:outline-none focus:ring-0 focus:text-white focus:border-ungu peer"
              placeholder=" "
              name="email"
              value={user.email}
              onChange={handleChange}
            />
            <label className="absolute text-lg text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-hitam peer-focus:dark:text-hitam peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Email
            </label>
            <BiUser className="absolute top-4 right-4 text-putih" />
          </div>
          <div className="relative my-4">
            <input
              type="password"
              className="block w-72 py-3.5 px-0 text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-ungu focus:outline-none focus:ring-0 focus:text-white focus:border-ungu peer"
              placeholder=" "
              name="password"
              value={user.password}
              onChange={handleChange}
            />
            <label className="absolute text-lg text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-hitam peer-focus:dark:text-hitam peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Password
            </label>
            <AiOutlineUnlock className="absolute top-4 right-4 text-putih" />
          </div>
          <button onClick={handleRegister} className="w-full mb-4 text-[18px] mt-6 rounded-full bg-putih text-ungu hover:bg-ungu hover:text-white py-2 transition-colors duration-300" type="submit">
            Register
          </button>
          <div className="mt-2 items-center text-2lg">
            <div className="my-4">
              <span className="m-14">
                Already Register?{' '}
                <span>
                  <Link className="text-putih hover:text-hitam" to="/Login">
                    Login
                  </Link>
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
