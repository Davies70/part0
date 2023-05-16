import React from 'react';
import Part from './Part';

function Content(props) {
  const { course } = props;
  return (
    <div>
      {course.parts.map((part, index) => (
        <Part name={part.name} exercise={part.exercises} key={index} />
      ))}
    </div>
  );
}

export default Content;
