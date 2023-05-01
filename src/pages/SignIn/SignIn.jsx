import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="w-3/4 mx-auto py-3 md:py-10">
      <h2 className="my-4 text-center text-[#398378] text-2xl">
        Please Sign In
      </h2>
      <form className="w-full md:w-1/2 mx-auto">
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
        <div className="my-4">
          <button
            type="submit"
            className="border p-1 border-[#8abe53] rounded-md text-[#fff] text-lg font-medium bg-[#8abe53]"
          >
            Sign In
          </button>
        </div>
      </form>
      <div className="flex justify-center items-center gap-3">
        <h6 className="text-[#398378] text-base text-center">
          Or sign in with{' '}
        </h6>
        <div className="flex items-center gap-3">
          <button className="border px-1 border-[#8abe53] rounded-md text-[#8abe53] text-lg font-medium bg-slate-50">
            Google
          </button>
          <button className="border px-1 border-[#8abe53] rounded-md text-[#8abe53] text-lg font-medium bg-slate-50">
            GitHub
          </button>
        </div>
      </div>
      <h6 className="text-[#398378]  my-4 text-base text-center">
        Don&apos;t have an account?{' '}
        <Link className="text-[#8ABE53]" to="/registration">
          Sign Up
        </Link>
      </h6>
    </div>
  );
};

export default SignIn;
