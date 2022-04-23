import React, { useState } from 'react';
import './App.css';

//components
import AddNew from './AddNew';
import Todo from './Todo';


  function App() {
    const [inputTxt, setInputTxt] = React.useState("");
    return (
      <div className="App">
        <header>
            <h1> My <em>TO DO</em> List</h1>
        </header>
        <AddNew />
        <Todo />
      </div>
    );
  }


export default App;
