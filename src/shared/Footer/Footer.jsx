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
    <div>
      <div className="grid grid-cols-2 items-center justify-center">
        <div>
          <h4 className="font-medium text-[#398378] text-center my-2">
            Follow Us
          </h4>
          <ul className="flex gap-3 justify-center items-center">
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
          <h4 className="font-medium text-[#398378] text-center my-2">
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
