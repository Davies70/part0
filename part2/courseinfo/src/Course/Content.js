import React from 'react';
import Part from './Part';

function Content(props) {
  const { course } = props;
  return (
    <div>
      {course.parts.map((part) => (
        <Part name={part.name} exercise={part.exercises} key={part.id} />
      ))}
    </div>
  );
}

export default Content;
