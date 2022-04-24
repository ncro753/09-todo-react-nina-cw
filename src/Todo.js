import React from 'react';

function Todo({text, setTodoItems, todoItems, todo}){

    const deleteTodoDo = () => {
        console.log(todo)
  
    };
        
    return (
        <div className="todo">
            <input type="checkbox" className=''></input>
            <li className="todo-item">{text}</li>
            <button className='trash-btn' onClick={deleteTodoDo}> x </button>

        </div>
    );
  }

export default Todo;