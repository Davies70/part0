import React from 'react';

const PersonForm = ({
  handleSubmit,
  handleNameInput,
  handleNumberInput,
  newName,
  newNumber,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameInput} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberInput} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
