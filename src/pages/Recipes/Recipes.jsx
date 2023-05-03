import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Recipes = () => {
  // const { id } = useParams();
  const chefs = useLoaderData();
  console.log(chefs);

  return <div>data comming</div>;
};

export default Recipes;
