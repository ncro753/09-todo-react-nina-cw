import React, { Component } from 'react';


// function AddNew({setInputTxt, todoItems, setTodoItems, inputTxt}){
//     const inputTextDo = (t) => {
//         console.log(t.target.value);
//         setInputTxt(t.target.value);
//     };

//     const submitTextDo = (t) => {
//         t.preventDefault();
//         setTodoItems([
//             ...todoItems, {text: inputTxt, completed: false, id: Math.random()*100, user:"124b10-d2cdcf-95e1c5-67d7bf-35b4b9"}
//         ]);
//         setInputTxt("");
//     };

class AddNew extends Component {
    constructor(props) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
    };

    addTodo(event) {
        event.preventDefault();
        const thisObject = this;
        const eventText = document.getElementById("newToDo").value;
        
        thisObject.props.makeTodo(eventText);

        document.getElementById("newToDo").value = "";
    }

    render(){
        return (
            <form id="addNew" onSubmit={this.addTodo}>
                <input  
                    type="text" id="newToDo" 
                    placeholder="add a new item">
                </input>
                <button id="button"> + </button>
            </form>
        );
    }
    }

export default AddNew;