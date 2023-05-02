import React, { useEffect, useState } from 'react';
import ChefCards from './ChefCards/ChefCards';

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch('../../../../public/chefs.json')
      .then((res) => res.json())
      .then((data) => setChefs(data.chefs));
  }, []);
  return (
    <div>
      <h2 className="my-8 md:my-20 text-center text-4xl text-[#398378] capitalize">
        meet our talented chefs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {chefs.map((singleChef) => (
          <ChefCards key={singleChef.id} singleChef={singleChef}></ChefCards>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
