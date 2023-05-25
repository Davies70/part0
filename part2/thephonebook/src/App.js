import { useState, useEffect } from 'react';
import axios from 'axios';
import Countries from './Countries';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (value) {
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
        .then((response) => response.data)
        .then((data) =>
          setCountries(
            data.filter((countryObj) =>
              countryObj.name.common.toLowerCase().includes(value.toLowerCase())
            )
          )
        );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <form>
        find countries
        <input type="search" onChange={handleChange} value={value}></input>
      </form>

      <div>
        {countries.length > 10 ? (
          <div>Too many matches, specifiy another filter</div>
        ) : (
          <Countries countries={countries} />
        )}
      </div>
    </div>
  );
};

export default App;
