import React from 'react';
import UserOutput from './UserOutput';

const input = (props) => {
  return (
    <div>
      <h2>Write something:</h2>
      <input type="text" onChange={props.changed} value={props.username} />
    </div>
  )
};

export default input;