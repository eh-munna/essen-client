import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Recipes = () => {
  const { id } = useParams();
  // const [test, setTest] = useState([]);

  // console.log(id);
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch('../../../public/chefDetails.json')
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  // console.log(details);

  const test = details.find((d) => {
    d.id === id;
    return d;
  });
  console.log(test);

  return (
    <div>
      Recipes are coming
      {test.name}
    </div>
  );
};

export default Recipes;
