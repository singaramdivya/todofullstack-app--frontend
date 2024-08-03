import React, { useEffect, useState } from 'react';
import ToDo from './ToDo';
import { getAllToDo, addToDo, updateToDo, deleteToDo } from '../utils/HandleApi';

export default function ToDoList() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };


  const handleSaveNote = () => {
    console.log("save button is clicked")
    if (text.trim()) {
      isUpdating
        ? updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
        : addToDo(text, setText, setToDo);
    }
  };

  return (
    <div>
      <div className='container'>
        <h1>Add ToDo</h1>
        <div className='top'>
          <div className='input-container'>
            <input
              type='text'
              placeholder='Add Todo..'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button className='add' onClick={handleSaveNote}>
              {isUpdating ? "Update" : "Add"}
            </button>
          </div>
          <div className='list'>
            
              {toDo.map((item) => (
                <ToDo
                  key={item._id}
                  text={item.text}
                  updateMode={() => updateMode(item._id, item.text)}
                  deleteToDo={() => deleteToDo(item._id, setToDo)}
                />
              ))}
            
          </div>
        </div>
      </div>
    </div>
  );
}
