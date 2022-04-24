import React, { useState } from 'react';
import './App.css';

//components
import AddNew from './AddNew';
import TodoList from './TodoList';


  function App() {
    const [inputTxt, setInputTxt] = useState("");
    const [todoItems, setTodoItems] = useState([]);
    return (
      <div className="App">
        <header>
            <h1> My <em>TO DO</em> List</h1>
        </header>
        <AddNew inputText={inputTxt} todoItems={todoItems} setTodoItems={setTodoItems} setInputTxt={setInputTxt} />
        <TodoList />
      </div>
    );
  }


export default App;
