import React from 'react';

const Filter = ({ filter, handleFilterInput }) => {
  return (
    <div>
      <p>
        filter shown with <input value={filter} onChange={handleFilterInput} />
      </p>
    </div>
  );
};

export default Filter;
