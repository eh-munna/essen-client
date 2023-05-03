import React from 'react';

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
    </div>
  );
};

export default RecipeCards;
