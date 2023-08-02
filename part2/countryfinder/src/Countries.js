import React, { useState } from 'react';
import Country from './Country';

const Countries = ({ countries }) => {
  const [showCountry, setShowCountry] = useState(false);
  const [index, setIndex] = useState(null);
  const toggleShow = (event) => {
    setShowCountry(!showCountry);
    setIndex(event.target.value);
  };
  return (
    <div>
      {countries.length === 1 ? (
        <Country country={countries[0]} />
      ) : showCountry ? (
        <Country country={countries[index]} />
      ) : (
        <ul>
          {countries.map((country, index) => (
            <li key={index}>
              {country.name.common}{' '}
              <button value={index} onClick={toggleShow}>
                show
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Countries;
