import React, { Component } from 'react';
import reactDom from 'react-dom';
import './App.css';

//components
import AddNew from './AddNew';
import Todo from './Todo';
import TodoList from './TodoList';


// function App() {
// const [inputTxt, setInputTxt] = useState(" ");
// const [todoItems, setTodoItems] = useState([]);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    }

    this.makeTodo = this.makeTodo.bind(this);
    this.updateToDo = this.updateToDo.bind(this);
   
  };

  updateToDo() {
    const self = this;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var todos = JSON.parse(this.responseText);
        console.log(todos);
        self.setState({
          todos: todos
        });
      };
    };
    
    xhttp.open("GET", "https://cse204.work/todos", true);
    xhttp.setRequestHeader("x-api-key","022d4d-8b8c34-099402-451891-dc956a");
    xhttp.send();
  };

  componentDidMount() {
    this.updateToDo();
  }

  // componentWillUnmount(){
  //   //document.removeEventListener("click", deleteTodoDo);
  // };


  display(todos) {

  }

  makeTodo(todoText) {
    var data = { //change some text to html referred to
      text: todoText,
    };
    var self = this;

    // Initalize AJAX Request
    var xhttp2 = new XMLHttpRequest();

    // Response handler
    xhttp2.onreadystatechange = function() {
      // Wait for readyState = 4 & 200 response
      if (this.readyState == 4 && this.status == 200) {
          // parse JSON response
          var todo = JSON.parse(this.responseText);
          self.updateToDo();
      } else if (this.readyState == 4) {
          // this.status !== 200, error from server
          console.log(this.responseText);
      }
    }

    xhttp2.open("POST", "https://cse204.work/todos", true);

    xhttp2.setRequestHeader("Content-type", "application/json");
    xhttp2.setRequestHeader("x-api-key", "022d4d-8b8c34-099402-451891-dc956a");
    xhttp2.send(JSON.stringify(data));

  }
  

  render() {
    return (
      <div className="App">
        <header>
            <h1> My <em>TO DO</em> List</h1>
        </header>
        <AddNew updateToDo={this.updateToDo} makeTodo={this.makeTodo} />
        {this.state.todos.map((todo) => <Todo updateToDo={this.updateToDo} key={todo.id} id={todo.id} text = {todo.text} checked={todo.completed}/>)}
      </div>
    );
  };
}
 


export default App;
