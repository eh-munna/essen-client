import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const ChefCards = ({ singleChef }) => {
  const { id, name, likes, num_recipes, years_experience, picture } =
    singleChef;

  return (
    <div>
      <div className="rounded-md border-rose-500 bg-lime-50 shadow-xl">
        <LazyLoad>
          <img
            className="max-w-full object-cover h-auto md:h-64 object-center  w-full rounded-md mx-auto"
            src={picture}
            alt=""
          />
        </LazyLoad>
        <div className="p-6 space-y-2">
          <h3 className="text-sky-900 text-xl md:text-2xl font-semibold">
            {name}
          </h3>
          <h3 className="text-sky-500 text-base md:text-lg font-medium">
            {years_experience} years of experience
          </h3>
          <div className=" flex justify-between items-center">
            <h4 className="text-slate-600 font-medium">
              {num_recipes} recipes
            </h4>
            <div className="flex justify-between items-center rating gap-1">
              <input
                type="radio"
                name="rating-3"
                className="h-5 rating mask mask-heart bg-red-400"
              />
              <h4 className="text-slate-600 font-medium">{likes}</h4>
            </div>
          </div>
          <div className="pt-6">
            <button
              type="submit"
              className="border px-2 py-1 border-[#8abe53] rounded-md text-[#fff] text-base md:text-lg font-medium bg-[#8abe53]"
            >
              <Link to={`/recipes/${id}`}>View Recipes</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCards;
