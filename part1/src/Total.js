import React from 'react';

const Total = (props) => {
  return (
    <p>
      Number of exercises{' '}
      {props.course.parts
        .map((part) => part.exercises)
        .reduce((prev, curr) => (curr += prev))}
    </p>
  );
};

export default Total;
