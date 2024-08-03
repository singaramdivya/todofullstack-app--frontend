import React from 'react';

const ToDo = ({ text, updateMode, deleteToDo }) => {
  return (
    <div className='todo-item'>
      <span>{text}</span>
      <button onClick={updateMode}>Edit</button>
      <button onClick={deleteToDo}>Delete</button>
    </div>
  );
};

export default ToDo;
