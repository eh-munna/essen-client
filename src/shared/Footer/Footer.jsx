import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';

const Footer = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="my-4 md:my-20">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center">
        <div className="mt-4 md:mt-0 text-center">
          <h4 className="font-medium text-[#398378] text-lg my-2">
            We're located at
          </h4>
          <ul className="flex justify-center md:justify-normal md:flex-col gap-2 md:gap-0">
            <li className="text-[#8abe53] md:text-lg">Demostraße 23</li>
            <li className="text-[#8abe53] md:text-lg">12345 Berlin</li>
            <li className="text-[#8abe53] md:text-lg">Germany</li>
          </ul>
        </div>
        <div className="mt-4 md:mt-0">
          <h4 className="font-medium text-[#398378] text-center my-2 text-lg">
            Follow Us
          </h4>
          <ul className="flex gap-6 md:gap-3 justify-center">
            <li className="text-[#8abe53] text-xl">
              <Link to="/">
                <FaFacebookF />
              </Link>
            </li>
            <li className="text-[#8abe53] text-xl">
              <Link to="/">
                <FaInstagram />
              </Link>
            </li>
            <li className="text-[#8abe53] text-xl">
              <Link to="/">
                <FaWhatsapp />
              </Link>
            </li>
            <li className="text-[#8abe53] text-xl">
              <Link to="/">
                <FaTwitter />
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-4 md:mt-0">
          <h4 className="font-medium text-[#398378] text-center my-2 text-lg">
            Useful Links
          </h4>
          <ul className="flex md:flex-col justify-center items-center gap-3">
            <li className="text-[#8abe53] text-base">
              <Link to="/">Home</Link>
            </li>
            <li className="text-[#8abe53] text-base">
              <Link to="/blogs">Blogs</Link>
            </li>
            {!user && (
              <>
                <li className="text-[#8abe53] text-base">
                  <Link to="/sign-in">Sign In</Link>
                </li>
                <li className="text-[#8abe53] text-base">
                  <Link to="/registration">Sign Up</Link>
                </li>
              </>
            )}
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
