import React from 'react';
import Part from './Part';

function Content(props) {
  return (
    <div>
      {props.course.parts.map((part, index) => (
        <Part name={part.name} exercise={part.exercises} key={index} />
      ))}
    </div>
  );
}

export default Content;
