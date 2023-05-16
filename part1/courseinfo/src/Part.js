import React from 'react';

const Part = (props) => {
  const { name, exercise } = props;
  return (
    <p>
      {name} {exercise}
    </p>
  );
};

export default Part;
