import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="my-4 md:my-20">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center">
        <div className="text-center">
          <h4 className="font-medium text-[#398378] text-lg my-2">
            We're located at
          </h4>
          <ul className="">
            <li className="text-[#8abe53] text-lg">Demostraße 23</li>
            <li className="text-[#8abe53] text-lg">12345 Berlin</li>
            <li className="text-[#8abe53] text-lg">Germany</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-[#398378] text-center my-2 text-lg">
            Follow Us
          </h4>
          <ul className="flex gap-3 justify-center">
            <li className="text-[#8abe53] text-xl">
              <Link>
                <FaFacebookF />
              </Link>
            </li>
            <li className="text-[#8abe53] text-xl">
              <Link>
                <FaInstagram />
              </Link>
            </li>
            <li className="text-[#8abe53] text-xl">
              <Link>
                <FaWhatsapp />
              </Link>
            </li>
            <li className="text-[#8abe53] text-xl">
              <Link>
                <FaTwitter />
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-[#398378] text-center my-2 text-lg">
            Useful Links
          </h4>
          <ul className="flex flex-col justify-center items-center gap-3">
            <li className="text-[#8abe53] text-base">
              <Link to="/">Home</Link>
            </li>
            <li className="text-[#8abe53] text-base">
              <Link to="/recipes">Recipes</Link>
            </li>
            <li className="text-[#8abe53] text-base">
              <Link to="/sign-in">Sign In</Link>
            </li>
            <li className="text-[#8abe53] text-base">
              <Link to="/registration">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
      <h6 className="text-center text-[#398378] my-4">
        &copy;<Link to="/">Essen</Link> 2023
      </h6>
    </div>
  );
};

export default Footer;
