import React from 'react';
import Weather from './Weather';

const Country = ({ country }) => {
  return (
    <div>
      <div>
        <h2>{country.name.common}</h2>
        <div>capital: {country.capital[0]}</div>
        <div>area: {country.area}</div>
        <h3>
          <b>languages:</b>
        </h3>
        <ul key="y">
          {Object.values(country.languages).map((lang) => (
            <li key={lang}>{lang}</li>
          ))}
        </ul>
        <img src={country.flags.png} alt={country.flags.alt}></img>
        <Weather capital={country.capital[0]} />
      </div>
    </div>
  );
};

export default Country;
