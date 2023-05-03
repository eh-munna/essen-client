import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import RecipeCards from './RecipeCards/RecipeCards';

const Recipes = () => {
  // const { id } = useParams();
  const chefs = useLoaderData();
  const {
    id,
    picture,
    name,
    years_experience,
    num_recipes,
    likes,
    recipes,
    bio,
  } = chefs;
  // console.log(chefs);

  return (
    <div className="mt-12">
      <div className="rounded-md hero bg-lime-50">
        <div className="hero-content flex-col md:flex-row">
          <img src={picture} className="max-w-full rounded-lg " />
          <div>
            <div className="p-6 space-y-2">
              <h3 className="text-sky-900 text-4xl font-semibold">{name}</h3>
              <h5 className="text-sky-950 font-medium py-3">{bio}</h5>
              <h3 className="text-sky-500 text-lg font-medium">
                {name} has {years_experience} years of experience
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
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="my-8 md:my-20 text-center text-4xl text-[#398378] capitalize">
          Popular recipes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recipes.map((recipe) => (
            <RecipeCards key={recipe.recipes_id} recipe={recipe}></RecipeCards>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
