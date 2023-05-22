import React from 'react';

const Notification = ({ message, error }) => {
  const successStyle = {
    fontSize: 16,
    borderStyle: 'solid',
    borderRadius: 5,
    borderWidth: 4,
    borderColor: 'green',
    padding: 10,
    color: 'green',
    backgroundColor: 'lightgrey',
  };
  const errorStyle = {
    fontSize: 16,
    borderStyle: 'solid',
    borderRadius: 5,
    borderWidth: 4,
    borderColor: 'red',
    padding: 10,
    color: 'red',
    backgroundColor: 'lightgrey',
  };
  if (message === null) {
    return null;
  }
  return <div style={error ? errorStyle : successStyle}>{message}</div>;
};

export default Notification;
