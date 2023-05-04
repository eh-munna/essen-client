import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../public/logo-no-background.png';
import { FaBars, FaWindowClose } from 'react-icons/fa';

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  console.log(toggle);
  return (
    <div>
      <div
        // onMouseOver={() => {
        //   console.log('mouse enter');
        //   setToggle(!toggle);
        // }}
        onClick={() => {
          setToggle(!toggle);
        }}
        className="absolute right-2 top-5 justify-end md:hidden"
      >
        {toggle ? (
          <FaBars className="text-lime-500 text-2xl"></FaBars>
        ) : (
          <FaWindowClose className="text-lime-500 text-2xl"></FaWindowClose>
        )}
      </div>
      <nav className="flex justify-between items-center">
        <ul className="">
          <li>
            <Link to="/">
              <img className="max-w-full h-12 md:h-16" src={logo} alt="" />
            </Link>
          </li>
        </ul>
        <ul
          className={
            toggle
              ? ` shadow-lg md:shadow-none rounded-md justify-center w-full py-2 md:py-0 md:rounded-none z-50 absolute bg-lime-50 md:bg-transparent  md:w-fit right-0 -top-48 md:relative md:top-0  flex mt-3 md:mt-0 flex-col md:flex-row gap-4 uppercase items-center`
              : ` shadow-lg md:shadow-none rounded-md justify-center w-full py-2 md:py-0  md:rounded-none z-50 absolute bg-lime-50  md:bg-transparent md:w-fit right-0 top-12 md:relative md:top-0 flex mt-3 md:mt-0  flex-col md:flex-row gap-4 uppercase items-center`
          }
        >
          <li>
            <Link
              to="/"
              className="text-base md:text-lg font-medium text-[#8abe53]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              className="text-base md:text-lg font-medium text-[#8abe53]"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/registration">
              <button className="border px-1 border-[#8abe53] rounded-md text-[#8abe53] text-lg font-medium bg-slate-50">
                Sign Up
              </button>
            </Link>
          </li>
          <li>
            <Link to="/sign-in" className="">
              <button className="border py-[1px] px-1 border-[#8abe53] rounded-md text-[#fff] text-lg font-medium bg-[#8abe53]">
                Sign In
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
