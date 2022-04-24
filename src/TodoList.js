import React, {  } from 'react';

import Todo from './Todo';

function TodoList({ todoItems, setTodoItems }){

 console.log(todoItems);
    return (
        <div id="todoContainer">
            <ul id="todoListed">
             {todoItems.map((todo) =>(
               <Todo 
                setTodoItems={setTodoItems} 
                todoItems={todoItems} 
                key={todo.id} 
                text={todo.text}
                todo={todo}/>
             ))}
            </ul>
       </div>
    );
  }

export default TodoList;
