import React, { Component } from 'react';


function AddNew(){
    const inputTextDo = (d) => {
        console.log(d.target.value);
    };
    return (
        <form id="addNew" action="">
            <input onChange={inputTextDo} type="text" id="newToDo" placeholder="add a new item"></input>
            <button id="button"> + </button>
        </form>
    );
  }

export default AddNew;