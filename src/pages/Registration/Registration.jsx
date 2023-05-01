import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <div className="w-3/4 mx-auto py-3 md:py-10">
      <h2 className="my-4 text-center text-[#398378] text-2xl">
        Please Sign Up
      </h2>
      <form className="w-1/2 mx-auto">
        <label htmlFor="email" className="block text-[#8ABE53] mt-4">
          Name
        </label>
        <input
          required
          className="text-[#398378] w-full p-1 focus:outline-none border-b border-blue-800 focus:border-blue-500"
          type="text"
          name="repeatPassword"
          placeholder="Enter your name"
        />
        <label htmlFor="email" className="block text-[#8ABE53] mt-4">
          Email
        </label>
        <input
          required
          className="text-[#398378] w-full p-1 focus:outline-none border-b border-blue-800 focus:border-blue-500"
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <label htmlFor="email" className="block text-[#8ABE53] mt-4">
          Password
        </label>
        <input
          required
          className="text-[#398378] w-full p-1 focus:outline-none border-b border-blue-800 focus:border-blue-500"
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <label htmlFor="email" className="block text-[#8ABE53] mt-4">
          Photo URL
        </label>
        <input
          required
          className="text-[#398378] w-full p-1 focus:outline-none border-b border-blue-800 focus:border-blue-500"
          type="text"
          name="repeatPassword"
          placeholder="Share your photo url"
        />
        <div className="my-4">
          <button
            type="submit"
            className="border p-1 border-[#8abe53] rounded-md text-[#fff] text-lg font-medium bg-[#8abe53]"
          >
            Sign Up
          </button>
        </div>
      </form>
      <h6 className="text-[#398378]  my-4 text-base text-center">
        Already have an account?{' '}
        <Link className="text-[#8ABE53]" to="/sign-in">
          Sign In
        </Link>
      </h6>
    </div>
  );
};

export default Registration;
