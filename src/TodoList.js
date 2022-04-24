import React, { Component } from 'react';

import Todo from './Todo';

function TodoList(){
    return (
        <div id="todoContainer">
            <ul id="todoItems">
             <Todo />
            </ul>
       </div>
    );
  }

export default TodoList;
