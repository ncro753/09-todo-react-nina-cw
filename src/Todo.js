import React, { Component } from 'react';

import App from './App'
import AddNew from './AddNew';

class Todo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            checked: this.props.checked
        }

        this.checkTodo = this.checkTodo.bind(this);
        this.deleteTodoDo = this.deleteTodoDo.bind(this);
    }

    componentDidUpdate() {
        if (this.props.checked) {
            document.getElementById(this.props.id).style.textDecoration = "line-through";
        } else {
            document.getElementById(this.props.id).style.textDecoration = "none";
        }
        console.log(this.props.checked);
    }

// function Todo({text, setTodoItems, todoItems, todo}){

    // const deleteTodoDo = () => {
        // console.log(todo)
    // };

//     const completeDo = () => {
//         setTodoItems(todoItems.map(item)) = () => {
//             if(item.id === todo.id){}
//         }

    deleteTodoDo(event) {
        var id = this.props.id;
        var self = this;

        //document.getElementById(id).remove();
        // Initalize AJAX Request
        var xhttp2 = new XMLHttpRequest();

        // Response handler
        xhttp2.onreadystatechange = function() {
            // Wait for readyState = 4 & 200 response
            if (this.readyState == 4 && this.status == 200) {
                // document.getElementById(id).remove();
                // parse JSON response

                //ToDoList();
                self.props.updateToDo();
                 
            } else if (this.readyState == 4) {

                // this.status !== 200, error from server
                console.log(this.responseText);
                console.log("this item tried to be deleted and failed");
            }
        };

        xhttp2.open("DELETE", "https://cse204.work/todos/"+id, true);

        xhttp2.setRequestHeader("Content-type", "application/json");
        xhttp2.setRequestHeader("x-api-key", "022d4d-8b8c34-099402-451891-dc956a");
        xhttp2.send();
    }

    checkTodo(event) {
        var self = this;
        var id = this.props.id;
        const data = {
            completed: event.target.checked
        }
        // Initalize AJAX Request
        var xhttp2 = new XMLHttpRequest();
        // Response handler
        xhttp2.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                //ToDoList();

                event.target.style.textDecoration = "line-through";
                self.props.updateToDo();
            } 
            else if (this.readyState == 4) {
                // this.status !== 200, error from server
                console.log(this.responseText);
            }
        }

        xhttp2.open("PUT", "https://cse204.work/todos/"+id);

        xhttp2.setRequestHeader("Content-type", "application/json");
        xhttp2.setRequestHeader("x-api-key", "022d4d-8b8c34-099402-451891-dc956a");
        xhttp2.send(JSON.stringify(data));
    }

    render() {
        return (
            <div className="todo">
                <input type="checkbox" className='' onChange={this.checkTodo}></input>
                <div className="todo-item" id={this.props.id}>{this.props.text}</div>
                <button className='trash-btn' onClick={this.deleteTodoDo}> x </button>
            </div>
        );
    }
}

export default Todo;