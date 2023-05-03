import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RecipeCards = ({ recipe }) => {
  const { ingredients, name, method } = recipe;
  console.log(recipe);
  return (
    <div className="bg-lime-50 shadow-xl rounded-md p-3">
      <h4 className="py-6 text-sky-500 text-xl">{name}</h4>
      <ul className="list-inside">
        <h3 className="my-2 font-medium">Ingredients are...</h3>
        {ingredients.map((ingredient, idx) => (
          <li className="list-disc" key={idx}>
            {ingredient}
          </li>
        ))}
      </ul>
      <h5 className="my-2 font-medium">How to cook</h5>
      <p>{method}</p>
      <div className="pt-6 rating">
        <input
          onClick={(event) => {
            toast.success(`Recipe is bookmarked`, {
              position: 'top-center',
              hideProgressBar: false,
              closeOnClick: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
              autoClose: 1000,
            });
            event.currentTarget.disabled = true;
          }}
          type="radio"
          name="rating-3"
          className="disabled:opacity-30 disabled:cursor-default rating mask mask-heart bg-lime-400"
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default RecipeCards;
