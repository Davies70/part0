import React from 'react';

const Button = (props) => {
  const { text, eventHandler } = props;
  return <button onClick={eventHandler}>{text}</button>;
};

export default Button;
