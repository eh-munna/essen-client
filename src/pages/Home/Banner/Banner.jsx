import React from 'react';
import chef from '../../../../public/Chef.png';

const Banner = () => {
  return (
    <div className="grid md:grid-cols-2 gap-3 items-center">
      <div className="space-y-4">
        <h1 className="md:text-5xl text-[#a5db67]">
          <span className="text-[#398378]">Herzlich willkommen</span> <br /> in
          unserer Küche
        </h1>

        <p>
          Wählen Sie Ihr Essen von unseren besten Köchen. Wählen Sie Ihr Essen
          von unseren besten Köchen. Wir sind die Beste in der Stadt.
        </p>

        <button
          type="submit"
          className="border p-1 border-[#8abe53] rounded-md text-[#fff] text-lg font-medium bg-[#8abe53]"
        >
          Los geht&apos;s
        </button>
      </div>
      <div>
        {' '}
        <img className="max-w-full" src={chef} alt="" />{' '}
      </div>
    </div>
  );
};

export default Banner;
