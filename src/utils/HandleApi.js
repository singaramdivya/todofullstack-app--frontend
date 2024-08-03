import axios from 'axios';

const baseUrl = "https://todofullstack-app-server-backend-2.onrender.com/todos";

// Get token from local storage or state
const getToken = () => localStorage.getItem('token') || '';

const getAllToDo = (setToDo) => {
    axios.get(baseUrl, {
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    })
    .then(({ data }) => {
        console.log('Fetched todos:', data);
        setToDo(data);
    })
    .catch((err) => console.error('Error fetching todos', err));
};

const addToDo = (text, setText, setToDo) => {
    axios.post(`${baseUrl}/save`, { text }, {
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    })
    .then(() => {
        setText(""); // Clear input field
        getAllToDo(setToDo); // Refresh the list
    })
    .catch((err) => console.error('Error adding todo', err));
};

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
    axios.post(`${baseUrl}/update`, { _id: toDoId, text }, {
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    })
    .then(() => {
        setText("");
        setIsUpdating(false);
        getAllToDo(setToDo);
    })
    .catch((err) => console.error('Error updating todo', err));
};

const deleteToDo = (_id, setToDo) => {
    axios.post(`${baseUrl}/delete`, { _id }, {
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    })
    .then(() => {
        console.log("Deleted Successfully....");
        getAllToDo(setToDo);
    })
    .catch((err) => console.error('Error deleting todo', err));
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
