import React from 'react';

const Total = (props) => {
  const { course } = props;
  return (
    <p>
      <b>
        total of{' '}
        {course.parts
          .map((part) => part.exercises)
          .reduce((prev, curr) => (curr += prev))}{' '}
        exercises
      </b>
    </p>
  );
};

export default Total;
