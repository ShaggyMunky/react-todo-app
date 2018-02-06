import "materialize-css/dist/css/materialize.min.css";
import React from 'react';
import ToDoList from "./todo_list";

const App = () => (
    <div className="container">
        <h1 className="center-align"> To Do app</h1>
      <ToDoList/>
    </div>
);

export default App;
