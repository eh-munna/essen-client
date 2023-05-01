import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/logo-no-background.png';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <ul>
        <li>
          <Link to="/">
            <img className="max-w-full h-12" src={logo} alt="" />
          </Link>
        </li>
      </ul>
      <ul className="flex gap-4 uppercase items-center">
        <li>
          <Link to="/" className="text-lg font-medium text-[#8abe53]">
            Home
          </Link>
        </li>
        <li>
          <Link to="/" className="text-lg font-medium text-[#8abe53]">
            Recipes
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
            <button className="border p-[1px] border-[#8abe53] rounded-md text-[#fff] text-lg font-medium bg-[#8abe53]">
              Sign In
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
