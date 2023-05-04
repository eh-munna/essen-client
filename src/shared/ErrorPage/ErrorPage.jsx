import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="container my-16 mx-auto flex flex-col justify-center items-center gap-8">
      <div>
        <img
          className="rounded-md shadow-2xl max-w-full place-content-center"
          src="https://i.ibb.co/DYQnrBZ/shutterstock-531145954.jpg"
          alt=""
        />
      </div>

      <div className="">
        <Link to="/" className="">
          <button className="border p-4 border-[#8abe53] rounded-md text-[#fff] text-lg font-medium bg-[#8abe53]">
            Let's go home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
