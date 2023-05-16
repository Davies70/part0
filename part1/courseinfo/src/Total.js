import React from 'react';

const Total = (props) => {
  const { course } = props;
  return (
    <p>
      Number of exercises{' '}
      {course.parts
        .map((part) => part.exercises)
        .reduce((prev, curr) => (curr += prev))}
    </p>
  );
};

export default Total;
