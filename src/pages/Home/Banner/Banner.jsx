import React from 'react';
import chef from '../../../../public/Chef.png';

const Banner = () => {
  return (
    <div className="grid md:grid-cols-2 gap-3 items-center mt-4 md:mt-8">
      <div className="order-2 md:order-1">
        <h1 className="my-2 md:my-6 text-3xl md:text-5xl text-[#a5db67]">
          <span className="text-[#398378]">Welcome</span> <br /> to our kitchen
        </h1>

        <p className="my-2 md:my-6 font-semibold">
          Choose your food from our best chefs.
        </p>
        <p className="font-semibold">
          We provide best service as much as we can.
        </p>

        <button
          type="submit"
          className="my-6 md:my-12 border p-1 border-[#8abe53] rounded-md text-[#fff] text-lg font-medium bg-[#8abe53]"
        >
          Let&apos;s go
        </button>
      </div>
      <div className="order-1 md:order-2">
        <img className="max-w-full" src={chef} alt="" />
      </div>
    </div>
  );
};

export default Banner;
