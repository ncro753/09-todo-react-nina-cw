import React, {  } from 'react';


function AddNew({setInputTxt, todoItems, setTodoItems, inputTxt}){
    const inputTextDo = (t) => {
        console.log(t.target.value);
        setInputTxt(t.target.value);
    };

    const submitTextDo = (t) => {
        t.preventDefault();
        setTodoItems([
            ...todoItems, {text: inputTxt, completed: false, id: Math.random()*100, user:"124b10-d2cdcf-95e1c5-67d7bf-35b4b9"}
        ]);
        setInputTxt("");
    };

    return (
        <form id="addNew" action="">
            <input 
                value={inputTxt} 
                onChange={inputTextDo} 
                type="text" id="newToDo" 
                placeholder="add a new item">
            </input>
            <button onClick={submitTextDo} id="button"> + </button>
        </form>
    );
  }

export default AddNew;