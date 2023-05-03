import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const Recipes = () => {
  // const { id } = useParams();
  const chefs = useLoaderData();
  const { id, name, years_experience, num_recipes, likes } = chefs;
  console.log(chefs);

  return (
    <div className="mt-12">
      <div className="hero bg-lime-50">
        <div className="hero-content flex-col md:flex-row">
          <img
            src="https://img.freepik.com/fotos-kostenlos/portraet-des-laechelnden-kochs-in-der-uniform_329181-675.jpg?size=626&ext=jpg"
            className="max-w-full rounded-lg shadow-2xl"
          />
          <div>
            <div className="p-6 space-y-2">
              <h3 className="text-sky-900 text-4xl font-semibold">{name}</h3>
              <h3 className="text-sky-500 text-lg font-medium">
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
                  className="border px-2 py-1 border-[#8abe53] rounded-md text-[#fff] text-lg font-medium bg-[#8abe53]"
                >
                  <Link to={`/recipes/${id}`}>View Recipes</Link>
                </button>
              </div>
            </div>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
