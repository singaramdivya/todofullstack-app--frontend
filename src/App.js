// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
// import Register from './components/Register';
// import Login from './components/Login';
// import ToDoList from './components/ToDoList';
// import { getToken, removeToken } from './api';

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(!!getToken());

//   const handleLogout = () => {
//     removeToken();
//     setIsLoggedIn(false);
//   };

//   return (
//     <Router>
//       <div className="app">
//         <nav>
//           <Link to="/">Home</Link>
//           {isLoggedIn ? (
//             <>
//               <Link to="/todos">To-Do List</Link>
//               <button onClick={handleLogout}>Logout</button>
//             </>
//           ) : (
//             <>
//               <Link to="/register">Register</Link>
//               <Link to="/login">Login</Link>
//             </>
//           )}
//         </nav>
//         <Routes>
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
//           <Route path="/todos" element={isLoggedIn ? <ToDoList /> : <Navigate to="/login" />} />
//           <Route path="/" element={<h1>Welcome to the To-Do App</h1>} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;


import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link,Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import ToDoList from './components/ToDoList';
import { getToken, removeToken } from './api';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!getToken());
  

  const handleLogout = () => {
    removeToken();
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="app">
      <nav>
      {isLoggedIn ? (
            <>
              {/* <Link to="/todos">To-Do List</Link> */}
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/">Register</Link>
              <Link to="/login">Login</Link>
            </>
          )}
      </nav>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
          <Route path="/todos" element={isLoggedIn ? <ToDoList /> : <Navigate to="/login" />} />
          {/* <Route path="/" element={<h1>Welcome to the To-Do App</h1>} /> */}
        </Routes>

      </div>
    </Router>
  );
};

export default App;
